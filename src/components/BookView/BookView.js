import React, { Component } from "react";

export default class BookView extends Component {
  render() {
    const { name, author, description, onStock, image } = this.props.book;
    return (
      <li className="d-flex justify-content-between text-left">
        <p>{name}</p>
        <p>{description}</p>
        <p>{onStock}</p>
        <img src={image} height="75" alt={name} />
      </li>
    );
  }
}
