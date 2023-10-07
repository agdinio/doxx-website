import React from 'react';
import styled, {keyframes} from "styled-components";

export default function ActivityIndicatorDots() {
    return (
        <Container>
        </Container>
    );
}


const Container = styled.div`
    &:after {
        content: ' .';
        animation: ${props => dots} 1s steps(5, end) infinite;
    }
`

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: #953112;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 #953112,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 #953112,
      .5em 0 0 #953112;}
`