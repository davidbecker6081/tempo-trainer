export default class DataCleaner {
  constructor(data) {
    this.data = data;
    this.channels = data.channelSet;
    this.GPSCoords = this.filterGPSCoords(this.data.samples);
    this.min = 0;
    this.max = 0;
  }

  filterGPSCoords(rangeData) {
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

  averageOfSet(sampleSet, channelSet) {
    const sum = samples.reduce((sum, sample, i) => {
      sum += sample.values[channelSet];
      return sum;
    }, 0);
    const average = sum / samples.length;
    return average;
  }

  calculateBestEffort(channelSet, time) {
    // "Best" is defined as highest continuous average for the given time period.
    const { samples } = this.data;
    const millisecAmount = time * 60000;
    const sampleAmount = time * 60;
    const bestEffort = {
      range: {
        low: 0,
        high: 0,
      },
      average: 0,
      channelSet,
    };
    let sampleRange;
    let totalSample;
    let millisecs;
    let currentAverage;

    for (let i = 0; i < samples.length - sampleAmount; i++) {
      sampleRange = {
        low: 0,
        high: 0,
      };
      totalSample = 0;
      millisecs = 0;
      currentAverage = 0;

      for (let j = 0; j < sampleAmount; j++) {
        const highIndex = (i + sampleAmount) - 1;
        const lowIndex = i;
        const index = i + j;
        if (i !== 0) {
          millisecs += samples[index].millisecondOffset - samples[index - 1].millisecondOffset;
        }
        totalSample += samples[index].values[channelSet] || 0;
        sampleRange.low = samples[lowIndex].millisecondOffset;
        sampleRange.high = samples[highIndex].millisecondOffset;
      }

      currentAverage = totalSample / sampleAmount;
      const isNewAverageLarger = currentAverage > bestEffort.average;
      const sampleRangeDiff = (sampleRange.high - sampleRange.low) + 1000;
      const isSampleRangeInTime = sampleRangeDiff / millisecAmount === 1;
      const isSampleRangeEqualToMSAmount = millisecs / millisecAmount === 1;

      if (isNewAverageLarger && isSampleRangeEqualToMSAmount && isSampleRangeInTime) {
        bestEffort.average = currentAverage;
        bestEffort.range = sampleRange;
      }
    }
    return bestEffort;
  }

  changeRangeOfTime(start, end) {
    const { samples } = this.data;
    const startMillisec = start * 60000;
    const endMilliSec = end * 60000;
    const rangeArray = samples.filter(sample =>
      sample.millisecondOffset >= startMillisec
      && sample.millisecondOffset <= endMilliSec);

    return rangeArray;
  }

  calculateAverage(channelSet, rangeData = this.data.samples) {
    const totalOfChannel = rangeData.reduce((total, sample) => {
      total += sample.values[channelSet] || 0;
      return total;
    }, 0);
    return totalOfChannel / rangeData.length;
  }

  calculateTotal(channelSet, rangeData = this.data.samples) {
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
    const { samples } = this.data;
    return samples.reduce((gain, sample, i) => {
      if (i < samples.length - 1) {
        const difference = samples[i + 1].values.elevation - sample.values.elevation;
        gain += difference || 0;
      }
      return gain;
    }, samples[0].values.elevation);
  }

  setMinMax() {
    const { samples } = this.data;
    const startTime = samples[0].millisecondOffset;
    const endTime = samples[samples.length - 1].millisecondOffset;
    const startMinute = Math.round(this.convertMilliToMin(startTime));
    const endMinute = Math.round(this.convertMilliToMin(endTime));

    this.min = startMinute;
    this.max = endMinute;
  }

  filterDataForGraph(channelSet, range) {
    const { samples } = this.data;

    return samples.reduce((filteredArray, sample, i) => {
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
    const { samples } = this.data;

    return samples.reduce((filteredArray, sample, i) => {
      const currentTime = this.convertMilliToMin(sample.millisecondOffset);
      const isCurrentInRange = currentTime >= range[0] && currentTime <= range[1];
      if (isCurrentInRange) {
        filteredArray.push(sample);
      }
      return filteredArray;
    }, []);
  }
}
