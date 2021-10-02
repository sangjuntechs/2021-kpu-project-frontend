import React, { useState} from "react";
import Review from "../components/Review";
import Individual from "../components/Individual";
import ManyReview from "../components/ManyReview";
import RequestP from "../components/RequestP";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import Modal from "react-modal";
import Poster from "../Img/posterFinal2.png";
import styled from "styled-components";
import "../styles/Modal.css";
import Logo from "../Img/logorealfinal.jpeg";
import IndividualSick from "../components/IndividualSick";

const PosterImg = styled.img`
  height: 800px;
  width: 115%;
  z-index: 30;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoImg = styled.img`
  height: 300px;
  width: 400px;
`;

const ModalCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top:0;
  right:-4.5rem;
  margin:10px;
  font-size: 18px;
`;

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  

  const modalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Header>
      <LogoImg src={Logo} alt='로고'/>
    </Header>
      <Banner></Banner>
      <Individual></Individual>
      <IndividualSick></IndividualSick>
      <Review></Review>
      <NewProducts></NewProducts>
      <ManyReview></ManyReview>
      <RequestP></RequestP>
      <Footer></Footer>

      <Modal isOpen={modalOpen} overlayClassName="Overlay" className="Modal" ariaHideApp={false}>
        <ModalCloseBtn onClick={modalClose}>❌</ModalCloseBtn>
        <PosterImg src={Poster} alt="포스터" />
      </Modal>
    </>
  );
};

export default HomePage;
