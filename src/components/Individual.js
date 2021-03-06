import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Axios from "axios";
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120vh;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:5rem;
  width: 70rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Bigfont = styled.p`
  font-size: 2.2rem;
  font-weight: 400;
  margin-top: 8px;
`;

const Midifont = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 15px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 28rem;
  box-shadow: 2px 4px 12px gray;
  border-radius: 15px;
  margin-right: 3rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-1rem);
    background-color: rgba(0, 0, 0, 0.05);
    .font {
      opacity: 1;
      transform: translateY(2rem);
      transition: 0.7s;
      font-weight: 400;
    }
  }
`;

const Highlight = styled.p`
  font-weight: 600;
  background-color: yellow;
  display: inline;
  font-size: 2.2rem;
  font-weight: 700;
`;

const ProductImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  margin: 3rem;
`;

const CardInContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250,250,250);
`;

const CardInContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardTextBox1 = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:50%;
  text-align: center;
  padding:1rem;
`

const CardTextBox2 = styled.div`
  display:flex;
  align-items: center;
  width:50%;
  flex-direction: column;
  justify-content: center;
  padding:1.5rem;
  height: 100%;
`

const CardNameFont = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const SLevelLawFont = styled.p`
  font-size:1rem;
  color: green;
  font-weight: 600;
  margin-bottom: 1rem;
`

const SLevelMidFont = styled.p`
  font-size:1rem;
  color: orange;
  font-weight: 600;
  margin-bottom: 1rem;
`

const SLevelHighFont = styled.p`
  font-size:1rem;
  color: red;
  font-weight: 600;
  margin-bottom: 1rem;
`

const LavelContainer = styled.div`
  display: flex;
`

const AgeLavel = styled.p`
  padding:0.4rem;
  margin:0.4rem;
  font-size: 0.8rem;
  color:rgb(80,80,80);
  font-weight: 600;
`

const LookFont = styled.p`
  opacity: 0;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  color:rgb(50,50,50);
  left:10px;
`

const HashTag = styled.p`
  color: dodgerblue;
  font-size:0.8rem;
  display: inline-flex;
  margin-top:0.5rem;
`


const Individual = ({match}) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState('');
  const [product, setProduct] = useState([]);

  

  useEffect(() => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        setUserName(res.kakao_account.profile.nickname);
        setUserAge(res.kakao_account.age_range);
      },
    });

    Axios.get("http://3.34.59.69/Review").then((res) => {
      const result = res.data.filter((results) => 
        results.Age_range === userAge
      )
      console.log(result,'result')
      setProduct(result.slice(0,3))
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAge]);

  

  

  return (
    <Container>
      <TextContainer>
        <Fade top opposite={true} delay={500}>
          <Bigfont>
            {userAge === '20~29' ? '20??? ?????????' : ''}
            {userAge === '30~39' ? '30??? ?????????' : ''}
            {userAge === '40~49' ? '40??? ?????????' : ''}
            {userAge === '50~59' ? '50??? ?????????' : ''}
          </Bigfont>
          <Bigfont>
            <Highlight>{userName}</Highlight> ?????? ?????? ??????????????? ????
          </Bigfont>
          <Midifont>??? ?????? ????????? ???????????????!</Midifont>
        </Fade>
      </TextContainer>
      <CardContainer>
        <Roll right delay={300}>
          {product[0]
            ? product.map((prod) => {
                return (
                  
                  <Link to={`/Product/detail/${prod.ProductNum}`} key={prod.ProductNum}>
                    {prod.Age_range === '20~29' ? <Card key={prod.ProductNum}>
                    <LavelContainer>
                      <>
                      <AgeLavel>{prod.Age_range === '20~29' ? '?????? 20????????? ?????? ????????' : ''}</AgeLavel>
                      <AgeLavel>{prod.Age_range === '30~39' ? '30?????? ?????? ????????? ????????' : ''}</AgeLavel>
                      <AgeLavel>{prod.Age_range === '40~49' ? '40??? ?????? ????????? ????????' : ''}</AgeLavel>
                      <AgeLavel>{prod.Age_range === '50~59' ? '50??? ?????? ????????? ????????' : ''}</AgeLavel>
                      </>
                    </LavelContainer>
                    
                    <CardInContainer1>
                      <ProductImg
                        src={`http://3.34.59.69${prod.ProductImg}`}
                        alt="productImg"
                      />
                    </CardInContainer1>
                    <CardInContainer2>
                      <CardTextBox1>
                      <CardNameFont>{prod.ProductName}</CardNameFont>
                      <p>{prod.ProductPrice} ???</p>
                      <HashTag>#{prod.ProductF1} #{prod.ProductF2} #{prod.ProductF3}</HashTag>
                      </CardTextBox1>
                      <CardTextBox2>
                        <SLevelLawFont>{prod.ProductSLevel === 'low' ? '????????? ??????' : ''}</SLevelLawFont>
                        <p>{prod.ProductSLevel === 'low' ? '???????????? ????????? ?????? ?????? ??????????????? ????' : ''}</p>
                        <SLevelMidFont>{prod.ProductSLevel === 'mid' ? '????????? ??????' : ''}</SLevelMidFont>
                        <p>{prod.ProductSLevel === 'mid' ? '????????? ?????? ???????????? ????????? ???????????? ????????? ????' : ''}</p>
                        <SLevelHighFont>{prod.ProductSLevel === 'high' ? '????????? ??????' : ''}</SLevelHighFont>
                        <p>{prod.ProductSLevel === 'high' ? '???????????? ?????? ????????? ???????????? ??? ??????????????? ????' : ''}</p>
                      </CardTextBox2>
                    </CardInContainer2>
                    <LookFont className='font'>???????????? ?????????????????? ???????????? ????????</LookFont>
                  </Card> : ''}
                  
                  </Link>
                  
                );
              })
            : <Bigfont>????????? ???????????? ????????? ????</Bigfont>}
        </Roll>
      </CardContainer>
    </Container>
  );
}

export default Individual;
