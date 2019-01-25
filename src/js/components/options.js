import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helper';

const ignoreKeys = [ 'type', 'expiryDate' ];
const requireFormatKeys = [ 'bid', 'offer', 'lastTrade', 'strikePrice' ];

const Options = ({ data }) => {
  if (!data || data.length < 1) { return <span>loading</span>; }

  // get the column names from the first entry except the ones in ignoreKeys array
  const firstEntry = data[ 0 ].options[ 0 ] || {};
  const colNames = Object.keys(firstEntry).filter(key => !ignoreKeys.includes(key));
  const numOfCols = colNames.length;

  const renderColumn = entry => colNames.map(name => <td key={name}>{entry[ name ]}</td>);

  return (
    <table className="options">
      <caption className="caption">Call Options</caption>
      {data.map((entry, index) => (
        <Fragment key={index}>
          <thead>
            <tr>
              <th className="sub-heading" colSpan={numOfCols}>
                Expiry: {formatDate(entry.expiryDate)}
              </th>
            </tr>
            <tr>
              {colNames.map((name) => {
                const formatNames = (requireFormatKeys.includes(name)) ? `${ name }($)` : name;
                return (<th key={name} scope="col">{formatNames}</th>);
              })}
            </tr>
          </thead>
          <tbody>
            {entry.options.map((row, rowIndex) => (
              <tr key={rowIndex}>{renderColumn(row)}</tr>
            ))}
          </tbody>
        </Fragment>
      ))}
    </table>);
};

Options.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      expiryDate: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          bid: PropTypes.number.isRequired,
          offer: PropTypes.number.isRequired,
          volume: PropTypes.number.isRequired,
          lastTrade: PropTypes.number.isRequired,
          strikePrice: PropTypes.number.isRequired,
          expiryDate: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default Options;
