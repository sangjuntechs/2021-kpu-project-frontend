import React from "react"
import styled from "styled-components"
import FooterImg from "../Img/footer_final.jpeg";


const Container = styled.div`
    display:flex;
    justify-content: center;
    height: 22rem;
    width:100vw;
`

function Footer() {
    return (
        <Container>
            <img src={FooterImg} alt='images'/>
        </Container>
    )
}

export default Footer;