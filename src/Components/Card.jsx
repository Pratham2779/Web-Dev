import React from 'react';
import './Card.css';

function Card({ 
  number, 
  childStateArray, 
  index, 
  setChildStateArray, 
  count, 
  setCount, 
  matchedIdx })
   {
  const handleOnClick = () => {
    if (childStateArray[index] === 'clicked' || matchedIdx.includes(index)) return;

    let temArray = [...childStateArray];
    temArray[index] = 'clicked';
    setChildStateArray(temArray);
    setCount(count + 1);
  };

  return (
    <div
      className={`Card ${childStateArray[index]} ${matchedIdx.includes(index) ? 'matched' : ''}`}
      onClick={handleOnClick}
    >
      {childStateArray[index] === 'clicked' || matchedIdx.includes(index) ? number : null}
    </div>
  );
}

export default Card;