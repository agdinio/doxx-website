import React from 'react';
import styled from "styled-components";

export default function TouchFullscreenScrolling() {
    return (
        <Container id="fullpage">
            <Section>
                <h1>Full Page Scroll Example</h1>
            </Section>
            <Section>
                <h1>jQuery</h1>
            </Section>
            <Section>
                <h1>Script</h1>
            </Section>
            <Section>
                <h1>Net</h1>
            </Section>
            <Section>
                <h1>Demo</h1>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`
const Section = styled.section`
    height: 100vh;
    &:nth-child(1) {
      background: #1ABC9C;
    }
    
    &:nth-child(2) {
      background: #F7DC6F;
    }
    
    &:nth-child(3) {
      background: #D2B4DE;
    }
    
    &:nth-child(4) {
      background:  #F5B041;
    }
    
    &:nth-child(5) {
      background: #F1948A ;
    }
`