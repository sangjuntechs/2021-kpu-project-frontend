import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 200px;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Footer() {
    return (
        <Container>
            <p>All copyright 다향</p>
            <p>2021-</p>
        </Container>
    )
}

export default Footer;