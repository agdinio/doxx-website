import React from 'react';
import styled from "styled-components";

const w = 4;
function ScrollArrow(props:any) {
    return (
        <Container abs={props.abs} bottom={props.bottom}>
            {
                props.arrowUpHidden ? null
                    : <ImageArrowUp key="scroll-arrow-1" src={require(`../assets/images/scroll-assets/${props.white ? 'arrow-up-white.svg' : 'arrow-up-black.svg'}`).default} />
            }
                <ImageRectangle
                    key="scroll-arrow-2"
                    white={props.white}
                    src={require(`../assets/images/scroll-assets/${props.white ? 'rectangle-white.svg' : 'rectangle-black.svg'}`).default}
                    numText={props.pageNum}
                />
            {
                props.arrowDownHidden ? null
                    : <ImageArrowDown key="scroll-arrow-3" src={require(`../assets/images/scroll-assets/${props.white ? 'arrow-down-white.svg' : 'arrow-down-black.svg'}`).default} />
            }
        </Container>
    );
}

export default ScrollArrow;

const Container = styled('div')<{abs?:boolean,bottom?:number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props => props.abs ? 'position:absolute' : ''};
    bottom: ${props => props.bottom}v;
    ${props => props.bottom ? `bottom:${props.bottom}vh` : ''}
`
const RectWrap = styled.div`
    position: relative;
`
const NumText = styled('span')<{white?:boolean}>`
    position: absolute;
    color: ${props => props.white ? '#fff' : '#000'};
`
const ImageArrowUp = styled.img`
    width: ${props => w * 0.45}vh;
`
const ImageRectangle_ = styled.img`
    width: ${props => w}vh;
    margin: ${props => w * 0.1}vw 0;
`
const ImageRectangle = styled('div')<{src?:string,numText?:string,white?:boolean}>`
    width: ${props => w}vh;
    height: ${props => w}vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => w * 0.1}vw 0;
    &:after {
        position: absolute;
        content: '${props => props.numText}';
        color: ${props => props.white ? '#fff' : '#000'};
        font-size: ${props => w * 0.5}vh;
        font-family: syncopate-bold;
        line-height: 1;
        margin-top: 0.4vh;
    }
`
const ImageArrowDown = styled.img`
    width: ${props => w * 0.45}vh;
`