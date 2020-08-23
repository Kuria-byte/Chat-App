import React from "react";
import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import auth from "./store/reducers/authReducer";
import * as chatActions from "./store/actions/chatActions";


class App extends React.Component {
  componentDidMount() {
    this.props.setupSocket();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={(props) => {
                return <h1>Login</h1>;
              }}
            />

            <Route
              path="/"
              render={(props) => {
                return <h1>Main Page</h1>;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  setupSocket: () => {
    dispatch(chatActions.setupSocket);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
