import React, { useEffect, useState } from 'react';
import './Container.css';
import Card from './Card';

function Container({
  N,
  setN,
  valueArray,
  setValueArray,
  shuffleArray,
  createArray,
  childStateArray,
  setChildStateArray,
  matchedIdx,
  setMatchedIdx,
  isGameWon,
  setIsGameWon,
}) {
  const [count, setCount] = useState(0);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${N}, 70px)`,
    gridTemplateRows: `repeat(${N}, 70px)`,
    gap: '7px',
  };

  const handleOnClick = () => {
    let temArray = createArray();
    shuffleArray(temArray);
    setValueArray(temArray);
    setChildStateArray(Array(N * N).fill('unclicked'));
    setMatchedIdx([]);
    setIsGameWon(false);
  };

  const renderCard = (n) => {
    let array = [];
    for (let a = 0; a < n * n; a++) {
      array.push(
        <Card
          number={valueArray[a]}
          childStateArray={childStateArray}
          index={a}
          setChildStateArray={setChildStateArray}
          count={count}
          setCount={setCount}
          matchedIdx={matchedIdx}
          key={a}
        />
      );
    }
    return array;
  };

  useEffect(() => {
    if (count === 2) {
      let openedArray = [];
      for (let i = 0; i < childStateArray.length; i++) {
        if (childStateArray[i] === 'clicked' && !matchedIdx.includes(i)) {
          openedArray.push(i);
        }
      }
      if (valueArray[openedArray[0]] === valueArray[openedArray[1]]) {
        let temArray = matchedIdx.length > 0 ? [...matchedIdx, ...openedArray] : [...openedArray];
        setMatchedIdx(temArray);
        setCount(0);
        if (temArray.length === valueArray.length || (valueArray.length % 2 !== 0 && temArray.length === valueArray.length - 1)) {
          setIsGameWon(true);
        }
      } else {
        setTimeout(() => {
          let temArray = [...childStateArray];
          temArray[openedArray[0]] = 'unclicked';
          temArray[openedArray[1]] = 'unclicked';
          setChildStateArray(temArray);
          setCount(0);
        }, 1000);
      }
    } else if (count === 1 && valueArray.length % 2 !== 0 && matchedIdx.length === valueArray.length - 1) {
      // Handle last unmatched card for odd grid size
      let unmatchedIndex = childStateArray.findIndex((state, idx) => state==='clicked' && !matchedIdx.includes(idx));
      setMatchedIdx([...matchedIdx, unmatchedIndex]);
      setIsGameWon(true);
    }
  }, [childStateArray, count]);

  return (
    <center className="container">
      <center className="header">
        <h2>Memory Game</h2>
        <input
          type="number"
          min="1"
          placeholder="Number"
          onChange={(e) => setN(Number(e.target.value))}
        />
      </center>

      <center className="content">
        <div style={gridStyle}>{renderCard(N)}</div>
      </center>
      {isGameWon && <div className="win-message">You Won!</div>}
      <button className="resetBt" onClick={handleOnClick}>Reset</button>
    </center>
  );
}

export default Container;