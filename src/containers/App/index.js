import React, { Component } from "react";
import TaskBoard from "./../TaskBoard";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <TaskBoard />
      </Provider>
    );
  }
}

export default App;
