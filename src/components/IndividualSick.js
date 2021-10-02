import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

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
    margin:2rem;
    outline: none;
    :focus {
        border: 2px solid rgb(50,50,50);
    }
`

const Font = styled.p`
    font-size:2rem;
    font-weight: 300;
    color: rgb(50,50,50);
`

const Head = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Body = styled.div`
    height: 80%;
`

const IndividualSick = () => {

    const [sick, setSick] = useState('');
    const [product, setProduct] = useState([]);

    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "sick") {
          setSick(value);
          console.log(sick)
      };}

      useEffect(() => {
        Axios.get(`http://3.34.59.69/Avoid/${sick}`).then((res) => {
            setProduct(res.data.slice(0,5))
            console.log(res.data)
        })
      }, [sick]);

      
    return (
        <Container>
            <Head>
            <Font>어떤 알레르기를 앓고 계시나요?</Font>
            <Select name='sick' onChange={onChange}>
                <option value='비염'>비염</option>
                <option value='민감성피부'>민감성 피부</option>
                <option value='아토피'>아토피</option>
                <option value='여드름'>여드름</option>
                <option value='호흡기질환'>호흡기 질환</option>
            </Select>
            <Font>을 유발할 수 있는 향수를 제외한 추천향수에요!</Font>
            </Head>
            <Body>
            {product.map((products) => {
                return (
                    <>
                    <div>{products.ProductName}</div>
                    </>
                )
            })}
            </Body>
        </Container>
    )
}

export default IndividualSick;