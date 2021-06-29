import React from 'react';
import styled from 'styled-components';
import Review from './components/Review';
import GlobalStyles from './components/GlobalReset';
import Individual from './components/Individual';
import ManyReview from './components/ManyReview';
import RequestP from './components/RequestP';
import Banner from './components/Banner';
import NewProducts from './components/NewProducts';
import Footer from './components/Footer';

const Header = styled.div`
    font-size: 25px;
`

function App() {

    return (
        <>
        <Header>다향</Header>
        <Banner></Banner>
        <Individual></Individual>
        <Review></Review>
        <NewProducts></NewProducts>
        <ManyReview></ManyReview>
        <RequestP></RequestP>
        <Footer></Footer>
        <GlobalStyles/>
        </>
    )
    
}

export default App