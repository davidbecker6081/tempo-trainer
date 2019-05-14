import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import DataCleaner from './DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('DataCleaner', () => {
  let dataCleaner;

  beforeEach(() => {
    dataCleaner = new DataCleaner(workoutData);
  });


  describe('Constructor', () => {
    it('should have original data', () => {
      expect(dataCleaner.originalData.samples).toHaveLength(5012);
    });
    it('should have data filtered by the half minute', () => {
      expect(dataCleaner.minuteData).toHaveLength(168);
    });
    it('should have a GPSCoords', () => {
      expect(dataCleaner.GPSCoords).toBeDefined();
    });
    it('should have an array of coordinates', () => {
      const sample = { lat: 40.01958, lng: -105.13111 };
      expect(dataCleaner.GPSCoords).toHaveLength(167);
      expect(dataCleaner.GPSCoords).toContainEqual(sample);
    });
    it('should have all channelSets', () => {
      const expectedLength = workoutData.channelSet.length;
      const length = dataCleaner.channels.length;
      expect(length).toEqual(expectedLength);
    });
  });

  describe('filterGPSCoords', () => {
    describe('data provided', () => {
      it('should filter the provided data and return an array of GPS coordinates', () => {
        const sample = { lat: 40.01958, lng: -105.13111 };
        const rangeData = dataCleaner.minuteData.slice(0, 1000);
        const coords = dataCleaner.filterGPSCoords(rangeData);
        const rangeDataLength = rangeData.filter(sample => sample.values.positionLong).length;

        expect(coords).toHaveLength(rangeDataLength);
        expect(coords).toContainEqual(sample);
      });
    });

    describe('data not provided', () => {
      it('should filter the default data and return an array of GPS coordinates', () => {
        const sample = { lat: 40.01958, lng: -105.13111 };
        const coords = dataCleaner.filterGPSCoords();
        const dataSamples = dataCleaner.minuteData;
        const dataLength = dataSamples.filter(sample => sample.values.positionLong).length;

        expect(coords).toHaveLength(dataLength);
        expect(coords).toContainEqual(sample);
      });
    });
  });

  describe('Chunks', () => {
    let sampleSet;
    let channelSet;
    let chunkSize;
    let index;

    beforeEach(() => {
      sampleSet = [
        { values: { power: 15 } },
        { values: { power: 10 } },
        { values: { power: 25 } },
        { values: { power: 6 } },
        { values: { power: 7 } },
        { values: { power: 9 } },
        { values: { power: 20 } },
        { values: { power: 15 } },
      ];
      channelSet = 'power';
      chunkSize = 60;
      index = 0;
    });

    describe('averageSet', () => {
      describe('data provided', () => {
        it('should calculate the correct average for a channel', () => {
          const expectedAverage = 13.375;
          const sampleAverage = dataCleaner.averageOfSet(channelSet, sampleSet);
          expect(sampleAverage).toEqual(expectedAverage);
        });
      });
      describe('data not provided', () => {
        it('should calculate the correct average for a channel', () => {
          const expectedAveragePower = 172.8601356743815;
          const averagePower = dataCleaner.averageOfSet('power');
          expect(averagePower).toEqual(expectedAveragePower);
        });
      });
    });

    describe('createChunk', () => {
      it('should create a chunk of correct size', () => {
        const chunk = dataCleaner.createChunk(chunkSize, index);
        expect(chunk.length).toEqual(chunkSize);
      });
    });

    describe('createChunkSet', () => {
      it('should create a set of chunks with the sample data', () => {
        const actualSet = dataCleaner.createChunkSet(chunkSize);
        const expectedSetLength = 4953;
        expect(actualSet.length).toEqual(expectedSetLength);
        expect(actualSet[0]).toHaveLength(chunkSize);
      });
    });

    describe('createMockEffort', () => {
      it('should create a mock object', () => {
        const effort = dataCleaner.createMockEffort('power');
        expect(effort.average).toEqual(0);
        expect(effort.range.low).toEqual(0);
        expect(effort.range.high).toEqual(0);
        expect(effort.channelSet).toEqual('power');
      });
    });
  });

  describe('calculateBestEffort', () => {
    describe('Power 1-min', () => {
      let bestEffort;

      // use a sample data set to make sure best effort is correct

      beforeEach(() => {
        bestEffort = dataCleaner.calculateBestEffort('power', 1);
      });

      it('should return bestEffort average for power', () => {
        const expectedAverage = 376.31666666666666;
        expect(bestEffort.average).toEqual(expectedAverage);
      });
      it('should return bestEffort time range', () => {
        const expectedRange = {
          low: 2860000,
          high: 2919000,
        };
        expect(bestEffort.range.high).toEqual(expectedRange.high);
        expect(bestEffort.range.low).toEqual(expectedRange.low);
      });
      it('should return an expected range equal to given duration of time', () => {
        const duration = (bestEffort.range.high - bestEffort.range.low) + 1000;
        const expectedDuration = 1 * 60000;
        expect(duration).toEqual(expectedDuration);
      });
      it('should return bestEffort with correct channelSet', () => {
        const expetectedChannel = 'power';
        expect(bestEffort.channelSet).toEqual(expetectedChannel);
      });
    });
    describe('Power 5-min', () => {
      let bestEffort;

      beforeEach(() => {
        bestEffort = dataCleaner.calculateBestEffort('power', 5);
      });

      it('should return bestEffort average for power', () => {
        const expectedAverage = 282.73;
        expect(bestEffort.average).toEqual(expectedAverage);
      });
      it('should return bestEffort time range', () => {
        const expectedRange = {
          low: 1190000,
          high: 1489000,
        };
        expect(bestEffort.range.high).toEqual(expectedRange.high);
        expect(bestEffort.range.low).toEqual(expectedRange.low);
      });
      it('should return an expected range equal to given duration of time', () => {
        const duration = (bestEffort.range.high - bestEffort.range.low) + 1000;
        const expectedDuration = 5 * 60000;
        expect(duration).toEqual(expectedDuration);
      });
      it('should return bestEffort with correct channelSet', () => {
        const expetectedChannel = 'power';
        expect(bestEffort.channelSet).toEqual(expetectedChannel);
      });
    });
    describe('Power 10-min', () => {
      let bestEffort;

      beforeEach(() => {
        bestEffort = dataCleaner.calculateBestEffort('power', 10);
      });

      it('should return bestEffort average for power', () => {
        const expectedAverage = 254.635;
        expect(bestEffort.average).toEqual(expectedAverage);
      });
      it('should return bestEffort time range', () => {
        const expectedRange = {
          low: 1249000,
          high: 1848000,
        };
        expect(bestEffort.range.high).toEqual(expectedRange.high);
        expect(bestEffort.range.low).toEqual(expectedRange.low);
      });
      it('should return an expected range equal to given duration of time', () => {
        const duration = (bestEffort.range.high - bestEffort.range.low) + 1000;
        const expectedDuration = 10 * 60000;
        expect(duration).toEqual(expectedDuration);
      });
      it('should return bestEffort with correct channelSet', () => {
        const expetectedChannel = 'power';
        expect(bestEffort.channelSet).toEqual(expetectedChannel);
      });
    });
    describe('Power 15-min', () => {
      let bestEffort;

      beforeEach(() => {
        bestEffort = dataCleaner.calculateBestEffort('power', 15);
      });

      it('should return bestEffort average for power', () => {
        const expectedAverage = 244.4488888888889;
        expect(bestEffort.average).toEqual(expectedAverage);
      });
      it('should return bestEffort time range', () => {
        const expectedRange = {
          low: 1301000,
          high: 2200000,
        };
        expect(bestEffort.range.high).toEqual(expectedRange.high);
        expect(bestEffort.range.low).toEqual(expectedRange.low);
      });
      it('should return an expected range equal to given duration of time', () => {
        const duration = (bestEffort.range.high - bestEffort.range.low) + 1000;
        const expectedDuration = 15 * 60000;
        expect(duration).toEqual(expectedDuration);
      });
      it('should return bestEffort with correct channelSet', () => {
        const expetectedChannel = 'power';
        expect(bestEffort.channelSet).toEqual(expetectedChannel);
      });
    });
    describe('Power 20-min', () => {
      let bestEffort;

      beforeEach(() => {
        bestEffort = dataCleaner.calculateBestEffort('power', 20);
      });

      it('should return bestEffort average for power', () => {
        const expectedAverage = 231.95666666666668;
        expect(bestEffort.average).toEqual(expectedAverage);
      });
      it('should return bestEffort time range', () => {
        const expectedRange = {
          low: 1001000,
          high: 2200000,
        };
        expect(bestEffort.range.high).toEqual(expectedRange.high);
        expect(bestEffort.range.low).toEqual(expectedRange.low);
      });
      it('should return an expected range equal to given duration of time', () => {
        const duration = (bestEffort.range.high - bestEffort.range.low) + 1000;
        const expectedDuration = 20 * 60000;
        expect(duration).toEqual(expectedDuration);
      });
      it('should return bestEffort with correct channelSet', () => {
        const expetectedChannel = 'power';
        expect(bestEffort.channelSet).toEqual(expetectedChannel);
      });
    });
  });
  describe('changeRangeOfTime', () => {
    it('should return an array with correct range of time', () => {
      const correctRange = {
        start: 3,
        end: 4,
      };
      const rangeArray = dataCleaner.changeRangeOfTime(3, 4);
      const lastIndex = rangeArray.length - 1;
      const startTime = rangeArray[0].millisecondOffset / 60000;
      const endTime = rangeArray[lastIndex].millisecondOffset / 60000;

      expect(startTime).toEqual(correctRange.start);
      expect(endTime).toEqual(correctRange.end);
    });
    it('should return an empty array if start is greater than end', () => {
      const rangeArray = dataCleaner.changeRangeOfTime(2, 1);
      expect(rangeArray.length).toEqual(0);
    });
    it('should not change the original data', () => {
      const dataLength = dataCleaner.originalData.samples.length;
      const rangeArray = dataCleaner.changeRangeOfTime(1, 2);
      const dataLengthCheck = dataCleaner.originalData.samples.length;
      expect(dataLengthCheck).toBeGreaterThan(rangeArray.length);
    });
  });

  describe('calculate total', () => {
    describe('data provided', () => {
      it('should calculate the correct total for a channel of millisecondOffset', () => {
        const expectedTotalTime = 6270000;
        const rangeData = dataCleaner.changeRangeOfTime(1, 10);
        const totalTime = dataCleaner.calculateTotal('millisecondOffset', rangeData);
        expect(totalTime).toEqual(expectedTotalTime);
      });
      it('should calculate the correct total for a channel not millisecondOffset', () => {
        const expectedTotalDistance = 60520.5;
        const rangeData = dataCleaner.changeRangeOfTime(1, 10);
        const totalDistance = dataCleaner.calculateTotal('distance', rangeData);
        expect(totalDistance).toEqual(expectedTotalDistance);
      });
    });
    describe('data not provided', () => {
      it('should calculate the correct total for a channel of millisecondOffset', () => {
        const expectedTotalTime = 12572045999;
        const totalTime = dataCleaner.calculateTotal('millisecondOffset');
        expect(totalTime).toEqual(expectedTotalTime);
      });
      it('should calculate the correct total for a channel not millisecondOffset', () => {
        const expectedTotalDistance = 108960059.90000005;
        const totalDistance = dataCleaner.calculateTotal('distance');
        expect(totalDistance).toEqual(expectedTotalDistance);
      });
    });
  });

  describe('convertMilliToMin', () => {
    it('should convert milliseconds to minutes', () => {
      const expectedMin = 5;
      const converted = dataCleaner.convertMilliToMin(300000);
      expect(converted).toEqual(expectedMin);
    });
  });

  describe('calculateTotalElevationGain', () => {
    it('should calculate elevation gain based on all data', () => {
      const expectedGain = 1536.3999999999999;
      const actualGain = dataCleaner.calculateTotalElevationGain();
      expect(actualGain).toEqual(expectedGain);
    });
  });

  describe('getMinMax', () => {
    it('should return an array with a start minute and finish minute', () => {
      const expectedMin = 0;
      const expectedMax = 84;
      const actualMinMax = dataCleaner.getMinMax();
      expect(actualMinMax[0]).toEqual(expectedMin);
      expect(actualMinMax[1]).toEqual(expectedMax);
    });
  });

  describe('filterDataForGraph', () => {
    it('should filter data based on a range', () => {
      const expectedLength = 168;
      const range = [0, 84];
      const actualLength = dataCleaner.filterDataForGraph('power', range).length;
      expect(actualLength).toEqual(expectedLength);
    });
    it('should contain data in correct format for graph', () => {
      const range = [0, 84];
      const filteredData = dataCleaner.filterDataForGraph('power', range);
      expect(filteredData[0].time).toBeDefined();
      expect(filteredData[0].power).toBeDefined();
    });
  });
  describe('filterDataForMap', () => {
    it('should filter data based on a range', () => {
      const expectedLength = 168;
      const range = [0, 84];
      const actualLength = dataCleaner.filterDataForMap(range).length;
      expect(actualLength).toEqual(expectedLength);
    });
  });
});
