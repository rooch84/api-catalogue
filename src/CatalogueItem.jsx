import React, { Component } from 'react';

export default class CatalogueItem extends Component {

  generateContent(content) {
    if (content instanceof Array) {
      return (
        <ul>
          {content.map(row => { return (<li>{row}</li>) })}
        </ul>
      )
    } else {
      return content;
    }
  }

  render() {

    let buttonClasses = "catalogue-item__button";
    buttonClasses += !this.props.button.enabled ? " catalogue-item__button--disabled" : "";
    return (
      <div className="catalogue-item">
        <img className="catalogue-item__icon" src={this.props.icon} />
        <h4 className="catalogue-item__title">{this.props.name}</h4>
        <div className="catalogue-item__content">{this.generateContent(this.props.content)}</div>
        <div className={buttonClasses}>{this.props.button.label}</div>
      </div>
    )
  }

}
