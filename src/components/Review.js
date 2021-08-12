import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid red
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const BigFont = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
`;

const NewFont = styled.p`
  font-size: 2rem;
  color: red;
`;

const CardContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 80%;
`

function Review() {
    return (
        <Container>
      <TitleContainer>
        <Fade left opposite={true} delay={1000}>
        <BigFont>유저들의 생생한 리뷰를 확인하세요 👏🏻</BigFont>
        </Fade>
      </TitleContainer>
      <CardContainer>
      </CardContainer>
    </Container>
    )
}

export default Review;