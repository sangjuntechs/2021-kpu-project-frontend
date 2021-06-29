import React from 'react';
import styled from 'styled-components';
import Review from './components/Review';
import GlobalStyles from './components/GlobalReset';
import Individual from './components/Individual';
import ManyReview from './components/ManyReview';
import RequestP from './components/RequestP';

const Header = styled.div`
    font-size: 25px;
`

function App() {

    return (
        <>
        <Header>다향</Header>
        <Review></Review>
        <Individual></Individual>
        <ManyReview></ManyReview>
        <RequestP></RequestP>
        <GlobalStyles/>
        </>
    )
    
}

export default App