import React, { useState } from 'react';
function Counter() {

  const [count, setCount] = useState(0);
  return (
    <div className="counter task">
      <p>{count}</p>
      <button className='counter__btn' type="button" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;