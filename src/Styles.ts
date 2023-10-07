import styled, {keyframes} from 'styled-components';
import {Breakpoint} from "./constants";

export const Text = styled('div')<{
    font?:string,
    size?:number,
    weight?:number,
    color?:string,
    blend?:boolean,
    lineHeight?:number,
    fontSize?:number,
    spacing?:number}>`
    font-family: ${props => props.font};
    font-size: ${props => props.fontSize ? `${props.fontSize}rem` : `${props.size}px`};
    font-weight: ${props => props.weight || 600};
    letter-spacing: ${props => props.spacing || 0.01}rem;
    color: ${props => props.color || ''};   
    ${props => props.blend ? 'mix-blend-mode: difference;' : ''};
    line-height: ${props => props.lineHeight || 1};
`

export const TextCol = styled('div')<{marginBottom?:number}>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.marginBottom || 0}rem;
`

export const BoxSection = styled('div')<{marginTop?:number,boxShadow?:number}>`
    width: 80%;
    border-radius: 1rem;
    border: 0.2rem solid #3A2206;
    background-color: #EDD79B;
    box-sizing: border-box;
    box-shadow: ${props => props.boxShadow || 0.8}rem ${props => props.boxShadow || 0.8}rem #3A2206;
    margin-top: ${props => props.marginTop || 0}rem;
`

export const Button = styled('div')<{
    width?:number,
    height?:number,
    paddingTop?:number,
    paddingBottom?:number,
    paddingLeft?:number,
    paddingRight?:number,
    bg?:string,
    color?:string,
    borderRadius?:number
    borderW?:number,
    unit?:string}>`
    background: linear-gradient(90.01deg, #F2B30F 5.23%, #A56E04 19.79%, #FFDE88 65.49%, #D08A02 107.44%);    
    border-radius: ${props => props.borderRadius || 1.2}${props => props.unit || 'vw'};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: ${props => props.borderW || 0.15}${props => props.unit || 'vw'} solid #3A2206;
    cursor: pointer;
    overflow: hidden;
    z-index: 10;
    width: ${props => props.width}${props => props.unit || 'vw'};
    height: ${props => props.height}${props => props.unit || 'vw'};    
    min-width: ${props => props.width}${props => props.unit || 'vw'};
    min-height: ${props => props.height}${props => props.unit || 'vw'};    
`

export const ButtonInner = styled('div')<{
    width?:number,
    height?:number,
    bg?:string,
    font?:string,
    fontSize?:number,
    borderRadius?:number,
    borderW?:number,
    letterSpacing?:number,
    unit?:string,
    hoverBgColor?:string}>`
    width: ${props => props.width}${props => props.unit || 'vw'};
    height: ${props => props.height}${props => props.unit || 'vw'};

    background: ${props => props.bg};
    border-radius: ${props => props.borderRadius || 0.8}${props => props.unit || 'vw'};
    border: ${props => props.borderW || 0.15}${props => props.unit || 'vw'} solid #3A2206;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.font || 'asulregular'};
    font-size: ${props => props.fontSize}${props => props.unit || 'vw'};
    letter-spacing: ${props => props.letterSpacing}${props => props.unit || 'vw'};
    &:hover {
        ${props => props.hoverBgColor ? `background:${props.hoverBgColor}` : ''};
    }
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
 `

export const PopupHeader = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color: #fff;
    border-bottom: 0.1rem solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => PopupHeaderSlideDown} 0.75s forwards;
    animation-delay: 0.5s;
    top: -3.5rem;
    text-align: center;
`

const PopupHeaderSlideDown = keyframes`
    0%{top: -3.5rem;}
    100%{top: 0;}    
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(0,0,0, 0.9);
    z-index: 202;
    display: none;
    justify-content: center;
    &.active {
        display: flex;
    }
    padding-bottom: 3rem;
`

export const pageHeight = window.innerHeight + 'px';

export const DoText = styled('span')<{color?:string,size?:number,fourth?:boolean,letterspacing?:number}>`
    font-family: syncopate-bold;
    // font-size: ${props => props.size || 5.5}vw;
    font-size: ${props => props.size || 8}vh;
    color: ${props => props.color || '#000'};
    line-height: 0.9;
    letter-spacing: ${props => props.letterspacing || -0.3}rem;
    word-wrap: break-word;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: ${props => (props.size ? props.size * 0.6 : 0) || 5}vh;
        line-height: 1; 
    }    
`
