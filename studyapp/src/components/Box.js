// 이 파일 안에 3개의 컴포넌트를 생성하세요.
// 부모 컴포넌트 안에 자식1 컴포넌트를 넣으세요.
// 자식1 컴포넌트에 자식2 컴포넌트를 넣으세요.

import React from "react";

const Box = () => {
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      1st Box
      {/* <자식 Component></자식 Component> */}
      <Child1></Child1>
    </div>
  );
};

// 자식 1 컴포넌트 만들기
const Child1 = () => {
  return(
  <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
	2nd Box
  <Child2></Child2>
  </div>
  )
};

// 자식 2 컴포넌트 만들기
const Child2 = () => {
  return(
	<div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
	3rd Box
  </div>
  )
};
export default Box;
