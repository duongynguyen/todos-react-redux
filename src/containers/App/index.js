import React, { Component } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import TaskBoard from "../TaskBoard";
import configureStore from "../../redux/configureStore";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <GlobalLoading />
        <TaskBoard />
      </Provider>
    );
  }
}

export default App;
