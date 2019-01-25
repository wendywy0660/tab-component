import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Warrents = ({ data, render }) => {
  const column = [
    {
      Header: render,
      columns: [
        {
          Header: 'Code',
          accessor: 'code',
        },
        {
          Header: 'issuer',
          accessor: 'issuer',
        },
        {
          Header: 'exercise price($)',
          id: 'exercisePrice',
          accessor: d => d.exercisePrice.toFixed(3),
        },
        {
          Header: 'multiplier',
          accessor: 'multiplier',
        },
        {
          Header: 'bid($)',
          accessor: 'bid',
        },
        {
          Header: 'offer($)',
          accessor: 'offer',
        },
        {
          Header: 'volume',
          accessor: 'volume',
        },
      ],
    },
  ];

  return (
      <ReactTable
      data={ data }
      columns={ column }
      className="warrants"
      defaultPageSize={ 10 }
    />
  );
};

Warrents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      exercisePrice: PropTypes.number.isRequired,
      multiplier: PropTypes.number.isRequired,
      bid: PropTypes.number.isRequired,
      offer: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
  render: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Warrents.defaultProps = {
  render: '',
};

export default Warrents;
