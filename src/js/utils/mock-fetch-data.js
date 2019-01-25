import warrantsData from '../../data/warrants.json';
import optionsData from '../../data/options.json';

const resolveWith = (data, delay = 0) => (
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  })
);

const rejectWith = (error, delay = 0) => (
  new Promise((_, reject) => {
    setTimeout(() => reject(error), delay);
  })
);

const mockFetchData = ({ error = false, delay = 1000, mockData = {} } = {}) => () => {
  if (error) { return rejectWith(new Error('Fake Error'), delay); }
  return resolveWith(mockData, delay);
};

const mockWarrantsData = mockFetchData({ mockData: warrantsData.warrants });
const mockOptionsData = mockFetchData({ mockData: optionsData.optionDetails });

export {
  mockWarrantsData,
  mockOptionsData,
};
