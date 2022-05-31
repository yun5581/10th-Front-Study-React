// 버튼을 누르면 숫자가 1씩 증가됩니다.
// useState를 사용하세요.

import React, { useState } from "react";

const State = () => {
const [number, setNumber] = useState(0);
//useState를 사용할 때에는 상태의 기본값을 넣어서 호출
// setNumber: 변화한 number의 값을 저장

  const onIncrese = () => {
    setNumber(number+1)
    console.log('+1')
  }
  // 세션1 응용! 따로 함수 만들어서 넣기 + 콘솔 찍어보기
  
  return (
    <div>
      <h1>이름 : {number}</h1> 
      <button onClick={onIncrese}>+</button>
    </div>
  );
};

export default State;
