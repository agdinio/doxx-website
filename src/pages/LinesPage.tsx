import React from 'react';
import ScrollArrow from "../components/ScrollArrow";
import logoDoxxSmallWhite from "../assets/images/doxx-logo-small-white.svg";
import styled from "styled-components";
import {Breakpoint} from "../constants";
import {pageHeight, DoText} from "../Styles";

export default function LinesPage() {

    function handleRedirectToMain() {
        window.location.reload();
    }

    return (
        <Container>
            <LineOrange />
            <LineGreenShort />
            <LineGreenLong />
            <LinePurpleSmallTop />
            <LinePurpleSmallBottom />
            <FourthPageTextWrap>
                <FourthPageTexts>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth>"there are lines</DoText>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth>that one should</DoText>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth>never cross.</DoText>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <DoText color="#fff" size={4} letterspacing={0.01} fourth>AT&nbsp;</DoText>
                        <DoText color="#A5E5E7" size={6} letterspacing={0.01} fourth>DO-XX STUDIO<DoText color="#fff" size={6} fourth>,&nbsp;</DoText></DoText>
                    </div>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth>we tamper lines.</DoText>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth>in fact, &nbsp;we'd like to</DoText>
                    <DoText color="#fff" size={6} letterspacing={0.01} fourth><DoText color="#FFB769" size={6} fourth>own</DoText>&nbsp;those lines."</DoText>
                </FourthPageTexts>
                <FourthFooter>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{marginRight:'1vw',marginBottom:'0.5vw'}}>
                            <ScrollArrow white pageNum={4}/>
                        </div>
                        <FourthFooterLogo src={logoDoxxSmallWhite} onClick={handleRedirectToMain}/>
                        {/*<ScrollArrowUpDown src={imageScrollArrowUpDownWhite} style={{marginLeft:'1vw'}}/>*/}
                    </div>
                    <ContactUsWhite marginTop={1} href="mailto:hello@do-xx.com">contact us</ContactUsWhite>
                </FourthFooter>
            </FourthPageTextWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #111;
`
const LineOrange = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    justify-content: flex-end;
    &:after {
        content: '';
        display: inline-block;
        width: 0.2vh;
        height: 200vh;
        background-color: #FFC79E;
        transform: rotate(45deg);
        transform-origin: top;
    }    

    @media (max-width: ${props => Breakpoint.md}) {
        margin-left: 50vh;
    }
`
const LineGreenShort = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &:after {
        content: '';
        display: inline-block;
        width: 0.2vh;
        height: 40%;
        background-color: #99F9FF;
        transform: rotate(-45deg);
        transform-origin: bottom;
    }    

    @media (max-width: ${props => Breakpoint.md}) {
        // margin-left: 1s0vh;
        height: 55vh;
        bottom: 0;
    }
`

const LineGreenLong = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-left: 3vw;
    &:after {
        content: '';
        display: inline-block;
        width: 90%;
        height: 0.2vh;
        background-color: #99F9FF;
        margin-bottom: 28.2vh;
        margin-right: 28.3vh;
    }
    &:before {
        content: '';
        display: inline-block;
        width: 0.7vw;
        height: 0.7vw;
        min-width: 0.7vw;
        min-height: 0.7vw;
        border-radius: 50%;
        background-color: #99F9FF;            
        margin-bottom: 27.6vh;
        margin-right: 1vh;
    }
    
    @media (max-width: ${props => Breakpoint.md}) {
        &:after {
            margin-bottom: 15.4vh;            
            margin-right: 15.7vh;
        }
        &:before {
            width: 0.7vh;
            height: 0.7vh;
            min-width: 0.7vh;
            min-height: 0.7vh;
            margin-bottom: 15.2vh;
        }
    }    
`
const LinePurpleSmallTop = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &:after {
        content: '';
        display: inline-block;
        width: 0.2vh;
        height: 40%;
        background-color: #A77DE1;
        transform: rotate(45deg);
        transform-origin: top;
        margin-bottom: 16.3vh;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        &:after {
            margin-bottom: 3.7vh;
            margin-right: -12.5vh;                
        }
    }        
`
const LinePurpleSmallBottom = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &:after {
        content: '';
        display: inline-block;
        width: 0.2vh;
        height: 40%;
        background-color: #A77DE1;
        transform: rotate(-45deg);
        transform-origin: bottom;
        margin-right: 43.4vh;
    }    
    @media (max-width: ${props => Breakpoint.md}) {
        &:after {
            margin-bottom: -12.7vh;
            margin-right: 6.4vh;                
        }
    }        
`

const FourthPageTextWrap = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => pageHeight};
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    padding-left: 3vw;
`
const FourthPageTexts = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        padding-right: 10vw;
    }
`
const FourthFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding-bottom: 5vh;
    @media (max-width: ${props => Breakpoint.md}) {
        padding-bottom: 19vh;       
    }
`
const FourthFooterLogo = styled.img`
    width: 9vh;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 7vh;
    }
    z-index: 10;
`
const ContactUsWhite = styled('a')<{marginTop?:number}>`
    font-family: syncopate-bold;
    font-size: 2.3vh;
    color: #fff;
    text-decoration: underline;
    margin-top: ${props => props.marginTop || 3.5}vh;
    cursor: pointer;
    white-space: nowrap;
    z-index: 10;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 1.6vh;        
    }
`
