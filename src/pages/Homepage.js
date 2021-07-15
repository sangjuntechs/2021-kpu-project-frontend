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
import styled from 'styled-components'
import '../styles/Modal.css'

const PosterImg = styled.img`
  height: 800px;
  width: 100%;
`

const ModalCloseBtn = styled.button`
  all:unset;
  cursor: pointer;
  position:absolute;
  right:0px;
  margin:10px;
  font-size:18px;
`

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const modalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <h1>다향</h1>
      <Banner></Banner>
      <Individual></Individual>
      <Review></Review>
      <NewProducts></NewProducts>
      <ManyReview></ManyReview>
      <RequestP></RequestP>
      <Footer></Footer>
      
      <Modal isOpen={modalOpen} overlayClassName='Overlay' className="Modal">
        <ModalCloseBtn onClick={modalClose}>❌</ModalCloseBtn>
        <PosterImg src={Poster} alt='포스터'/>
      </Modal>
    </>
  );
};

export default HomePage;
