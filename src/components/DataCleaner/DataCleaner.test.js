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
      it('should return bestEffort average for power', () => {
        const bestEffortPower = dataCleaner.calculateBestEffort('power', 1).average;
        const expectedAverage = 376.31666666666666;
        expect(bestEffortPower).toEqual(expectedAverage);
      });
    })
  });
});
