import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:10rem;
  padding-top:0;
`;

const MainPont = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

const Input = styled.input`
    padding: 30px;
    width:40vw;
    margin-top:15px;
    border:3px solid black;
    font-size:16px;
`

function RequestP() {
  const [requestValue, setRequestValue] = useState([]);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "requestValue") {
      setRequestValue(value);
      console.log(value);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`피드백 감사합니다! \n요청하신 ${requestValue}은(는) 빠른 시일내에 업로드 해드릴게요 😘`)
    }
  };

  return (
    <Container>
      <MainPont>추가됐으면 좋겠는 향수를 팀에게 말해주세요!</MainPont>
      <Input
        name="requestValue"
        onChange={onChange}
        value={requestValue}
        placeholder='향수명을 입력하고 엔터를 눌러주세요!'
        onKeyPress={onKeyPress}
      ></Input>
    </Container>
  );
}

export default RequestP;
