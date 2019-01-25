import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => (
    <div className="tab-panel">
        {children}
    </div>
);

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node,
};

Tab.defaultProps = {
  children: undefined,
};

export default Tab;
