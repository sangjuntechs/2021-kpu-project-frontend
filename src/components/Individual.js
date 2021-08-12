import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Roll from 'react-reveal/Roll'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Bigfont = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top:8px;
`;

const Midifont = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top:8px;
`;

const Card = styled.div`
    width:20rem;
    height: 28rem;
    box-shadow: 2px 4px 12px gray;
    border-radius:15px;
    margin-right:3rem;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.5s;
    :hover {
        transform: translateY(-1rem);
        background-color: rgba(0,0,0,0.05);
    }
    
`

const Highlight = styled.p`
  font-weight: 600;
  background-color: yellow;
  display:inline;
  font-size: 2.2rem;
  font-weight: 700;
`



function Individual() {


    const [userName, setUserName] = useState('');

    
    window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          setUserName(res.kakao_account.profile.nickname);
        },
      });

  return (
    <Container>
      <TextContainer>
        <Fade top opposite={true} delay={500}>
          <Bigfont><Highlight>{userName}</Highlight>님을 위한 추천이에요 🥰</Bigfont>
          <Midifont>딱 맞는 향수를 찾아보세요</Midifont>
        </Fade>
      </TextContainer>
      <CardContainer>
          <Roll right delay={300}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          </Roll>
      </CardContainer>
    </Container>
  );
}

export default Individual;
