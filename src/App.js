import React from 'react';
import AppRouter from './Routes/AppRouter';
import GlobalStyles from '../src/components/GlobalReset'


function App() {

    return (
        <>
            <AppRouter />
            <GlobalStyles />
        </>
    )
    
}

export default App;