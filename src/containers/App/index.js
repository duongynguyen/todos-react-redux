import React, { Component } from "react";
import TaskBoard from "./../TaskBoard";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskBoard />
      </Provider>
    );
  }
}

export default App;
