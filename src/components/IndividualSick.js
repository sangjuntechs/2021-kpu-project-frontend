import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120vh;
  margin-top: 50px;
  flex-direction: column;
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid gray;
  margin: 2rem;
  outline: none;
  :focus {
    border: 2px solid rgb(50, 50, 50);
  }
`;

const Font = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: rgb(50, 50, 50);
`;

const Head = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  height: 80%;
  display: flex;
  margin-top:5rem;
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
  background-color: rgb(250, 250, 250);
`;

const CardInContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardTextBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  text-align: center;
  padding: 1rem;
`;

const CardTextBox2 = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  height: 100%;
`;

const CardNameFont = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const SLevelLawFont = styled.p`
  font-size: 1rem;
  color: green;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SLevelMidFont = styled.p`
  font-size: 1rem;
  color: orange;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SLevelHighFont = styled.p`
  font-size: 1rem;
  color: red;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const LavelContainer = styled.div`
  display: flex;
`;

const AgeLavel = styled.p`
  padding: 0.4rem;
  margin: 0.4rem;
  font-size: 0.8rem;
  color: rgb(80, 80, 80);
  font-weight: 600;
`;

const LookFont = styled.p`
  opacity: 0;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  color: rgb(50, 50, 50);
  left: 10px;
`;

const HashTag = styled.p`
  color: dodgerblue;
  font-size: 0.8rem;
  display: inline-flex;
  margin-top: 0.5rem;
`;

const WarningFont = styled.p`
    margin-bottom: 1rem;
    font-size: 0.8rem;
    padding: 1rem;
`

const IndividualSick = () => {
  const [sick, setSick] = useState("");
  const [product, setProduct] = useState([]);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "sick") {
      setSick(value);
      console.log(sick);
    }
  };

  useEffect(() => {
    Axios.get(`http://3.34.59.69/Avoid/${sick}`).then((res) => {
      setProduct(res.data.slice(0, 4));
      console.log(res.data);
    });
  }, [sick]);

  return (
    <Container>
      <Head>
        <Font>어떤 알레르기를 앓고 계시나요?</Font>
        <Select name="sick" onChange={onChange}>
          <option value="비염">비염</option>
          <option value="민감성피부">민감성 피부</option>
          <option value="아토피">아토피</option>
          <option value="여드름">여드름</option>
          <option value="호흡기질환">호흡기 질환</option>
        </Select>
        <Font>을 유발할 수 있는 향수를 제외한 추천향수에요!</Font>
      </Head>
      <Body>
        {sick === "" ? "알레르기를 선택하시면 알맞은 추천을 해드려요 🧚‍♀️" : ""}
        {product.map((prod) => {
          return (
            <Link
              to={`/Product/detail/${prod.ProductNum}`}
              key={prod.ProductNum}
            >
                <WarningFont>{sick}을 유발하는 성분이 적은 향수에요</WarningFont>
                <Card key={prod.ProductNum}>
                  <LavelContainer>
                    <>
                      <AgeLavel>
                        {prod.Age_range === "20~29"
                          ? "최근 20대에게 인기 👍🏻"
                          : ""}
                      </AgeLavel>
                      <AgeLavel>
                        {prod.Age_range === "30~39"
                          ? "30대가 많이 찾아요 👍🏻"
                          : ""}
                      </AgeLavel>
                      <AgeLavel>
                        {prod.Age_range === "40~49"
                          ? "40대 많이 찾아요 👍🏻"
                          : ""}
                      </AgeLavel>
                      <AgeLavel>
                        {prod.Age_range === "50~59"
                          ? "50대 많이 찾아요 👍🏻"
                          : ""}
                      </AgeLavel>
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
                      <p>{prod.ProductPrice} 원</p>
                      <HashTag>
                        #{prod.ProductF1} #{prod.ProductF2} #{prod.ProductF3}
                      </HashTag>
                    </CardTextBox1>
                    <CardTextBox2>
                      <SLevelLawFont>
                        {prod.ProductSLevel === "low" ? "위험도 낮음" : ""}
                      </SLevelLawFont>
                      <p>
                        {prod.ProductSLevel === "low"
                          ? "알레르기 반응이 낮은 순한 제품입니다 🥰"
                          : ""}
                      </p>
                      <SLevelMidFont>
                        {prod.ProductSLevel === "mid" ? "위험도 보통" : ""}
                      </SLevelMidFont>
                      <p>
                        {prod.ProductSLevel === "mid"
                          ? "체질에 따라 알레르기 반응이 있을수도 있어요 😢"
                          : ""}
                      </p>
                      <SLevelHighFont>
                        {prod.ProductSLevel === "high" ? "위험도 위험" : ""}
                      </SLevelHighFont>
                      <p>
                        {prod.ProductSLevel === "high"
                          ? "알레르기 유발 물질이 많습니다 잘 확인하세요 😱"
                          : ""}
                      </p>
                    </CardTextBox2>
                  </CardInContainer2>
                  <LookFont className="font">
                    클릭하면 상세페이지로 이동해요 👍🏻
                  </LookFont>
                </Card>
            </Link>
          );
        })}
      </Body>
    </Container>
  );
};

export default IndividualSick;
