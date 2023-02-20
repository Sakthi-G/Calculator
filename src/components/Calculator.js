import React from "react";
import "../styles/style.css";
import { useState, useEffect } from "react";
import SnowFlakes from "./SnowFlakes";
import Answer from "./Answer";
import Banner from "./Banner";

const Calculator = () => {
  const [state, setState] = useState("");
  const [result, setResult] = useState("0");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "0" || "NumPad0":
          document.getElementById("cell-17").click();
          break;
        case "1" || "NumPad1":
          document.getElementById("cell-12").click();
          break;
        case "2" || "NumPad2":
          document.getElementById("cell-13").click();
          break;
        case "3" || "NumPad3":
          document.getElementById("cell-14").click();
          break;
        case "4" || "NumPad4":
          document.getElementById("cell-8").click();
          break;
        case "5" || "NumPad5":
          document.getElementById("cell-9").click();
          break;
        case "6" || "NumPad6":
          document.getElementById("cell-10").click();
          break;
        case "7" || "NumPad7":
          document.getElementById("cell-4").click();
          break;
        case "8" || "NumPad8":
          document.getElementById("cell-5").click();
          break;
        case "9" || "NumPad9":
          document.getElementById("cell-6").click();
          break;

        case "Enter" || "NumPadEnter":
          document.getElementById("cell-19").click();
          break;
        case "Backspace":
          document.getElementById("cell-1").click();
          break;
        case "Escape":
          document.getElementById("cell-0").click();
          break;
        case ".":
          document.getElementById("cell-18").click();
          break;

        case "+":
          document.getElementById("cell-15").click();
          break;
        case "-":
          document.getElementById("cell-11").click();
          break;
        case "*":
          document.getElementById("cell-7").click();
          break;
        case "/":
          document.getElementById("cell-3").click();
          break;
        case "%":
          document.getElementById("cell-2").click();
          break;
        default:
          break;
      }
    });
  }, []);

  /**
   * This function checks for the input characters and updates the state
   * @param {string} value It denotes the user entered value
   *
   * @return {void} It has on return type
   */
  const operatorHandler = (value) => {
    const operators = ["+", "-", "*", "/", "%"];
    setState((prevValue) => {
      if (prevValue === "" && operators.includes(value)) {
        return "0" + value;
      }
      if (prevValue.charAt(prevValue.length - 1) === "0")
        return prevValue + value;
      if (prevValue.charAt(prevValue.length - 1) === "." && value === ".")
        return prevValue;
      if (
        !parseInt(prevValue.charAt(prevValue.length - 1)) &&
        operators.includes(value)
      ) {
        return prevValue.slice(0, -1) + value;
      } else return prevValue + value;
    });
  };

  /**
   * This function is used to reset the state to its default state
   * @param {void} null It has no input parameters
   *
   * @return {void} It has no return type
   */
  const resetExpresssion = () => {
    setState("");
    setResult("0");
  };

  /**
   * This function is used to remove the last character entered by the user
   * @param {void} null It has no input parameters
   *
   * @return {void} It has no return type
   *
   */
  const backspaceHandler = () => {
    setState((prevValue) => {
      return prevValue.slice(0, -1);
    });
  };

  /**
   * This method is used to evaluate the expression entered by the user
   * @param {string} expresssion It denotes a string which contains user entered arithmetic expression
   *
   * @return {string} It returns the computed result/"Invalid" string
   */
  function computeResult(expresssion) {
    try {
      return Function(`'use strict'; return (${expresssion})`)();
      // return eval(expresssion);
    } catch (error) {
      return "Invalid";
    }
  }

  /**
   * This method is used to set the computed Result to the State
   * @param {void} null It has no input parameters
   *
   * @return {void} It has no return type
   */
  const resultHandler = () => {
    setResult(computeResult(state));
  };

  return (
    <>
      <Banner />
      <SnowFlakes />
      <div className="calc-board">
        <Answer expression={state} result={result} />
        <div className="calc-operators">
          <div
            className="calc-button"
            id="cell-0"
            onClick={() => resetExpresssion()}
            title="Clear (Esc)"
          >
            C
          </div>

          <div
            className="calc-button"
            id="cell-1"
            title="BackSpace"
            onClick={() => backspaceHandler()}
          >
            <img
              src={require(`../assets/backspace.png`)}
              height="30px"
              width="30px"
              alt="backspace-icon"
            />
          </div>
          <div
            className="calc-button"
            id="cell-2"
            onClick={() => operatorHandler("%")}
            title="Modulo"
          >
            <img
              id="modulo-icon"
              src={require(`../assets/modulo.png`)}
              height="30px"
              width="30px"
              alt="modulo-icon"
            />
          </div>
          <div
            className="calc-button"
            id="cell-3"
            onClick={() => operatorHandler("/")}
            title="Divide"
          >
            <img
              src={require(`../assets/slash.png`)}
              height="30px"
              width="30px"
              alt="divide-icon"
            />
          </div>
          <div
            className="calc-button"
            id="cell-4"
            onClick={() => operatorHandler("7")}
          >
            7
          </div>
          <div
            className="calc-button"
            id="cell-5"
            onClick={() => operatorHandler("8")}
          >
            8
          </div>
          <div
            className="calc-button"
            id="cell-6"
            onClick={() => operatorHandler("9")}
          >
            9
          </div>
          <div
            className="calc-button"
            id="cell-7"
            onClick={() => operatorHandler("*")}
            title="Multiply"
          >
            <img
              src={require(`../assets/close.png`)}
              height="20px"
              width="20px"
              alt="multiply-icon"
            />
          </div>
          <div
            className="calc-button"
            id="cell-8"
            onClick={() => operatorHandler("4")}
          >
            4
          </div>
          <div
            className="calc-button"
            id="cell-9"
            onClick={() => operatorHandler("5")}
          >
            5
          </div>
          <div
            className="calc-button"
            id="cell-10"
            onClick={() => operatorHandler("6")}
          >
            6
          </div>
          <div
            className="calc-button"
            id="cell-11"
            onClick={() => operatorHandler("-")}
            title="Subtraction"
          >
            -
          </div>
          <div
            className="calc-button"
            id="cell-12"
            onClick={() => operatorHandler("1")}
          >
            1
          </div>
          <div
            className="calc-button"
            id="cell-13"
            onClick={() => operatorHandler("2")}
          >
            2
          </div>
          <div
            className="calc-button"
            id="cell-14"
            onClick={() => operatorHandler("3")}
          >
            3
          </div>
          <div
            className="calc-button"
            id="cell-15"
            onClick={() => operatorHandler("+")}
            title="Addition"
          >
            +
          </div>
          <div className="calc-button" id="cell-16"></div>
          <div
            className="calc-button"
            id="cell-17"
            onClick={() => operatorHandler("0")}
          >
            0
          </div>
          <div
            className="calc-button"
            id="cell-18"
            onClick={() => operatorHandler(".")}
          >
            .
          </div>
          <div
            className="calc-button"
            id="cell-19"
            onClick={() => resultHandler()}
          >
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
