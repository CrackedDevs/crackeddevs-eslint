import React from 'react';

const BadFormattingComponent = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Bad Formatting Test</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
    </div>
  );
};

export default BadFormattingComponent;
