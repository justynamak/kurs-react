import React, { Component } from "react";
import LoginForm from "../Forms/LoginForm";
import BookForm from "../Forms/BookForm";

class AdminPanel extends Component {
  state = {
    loggedIn: false
  };

  changeLoggedIn = val => {
    this.setState({
      loggedIn: val
    });
  };

  render() {
    return (
      <div className="container">
        {!this.state.loggedIn && (
          <LoginForm changeLoggedIn={this.changeLoggedIn} />
        )}

        {this.state.loggedIn && (
          <BookForm changeLoggedIn={this.changeLoggedIn} />
        )}
      </div>
    );
  }
}
export default AdminPanel;
