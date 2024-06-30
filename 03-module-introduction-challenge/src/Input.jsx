import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from "react";

export default function Input() {
  const [inputs, setInputs] = useState();

  function handleInputChange() {
    inputs = [document.querySelectorAll(".input-group")];
    calculateInvestmentResults({ ...inputs.event.target.value });
  }

  const inputText = [
    "INITIAL INVESTMENT",
    "ANNUAL INVESTMENT",
    "EXPECTED RETURN",
    "DURATION",
  ];
  return (
    <div id="user-input">
      <label className="input-group">
        {inputText[0]}
        <input />
      </label>
      <label className="input-group">
        {inputText[1]}
        <input />
      </label>
      <label className="input-group">
        {inputText[2]}
        <input />
      </label>
      <label className="input-group">
        {inputText[3]}
        <input />
      </label>
    </div>
  );
}
