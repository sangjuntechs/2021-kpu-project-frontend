import React from "react";

import Review from "../components/Review";
import GlobalStyles from "../components/GlobalReset";
import Individual from "../components/Individual";
import ManyReview from "../components/ManyReview";
import RequestP from "../components/RequestP";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import Login from "../Routes/Login";

const HomePage = () => {
  return (
    <>
      <Login />
      <h1>다향</h1>
      <Banner></Banner>
      <Individual></Individual>
      <Review></Review>
      <NewProducts></NewProducts>
      <ManyReview></ManyReview>
      <RequestP></RequestP>
      <Footer></Footer>
      <GlobalStyles />
    </>
  );
};

export default HomePage;
