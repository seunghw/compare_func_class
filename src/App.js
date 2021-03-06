import React, { useState, useEffect } from "react";
import "./App.css";

// function 방식

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

  // side effect 주요한 return 의 렌더링값이 아닌 부수적인 타이밍에 실행되도록 하는것
  useEffect(
    // 이건 componentDidMount만 실행시키고싶을 때.
    function () {
      console.log(
        "%cclass=> useEffect  (componentDidMount)" + +funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        // 정리정돈할 때 useEffect 내부에서 리턴하면 됨 == CleanUp
        console.log(
          "%cclass=> useEffect return (componentWillUnMount)" + +funcId,
          funcStyle
        );
      };
    },
    [] // 1회만 실행되고싶으면 이렇게 비어놓음
  );

  useEffect(
    function () {
      // number가 바뀔때만 호출
      console.log(
        "%cclass=> useEffect number (componentDidMount & componentDidUpdate)" +
          +funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        // 정리정돈할 때 useEffect 내부에서 리턴하면 됨 == CleanUp
        console.log(
          "%cclass=> useEffect number return (componentDidMount & componentDidUpdate)" +
            +funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      // date가 바뀔때만 호출
      console.log(
        "%cclass=> useEffect date (componentDidMount & componentDidUpdate)" +
          +funcId,
        funcStyle
      );
      document.title = _date;
      return function () {
        // 정리정돈할 때 useEffect 내부에서 리턴하면 됨 == CleanUp
        console.log(
          "%cclass=> useEffect date return (componentDidMount & componentDidUpdate)" +
            +funcId,
          funcStyle
        );
      };
    },
    [_date]
  );

  console.log("%cclass => render" + ++funcId, funcStyle);
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

// class 방식

var classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

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
