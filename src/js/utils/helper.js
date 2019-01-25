import dateformat from 'dateformat';

export const formatDate = rawDate => rawDate && dateformat(new Date(rawDate), 'dddd, dS mmmm yyyy');

export const getFilteredDataByType = (type, allData) =>
  type === 'all' ? allData : allData.filter(entry => entry.type === type);
