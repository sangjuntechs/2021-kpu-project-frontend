import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const MainPont = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 15px;
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

  return (
    <Container>
      <MainPont>추가됐으면 좋겠는 향수를 팀에게 말해주세요!</MainPont>
      <Input
        name="requestValue"
        onChange={onChange}
        value={requestValue}
        placeholder='향수명을 입력해주세요!'
      ></Input>
    </Container>
  );
}

export default RequestP;
