import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './Components/Container';

function App() {
  // State management
  const [valueArray, setValueArray] = useState([]);
  const [N, setN] = useState(2);
  const [childStateArray, setChildStateArray] = useState(Array(N * N).fill('unclicked'));
  const [matchedIdx, setMatchedIdx] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);

  // Functions
  function createArray() {
    let numberArray = [];
    for (let i = 1; i <= N * N; i++) numberArray.push(i % ((N * N) / 2 | 0) + 1);
    return numberArray;
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    let numberArray = createArray();
    shuffleArray(numberArray);
    setValueArray(numberArray);
    setChildStateArray(Array(N * N).fill('unclicked'));
    setMatchedIdx([]);
    setIsGameWon(false);
  }, [N]);

  return (
    <div className="Body">
      <Container
        N={N}
        setN={setN}
        valueArray={valueArray}
        setValueArray={setValueArray}
        shuffleArray={shuffleArray}
        createArray={createArray}
        childStateArray={childStateArray}
        setChildStateArray={setChildStateArray}
        matchedIdx={matchedIdx}
        setMatchedIdx={setMatchedIdx}
        isGameWon={isGameWon}
        setIsGameWon={setIsGameWon}
      />
    </div>
  );
}

export default App;