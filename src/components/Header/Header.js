import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      bookStoreName: "Black Bookstore",
      clicked: true,
      textColor: "white",
      backgroundColor: "black"
    };
  }
  handleClick = () => {
    if (this.state.clicked) {
      this.setState({
        bookStoreName: "White Bookstore",
        textColor: "black",
        backgroundColor: "white"
      });
    } else {
      this.setState({
        bookStoreName: "Black Bookstore",
        textColor: "white",
        backgroundColor: "black"
      });
    }
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const { textColor, backgroundColor } = this.state;
    const style = {
      backgroundColor,
      color: textColor
    };
    return (
      <header className="header row" style={style} onClick={this.handleClick}>
        <div className="container">
          <h1 className="text-center w-100 py-3">{this.state.bookStoreName}</h1>
          <Link to="/admin-panel" className="text-light text-right">
            Admin panel
          </Link>
        </div>
      </header>
    );
  }
}
export default Header;
