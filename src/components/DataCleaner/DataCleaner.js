export default class DataCleaner {
  constructor(data) {
    this.originalData = data;
    this.minuteData = this.filterByMinute(data.samples);
    this.channels = data.channelSet;
    this.GPSCoords = this.filterGPSCoords();
  }

  filterGPSCoords(rangeData = this.minuteData) {
    const GPSCoords = rangeData.reduce((coords, sample) => {
      const { positionLat: lat, positionLong: lng } = sample.values;

      if (lat && lng) {
        const coordsObj = {
          lat,
          lng,
        };

        coords.push(coordsObj);
      }

      return coords;
    }, []);
    return GPSCoords;
  }

  averageOfSet(channelSet, sampleSet = this.minuteData) {
    const sum = sampleSet.reduce((sum, sample, i) => {
      sum += sample.values[channelSet] || 0;
      return sum;
    }, 0);
    const average = sum / sampleSet.length;
    return average;
  }

  createChunk(chunkSize, index) {
    return this.minuteData.slice(index, index + chunkSize);
  }

  createChunkSet(chunkSize) {
    const chunkSet = [];
    let j = 0;

    for (let i = 0; i < this.minuteData.length; i++, j++) {
      const chunk = this.createChunk(chunkSize, j);
      if (chunk.length === chunkSize) {
        chunkSet.push(chunk);
      }
    }
    return chunkSet;
  }

  createMockEffort(channelSet) {
    return {
      average: 0,
      range: {
        high: 0,
        low: 0,
      },
      channelSet,
    };
  }

  calculateBestEffort(channelSet, time) {
    // "Best" is defined as highest continuous average for the given time period.
    // Using a chunked array
    const chunkSize = time * 60;
    const chunkSet = this.createChunkSet(chunkSize);
    const mockEffort = this.createMockEffort(channelSet);
    let currentAverage = 0;
    const bestEffort = chunkSet.reduce((effort, chunk) => {
      currentAverage = this.averageOfSet(channelSet, chunk);
      if (currentAverage > mockEffort.average) {
        mockEffort.average = currentAverage;
        mockEffort.range.low = chunk[0].millisecondOffset;
        mockEffort.range.high = chunk[chunk.length - 1].millisecondOffset;
      }
      return effort;
    }, mockEffort);
    return bestEffort;
  }

  changeRangeOfTime(start, end) {
    const startMillisec = start * 60000;
    const endMilliSec = end * 60000;
    const rangeArray = this.minuteData.filter(sample =>
      sample.millisecondOffset >= startMillisec
      && sample.millisecondOffset <= endMilliSec);

    return rangeArray;
  }

  calculateTotal(channelSet, rangeData = this.minuteData) {
    if (channelSet === 'millisecondOffset') {
      return rangeData.reduce((total, sample) => {
        total += sample[channelSet] || 0;
        return total;
      }, 0);
    }

    return rangeData.reduce((total, sample) => {
      total += sample.values[channelSet] || 0;
      return total;
    }, 0);
  }

  convertMilliToMin(num) {
    return num / 60000;
  }

  calculateTotalElevationGain() {
    return this.minuteData.reduce((gain, sample, i) => {
      if (i < this.minuteData.length - 1) {
        const difference = this.minuteData[i + 1].values.elevation - sample.values.elevation;
        gain += difference || 0;
      }
      return gain;
    }, this.minuteData[0].values.elevation);
  }

  getMinMax() {
    const startTime = this.minuteData[0].millisecondOffset;
    const endTime = this.minuteData[this.minuteData.length - 1].millisecondOffset;
    const startMinute = Math.round(this.convertMilliToMin(startTime));
    const endMinute = Math.round(this.convertMilliToMin(endTime));
    return [startMinute, endMinute];
  }

  filterByMinute(data) {
    return data.filter((sample, i) => sample.millisecondOffset % 60000 === 0);
  }

  filterDataForGraph(channelSet, range) {
    return this.minuteData.reduce((filteredArray, sample, i) => {
      const currentTime = this.convertMilliToMin(sample.millisecondOffset);
      const isCurrentInRange = currentTime >= range[0] && currentTime <= range[1];
      if (isCurrentInRange) {
        const graphObj = { time: 0, [channelSet]: 0 };
        graphObj.time = this.convertMilliToMin(sample.millisecondOffset);
        graphObj[channelSet] = sample.values[channelSet] || 0;
        filteredArray.push(graphObj);
      }
      return filteredArray;
    }, []);
  }

  filterDataForMap(range) {
    return this.minuteData.reduce((filteredArray, sample, i) => {
      const currentTime = this.convertMilliToMin(sample.millisecondOffset);
      const isCurrentInRange = currentTime >= range[0] && currentTime <= range[1];
      if (isCurrentInRange) {
        filteredArray.push(sample);
      }
      return filteredArray;
    }, []);
  }
}
