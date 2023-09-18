import { useState } from 'preact/hooks';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <form>
      <input
        type="number"
        onInput={e => setA(+e.target.value)}
      />
      +
      <input
        type="number"
        onInput={e => setB(+e.target.value)}
      />
      =
      <span>{a + b}</span>
    </form>
  );
};

export default Calculator;
