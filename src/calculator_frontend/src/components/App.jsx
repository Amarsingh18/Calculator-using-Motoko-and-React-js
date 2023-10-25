import React, { useState } from 'react';
import './style.css';
import { calculator_backend } from '../../../declarations/calculator_backend';

const Calculator = () => {
  const [inputA, setInputA] = useState();
  const [inputB, setInputB] = useState();
  const [result, setResult] = useState(0);

  const handleAdd = async () => {
    const res = await calculator_backend.add(inputA, inputB);
    console.log(parseInt(res));
    setResult(parseInt(res));
  };

  const handleSubtract = async () => {
    const res = await calculator_backend.subtract(inputA, inputB);
    console.log(parseInt(res));
    setResult(parseInt(res));
  };

  const handleMultiply = async () => {
    const res = await calculator_backend.multiply(inputA, inputB);
    console.log(parseInt(res));
    setResult(parseInt(res));
  };

  const handleDivide = async () => {
    const res = await calculator_backend.divide(inputA, inputB);
    console.log(parseInt(res));
    setResult(parseInt(res));
  };

  return (
    <div>
      <h1> Dynamic Calculator</h1>
      <input type="number" placeholder="Enter number A" value={inputA} onChange={(e) => setInputA(parseInt(e.target.value))} />
      <input type="number" placeholder="Enter number B" value={inputB} onChange={(e) => setInputB(parseInt(e.target.value))} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;
