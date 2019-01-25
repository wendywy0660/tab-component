import React, { Component } from 'react';
import uniq from 'lodash/uniq';
import Tabs from './components/tabs';
import Tab from './components/tab';
import Warrants from './components/warrants';
import Options from './components/options';
import '../styles/app.scss';
import { mockWarrantsData, mockOptionsData } from './utils/mock-fetch-data';
import { getFilteredDataByType } from './utils/helper';

class App extends Component {
  state = {
    warrantsData: [],
    optionsData: [],
    type: '',
  }

  componentDidMount() {
    mockWarrantsData()
      .then((data) => {
        this.allData = data;
        this.setState({
          warrantsData: data,
          types: uniq(data.map(entry => entry.type)),
        });
      })
      .catch((err) => {
        // handleError(err);
        console.log('error: ', err);
      });
  }

  onTabChange = (tab) => {
    if (tab === 'Options') {
      mockOptionsData()
        .then((data) => {
          this.setState({
            optionsData: data,
          });
        })
        .catch((err) => {
          // handleError(err);
          console.log('error: ', err);
        });
    }
  }

  onFilterChange = (event) => {
    if (!event.target || !event.target.value) return;
    const selectedValue = event.target.value;
    const warrantsData = getFilteredDataByType(selectedValue, this.allData);
    this.setState({
      warrantsData,
      type: selectedValue !== 'all' ? selectedValue : '',
    });
  }

  render() {
    return (
        <div className="app">
          <Tabs onTabChange={ this.onTabChange }>
            <Tab label="Warrants">
              <Warrants
              data={ this.state.warrantsData }
              render={ () => (
                  <div className="table__header">
                    <h2>{this.state.type}</h2>
                    <select onChange={ this.onFilterChange }>
                      <option value="all">Show All</option>
                      {this.state.types && this.state.types.map(type => <option key={ type } value={ type }>{type}</option>)}
                  </select>
                </div>
              ) }
            />
          </Tab>
            <Tab label="Options">
              <Options data={ this.state.optionsData } />
          </Tab>

        </Tabs>
      </div>
    );
  }
}

export default App;
