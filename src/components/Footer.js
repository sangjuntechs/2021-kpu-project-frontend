import React from "react"
import styled from "styled-components"
import FooterImg from "../Img/footer1.png";


const Container = styled.div`
    display:flex;
    justify-content: center;
    height: 25rem;
`

function Footer() {
    return (
        <Container>
            <img src={FooterImg} alt='images'/>
        </Container>
    )
}

export default Footer;