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
    it('should default bestEffots to an empty array', () => {
      expect(dataCleaner.bestEfforts).toHaveLength(0);
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
});
