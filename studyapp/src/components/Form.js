// form을 입력하면, text가 출력되는 input을 만들어주세요.
// 엔터를 누르면 폼이 제출됩니다.
// 폼을 제출해도 페이지가 새로고침 되지 않도록 합니다.
// state는 2개를 사용합니다.
// form에 적용할 onSubmit 이벤트 함수를 구현하세요
// input에 적용할 onChange 이벤트 함수를 구현하세요

import React, { useState } from "react";

const Form = () => {
  // useState로 state 2개 만들기
  const [InputText, setInputText] = useState('');
  const [OutputText, setOuputText] = useState('');

  // onSubmit 함수 만들기
  const onSubmit = (e) => {
    e.preventDefault();
    setOuputText(InputText);
    setInputText("");
  }
  // onChange 함수 만들기
  const onChange = (e) => {
    setInputText(e.target.value);
  }

  // jsx 코드 수정
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
        vlaue = {InputText}
        placeholder="작성해주세요"/>
        <button type="submit">제출</button>
      </form>

      <p>{OutputText}</p>
    </div>
  );
};

export default Form;
