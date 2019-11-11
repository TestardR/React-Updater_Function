import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [recount, setRecount] = useState(0);
  return (
    <div className="App">
      <div>count : {count}</div>
      <div>recount: {recount}</div>
      <button
        onClick={() => {
          console.log('before: ', count);
          setCount(count + 1);
          console.log('after: ', count);
          setCount(count + 1);
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          setRecount(recount => recount + 1);
          setRecount(recount => recount + 1);
        }}>
        Increment
      </button>
    </div>
  );
}

export default App;
