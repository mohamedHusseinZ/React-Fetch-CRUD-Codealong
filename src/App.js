
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Using the current count value from the state
      setCount((prevCount) => prevCount + 1);
    }, 5000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
