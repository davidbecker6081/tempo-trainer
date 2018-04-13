export default class DataCleaner {
  constructor(data) {
    this.data = data;
    this.channels = data.channelSet;
    this.GPSCoords = this.filterGPSCoords();
    this.bestEfforts = [];
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

    for (let i = 0; i < samples.length - sampleAmount; i++) {
      let totalSample = 0;
      const sampleRange = {
        low: 0,
        high: 0,
      };
      let average = 0;

      for (let j = 0; j < sampleAmount; j++) {
        const highIndex = (i + sampleAmount) - 1;
        const lowIndex = i;
        const index = i + j;
        totalSample += samples[index].values[channelSet];
        sampleRange.low = Math.round(samples[lowIndex].millisecondOffset / 60000);
        sampleRange.high = Math.round(samples[highIndex].millisecondOffset / 60000);
      }

      average = totalSample / sampleAmount;
      if (average > bestEffort.average) {
        console.log(bestEffort, average, sampleRange, i);
        bestEffort.average = average;
        bestEffort.range = sampleRange;
      }
    }

    return bestEffort;
  }

  toggleRangeOfTime(start, end) {

  }

  calculateAverage(channelSet) {

  }

  calculateTotalTime(channelSet) {

  }
}
