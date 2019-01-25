import { formatDate, getFilteredDataByType } from './helper';
import { warrants as data } from '../../data/warrants.json';

describe('formatDate.js', () => {
  it('should format date as expected', () => {
    expect(formatDate('2029-12-31T00:00:00')).toEqual('Monday, 31st December 2029');
  });

  it('should return empty string if date is null/empty string', () => {
    expect(formatDate('')).toEqual('');
  });

  it('should return empty string if date is empty string', () => {
    expect(formatDate('')).toEqual('');
  });
});

describe('getFilteredDataByType.js', () => {
  it('should return all data when type is `all`', () => {
    expect(getFilteredDataByType('all', data).length).toEqual(6);
  });

  it('should return data with selected type', () => {
    expect(getFilteredDataByType('Barrier Index Call', data).length).toEqual(4);
  });
});
