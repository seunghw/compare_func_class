import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}
var funcStyle = "color: blue";
var funcId = 0;

function FuncComp(props) {
  //  let number = numberState[0]; // 상태값
  //  let setNumber = numberState[1]; // 상태를 바꿀 수 있는 함수
  //  let numberState = useState(props.initNumber); 초기값

  //  let _date = dateState[0]; // 상태값
  //  let setDate = dateState[1]; // 상태를 바꿀 수 있는 함수
  //  let date = new Date().toString();// 초기값

  let [number, setNumber] = useState(props.initNumber);

  let [_date, setDate] = useState(new Date().toString());

  console.log(++funcId+"%cclass=>render", funcStyle);
  return (
    <div className="container">
      <h2>function style componet</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}
var classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }

  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }

  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>Class style componet</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
