import React from "react"
import styled from "styled-components"
import FooterImg from "../Img/reaclFinalFoot.png";


const Container = styled.div`
    display:flex;
    justify-content: center;
    height: 18rem;
    width:100%;
    border-top:1px solid rgb(220,220,220);
`

function Footer() {
    return (
        <Container>
            <img src={FooterImg} alt='images'/>
        </Container>
    )
}

export default Footer;