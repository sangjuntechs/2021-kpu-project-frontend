import { React, useState } from "react";
import ImageUploader from "react-images-upload";
import Axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
`;

const TextInput = styled.input`
  padding: 5px;
  margin: 5px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  width: 80%;
  height: 10%;
  margin: 5px;
`;

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
`;


const ProdUpload = () => {
  const [pictures, setPictures] = useState();
  const [prodName, setProdName] = useState("");
  const [prodDetail, setProdDetail] = useState("");
  const [prodComponent, setProdComponent] = useState("");
  const [price, setPrice] = useState("");
  const [sLevel, setSlevel] = useState("");
  const [userAge, setUserAge] = useState("");
  const [prodF1, setProdF1] = useState("");
  const [prodF2, setProdF2] = useState("");
  const [prodF3, setProdF3] = useState("");


  const onDrop = (picture) => {
    setPictures(picture[0])
  };

  console.log(pictures)
  
  const formData = new FormData();
  formData.append("image", pictures);
  formData.append("name", prodName);
  formData.append("detail", prodDetail);
  formData.append("compo", prodComponent);
  formData.append("price", price);
  formData.append("slevel", sLevel);
  formData.append("age", userAge);
  formData.append("productf1", prodF1);
  formData.append("productf2", prodF2);
  formData.append("productf3", prodF3);


  const upload = () => {
    Axios.post("http://3.34.59.69/Product", formData).then(
      console.log("success userinfo save db..")
    );
    alert('등록 완료')
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "prodName") {
      setProdName(value);
    }
    if (name === "prodDetail") {
      setProdDetail(value);
    }
    if (name === "prodComponent") {
      setProdComponent(value);
    }
    if (name === "price") {
      setPrice(value);
    }
    if (name === "slevel") {
      setSlevel(value);
    }
    if (name === "prodF1") {
      setProdF1(value);
    }
    if (name === "prodF2") {
      setProdF2(value);
    }
    if (name === "prodF3") {
      setProdF3(value);
    }
  };

  window.Kakao.API.request({
    url: "/v2/user/me",
    success: (res) => {
      setUserAge(res.kakao_account.age_range);
    },
  });
  return (
    <>
      제품 업로드 (관리자 전용)
      <FormContainer>
        <ImageUploader
          withIcon={true}
          onChange={onDrop}
          imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview={true}
        />
        <TextContainer>
          Product Info
          <TextInput
            type="text"
            name="prodName"
            value={prodName}
            onChange={onChange}
            placeholder="제품 이름"
          />
          <TextArea
            name="prodDetail"
            value={prodDetail}
            onChange={onChange}
            placeholder="제품 설명"
          />
          <TextInput
            type="text"
            name="prodF1"
            value={prodF1}
            onChange={onChange}
            placeholder="제품 특성1"
          />
          <TextInput
            type="text"
            name="prodF2"
            value={prodF2}
            onChange={onChange}
            placeholder="제품 특성2"
          />
          <TextInput
            type="text"
            name="prodF3"
            value={prodF3}
            onChange={onChange}
            placeholder="제품 특성3"
          />
          <TextArea
            name="prodComponent"
            value={prodComponent}
            onChange={onChange}
            placeholder="제품 구성"
          />
          <TextInput
            type="text"
            name="price"
            value={price}
            onChange={onChange}
            placeholder="제품 가격"
          />
          <TextInput
            type="text"
            name="slevel"
            value={sLevel}
            onChange={onChange}
            placeholder="제품 위험도"
          />
          <Button onClick={upload}>등록</Button>
        </TextContainer>
      </FormContainer>
    </>
  );
};

export default ProdUpload;
