import { useState } from 'react';
import Button from '@mui/material/Button'
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)} variant='contained'>+</Button>
      <Button onClick={() => count > 0 ? setCount(count - 1):setCount(0)} variant='contained'>-</Button>
    </div>
  );
}

export default Counter;