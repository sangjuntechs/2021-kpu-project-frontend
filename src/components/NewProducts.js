import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const BigFont = styled.p`
  font-size: 3rem;
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
`

const Card = styled.div`
    width:25rem;
    height:33rem;
    box-shadow: 2px 4px 8px gray;
    border-radius:15px;
`

function NewProducts() {
  return (
    <Container>
      <TitleContainer>
        <NewFont>NEW!</NewFont>
        <BigFont>새로 등록된 제품들이에요!</BigFont>
      </TitleContainer>
      <CardContainer>
        <Card></Card>
      </CardContainer>
    </Container>
  );
}

export default NewProducts;
