import React, { Component } from "react";

class AdminPanel extends Component {
  state = {
    book: {
      name: "",
      author: "",
      description: "",
      onStock: true,
      image: ""
    }
  };
  onHandleChangeInput = e => {
    let book;

    if (e.target.name === "onStock") {
      book = {
        ...this.state.book,
        [e.target.name]: e.target.checked
      };
    } else {
      book = {
        ...this.state.book,
        [e.target.name]: e.target.value
      };
    }

    this.setState({
      book
    });
  };
  handleAddNewBook = e => {
    e.preventDefault();

    const newBook = { ...this.state.book };

    this.props.addBook(newBook);

    this.setState({
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      }
    });
  };
  render() {
    return (
      <div className="admin-panel col-md-3">
        <form onSubmit={this.handleAddNewBook}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              name="name"
              className="form-control"
              id="bookName"
              value={this.state.book.name}
              onChange={this.onHandleChangeInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="author"
              id="author"
              name="author"
              className="form-control"
              value={this.state.book.author}
              onChange={this.onHandleChangeInput}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              id="description"
              placeholder="description"
              className="form-control"
              value={this.state.book.description}
              onChange={this.onHandleChangeInput}
            ></textarea>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="onStock"
              name="onStock"
              value={this.state.book.onStock}
              onChange={this.onHandleChangeInput}
            />
            <label htmlFor="onStock" className="form-check-label">
              On stock
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="image path"
              id="image"
              name="image"
              className="form-control"
              value={this.state.book.image}
              onChange={this.onHandleChangeInput}
            />
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}
export default AdminPanel;
