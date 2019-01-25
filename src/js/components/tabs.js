import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabList from './tab-list';

class Tabs extends Component {
  state = {
    activeTab: this.props.children[ 0 ].props.label,
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    this.props.onTabChange(tab);
  }

  render() {
    const {
      props: {
        children,
      },
      state: {
        activeTab,
      },
    } = this;

    return (
        <div className="tabs">
            <ul className="tabs__list">
                {children.map((child) => {
            const { label } = child.props;

            return (
                <TabList
                activeTab={ activeTab }
                key={ label }
                label={ label }
                onClick={ this.onClickTabItem }
              />
            );
          })}
            </ul>
            <div className="tabs__content">
                {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
            </div>
        </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onTabChange: PropTypes.func,
};

Tabs.defaultProps = {
  onTabChange: () => { },
};

export default Tabs;
