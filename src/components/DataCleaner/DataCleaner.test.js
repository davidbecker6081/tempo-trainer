import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import DataCleaner from './DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('App', () => {
  let dataCleaner;

  beforeEach(() => {
    dataCleaner = new DataCleaner(workoutData);
  });

  it('exists', () => {
    expect(dataCleaner.data).toBeDefined();
  });

  describe('Constructor', () => {
    it('should have a GPSCoords', () => {
      expect(dataCleaner.GPSCoords).toBeDefined();
    });
    it('should have all channelSets', () => {
      const expectedLength = workoutData.channelSet.length;
      const length = dataCleaner.channels.length;
      expect(length).toEqual(expectedLength);
    });
  });

  describe('filterGPSCoords', () => {
    it('should filter the data and return an array of GPS coordinates', () => {
      const sample = { lat: 40.01488, lng: -105.131 };
      expect(dataCleaner.GPSCoords).toHaveLength(5002);
      expect(dataCleaner.GPSCoords).toContainEqual(sample);
    });
    it('should contain no duplicates', () => {
      const { samples: mockData } = workoutData;
      const dataKeysLength = mockData.filter(sample => sample.values.positionLong).length;
      const GPSCoordsLength = dataCleaner.GPSCoords.length;
      expect(dataKeysLength).toEqual(GPSCoordsLength);
    });
  });

  describe('calculateBestEffort', () => {
    describe('Power 1-min', () => {
      let bestEffort;

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
      const dataLength = dataCleaner.data.samples.length;
      const rangeArray = dataCleaner.changeRangeOfTime(1, 2);
      const dataLengthCheck = dataCleaner.data.samples.length;
      expect(dataLengthCheck).toBeGreaterThan(rangeArray.length);
    });
  });
  describe('calculate Average', () => {
    describe('data provided', () => {
      it('should calculate the correct average for a channel', () => {
        const expectedAveragePower = 191.16883116883116;
        const rangeData = dataCleaner.changeRangeOfTime(1, 10);
        const averagePower = dataCleaner.calculateAverage('power', rangeData);
        expect(averagePower).toEqual(expectedAveragePower);
      });
    });
    describe('data not provided', () => {
      it('should calculate the correct average for a channel', () => {
        const expectedAveragePower = 172.8601356743815;
        const averagePower = dataCleaner.calculateAverage('power');
        expect(averagePower).toEqual(expectedAveragePower);
      });
    });
  });
  describe('calculate total', () => {
    describe('data provided', () => {
      it('should calculate the correct total for a channel of millisecondOffset', () => {
        const expectedTotalTime = 178125000;
        const rangeData = dataCleaner.changeRangeOfTime(1, 10);
        const totalTime = dataCleaner.calculateTotal('millisecondOffset', rangeData);
        expect(totalTime).toEqual(expectedTotalTime);
      });
      it('should calculate the correct total for a channel not millisecondOffset', () => {
        const expectedTotalDistance = 1721330.789999999;
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
});
