import React from 'react';
import styled from "styled-components";
import ActivityIndicator from "./ActivityIndicator";

export default function ActivityLoader() {
    return (
        <Container>
            <ActivityIndicator height={7} color={'#fff'} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #3B2205;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeLandingWrap = styled.div`
    min-width: 100%;
    min-height: 101vh;
`

