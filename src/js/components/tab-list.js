import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TabList extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { activeTab, label } = this.props;
    return (
        <li
        className={ classnames('tab__list-item', { 'is-active': activeTab === label }) }
        onClick={ this.onClick }
      >
            {label}
        </li>
    );
  }
}

TabList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabList;
