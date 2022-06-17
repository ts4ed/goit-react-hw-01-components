import PropTypes from 'prop-types';
import React from 'react';
export default function TransactionItem({ type, amount, currency }) {
  return (
    <React.Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </React.Fragment>
  );
}
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
