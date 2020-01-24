import React, { Component } from "react";
import { firebaseApp } from "../../fbase";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
  authenticate = e => {
    const { changeLoggedIn } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        changeLoggedIn(true);
      })
      .catch(() => {
        console.log("Unable to authenticate");
      });
  };
  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className="my-3">Logowanie</h2>
          <form onSubmit={this.authenticate}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={this.handleLoginChange}
                name="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={this.handleLoginChange}
                name="password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
