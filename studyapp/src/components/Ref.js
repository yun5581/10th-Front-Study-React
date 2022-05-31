// 3초 뒤 input이 focus되도록 만드세요
// useRef를 사용하세요
//
import React, { useRef, useState } from "react";

const Ref = () => {
  //useState 추가 영역
  const[text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  // onFocus 함수
  const onFocus = () => {
    inputElement.current.focus();
  };
// Ref 객체를 1개 생성하세요.
  const inputElement = useRef();
  // setTimeout 함수를 구현하세요.
  setTimeout(()=>inputElement.current.focus(),3000); 

  //jsx 코드를 수정하세요.
  return (
    <div className="App">
      <div>3초 후 포커스!</div>
      <input ref={inputElement} placeholder="작성하시오" />
    </div>
  );
};
export default Ref;
