import React, { Component } from "react";

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
      <header className="row header" style={style} onClick={this.handleClick}>
        <h1 className="text-center w-100">{this.state.bookStoreName}</h1>
      </header>
    );
  }
}
export default Header;
