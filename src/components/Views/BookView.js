import React, { Component } from "react";

export default class BookView extends Component {
  render() {
    const { name, author, description, onStock, image } = this.props.book;
    return (
      <li className="d-flex justify-content-between align-items-center text-left mt-2">
        <p>{name}</p>
        <p>{author}</p>
        <p>{description}</p>
        <p>{onStock}</p>
        <img src={image} height="75" alt={name} />
        <button
          className="btn btn-primary"
          onClick={() => this.props.addToOrder(this.props.book)}
        >
          Add
        </button>
      </li>
    );
  }
}
