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

  }

  toggleRangeOfTime(start, end) {

  }

  calculateAverage(channelSet) {

  }

  calculateTotalTime(channelSet) {

  }
}
