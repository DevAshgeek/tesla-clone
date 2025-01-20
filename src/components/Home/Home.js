import React from 'react'
import styled from "styled-components"
import Section from '../Section/Section'

function Home({ data }) {

    const sections = data.map((item) => (
        <Section
            key={item.title}
            title={item.title}
            description={item.description}
            backgroundImage={item.backgroundImage}
            leftBtnTxt={item.leftBtnTxt}
            rightBtnTxt={item.rightBtnTxt}
        />
    ))

    return (
        <Container>
            {sections}
        </Container>
    );
}


export default Home

const Container = styled.div`
    height: 100vh;
    width: 100vw;

`