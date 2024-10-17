import { useState, useEffect } from "react";
function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="task">
      <h1>Timer</h1>
      <p>{time}</p>
    </div>
  );
}

export default Timer;