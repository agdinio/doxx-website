import React from 'react'
import styled, { keyframes } from 'styled-components'

let h = 0
let backgroundColor = '#000000'

export default function ActivityIndicator(props:any) {

    h = props.height;
    backgroundColor = props.color;

    return (
        <Container>
            <Bar
                key={1}
                backgroundColor={backgroundColor}
                rotate={0}
                delay={0}
            ></Bar>
            <Bar
                key={2}
                backgroundColor={backgroundColor}
                rotate={30}
                delay={-0.9167}
            ></Bar>
            <Bar
                key={3}
                backgroundColor={backgroundColor}
                rotate={60}
                delay={-0.833}
            ></Bar>
            <Bar
                key={4}
                backgroundColor={backgroundColor}
                rotate={90}
                delay={-0.7497}
            ></Bar>
            <Bar
                key={5}
                backgroundColor={backgroundColor}
                rotate={120}
                delay={-0.667}
            ></Bar>
            <Bar
                key={6}
                backgroundColor={backgroundColor}
                rotate={150}
                delay={-0.5837}
            ></Bar>
            <Bar
                key={7}
                backgroundColor={backgroundColor}
                rotate={180}
                delay={-0.5}
            ></Bar>
            <Bar
                key={8}
                backgroundColor={backgroundColor}
                rotate={210}
                delay={-0.4167}
            ></Bar>
            <Bar
                key={9}
                backgroundColor={backgroundColor}
                rotate={240}
                delay={-0.333}
            ></Bar>
            <Bar
                key={10}
                backgroundColor={backgroundColor}
                rotate={270}
                delay={-0.2497}
            ></Bar>
            <Bar
                key={11}
                backgroundColor={backgroundColor}
                rotate={300}
                delay={-0.167}
            ></Bar>
            <Bar
                key={12}
                backgroundColor={backgroundColor}
                rotate={330}
                delay={-0.0833}
            ></Bar>
        </Container>
    )
}

const Container = styled.div`
  width: ${props => h}rem;
  height: ${props => h}rem;
  position: relative;
  display: inline-block;
`

const Bar = styled('div')<{backgroundColor?:string,rotate?:number,delay?:number}>`
  width: ${props => (h * 0.05)}rem;
  height: ${props => (h * 0.16)}rem;
  left: 49%;
  top: 43%;
  opacity: 0;
  background-color: ${props => props.backgroundColor || '#000000'};
  position: absolute;
  -webkit-border-radius: ${props => (0.4)}rem;
  -webkit-box-shadow: 0 0 ${props => (0.2)}rem rgba(0, 0, 0, 0.2);
  -webkit-animation: ${props => fade} 1s linear infinite;

  -webkit-transform: rotate(${props => props.rotate}deg) translate(0, -130%);
  -webkit-animation-delay: ${props => props.delay}s;
`

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;
`
