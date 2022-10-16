import { useState } from "react";
function Counter({ num }) {
  console.log(num);
  const [count, setCount] = useState(0);
  //함수형 업데이트 > SET 함수의 인자로 콜백함수를 넣으면 첫번째 인자로 최신 상태값이 전달된다.
  const increaNum = () => {
    setCount((aa) => aa + num);
  };
  const decreaNum = () => {
    setCount(count - num);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaNum}>+1</button>
      <button onClick={decreaNum}>-1</button>
    </div>
  );
}

export default Counter;
