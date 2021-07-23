import React, { useState } from "react";
import Review from "../components/Review";
import Individual from "../components/Individual";
import ManyReview from "../components/ManyReview";
import RequestP from "../components/RequestP";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import Modal from "react-modal";
import Poster from "../Img/poster1.png";
import styled from "styled-components";
import "../styles/Modal.css";
import Logo from "../Img/dahyangLogo.png";

const PosterImg = styled.img`
  height: 800px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoImg = styled.img`
  height: 150px;
  width: 250px;
  margin-top:70px;
`;

const ModalCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin: 10px;
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
