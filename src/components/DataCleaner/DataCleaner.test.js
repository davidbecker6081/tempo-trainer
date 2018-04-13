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
  });

  describe('filterGPSCoords', () => {
    it('should filter the data and return an array of GPS coordinates', () => {
      const sample = { lat: 40.01488, lng: -105.131 };
      expect(dataCleaner.GPSCoords).toHaveLength(5002);
      expect(dataCleaner.GPSCoords).toContainEqual(sample);
    });
  });
});
