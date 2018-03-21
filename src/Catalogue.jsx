import React, { Component } from 'react';

import CatalogueItem from './CatalogueItem.jsx';

export default class Catalogue extends Component {

  constructor(props) {
    super(props);

    this.state = {
      order: "ascending"
    }
  }

  renderCatalogueItems(data, ascendingOrder) {
    data.sort((a,b) => {
      if (a.name < b.name) {
        return -1 * ascendingOrder;
      } else if (b.name < a.name) {
        return 1 * ascendingOrder;
      }
      return 0;
    })
    return data.map( d => {
      return (
        <CatalogueItem
          key={d.id}
          name={d.name}
          content={d.content}
          button={d.button}
          icon={d.icon}
          />
      )
    })
  }

  orderChangeHandler = (event) => {
    this.setState({order: event.target.value});
  }

  render() {
    return (
      <div className="catalogue" >
        <div className="catalogue-header">
          <h2>API Catalogue</h2>
        </div>
        <div>
          <div className="catalogue-sort-container">
            Sort by: &nbsp;
            <select className="catalogue-sort-widget" onChange={this.orderChangeHandler} value={this.state.order}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className="catalogue-item-container">
            {this.renderCatalogueItems(this.props.data, this.state.order === "ascending" ? 1 : -1)}
          </div>
        </div>
      </div>
    );
  }
}
