import React, { Component } from "react";

export default class OrderView extends Component {
  render() {
    const { name, author, description, onStock, image } = this.props.book;
    return (
      <li
        className="d-flex justify-content-between align-items-center mt-2"
        id="orderView"
      >
        <p id="orderViewName">{name}</p>
        <p>{author}</p>
        <p>{description}</p>
        <p>{onStock}</p>
        <img src={image} height="75" alt={name} />
        <button
          className="btn btn-info btn-sm"
          onClick={() => this.props.removeFromOrder(name)}
        >
          Remove
        </button>
      </li>
    );
  }
}
