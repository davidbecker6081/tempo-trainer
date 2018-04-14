export default class DataCleaner {
  constructor(data) {
    this.data = data;
    this.channels = data.channelSet;
    this.GPSCoords = this.filterGPSCoords();
  }

  filterGPSCoords() {
    const { samples } = this.data;

    const GPSCoords = samples.reduce((coords, sample) => {
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

  calculateTotals(channelSet) {

  }
}
