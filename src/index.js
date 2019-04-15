import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Daniel"
  };

  render() {
    return (
      <MyContext.Provider value="dsadasdas">
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>{context => <p>{context}</p>}</MyContext.Consumer>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Article />
      </MyProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
