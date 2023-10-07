import React from 'react';
import styled, {keyframes} from "styled-components";
import logoDoxxSliding from "../assets/images/doxx-sliding.svg";
import logoDoxxSmall from "../assets/images/doxx-logo-small.svg";
import ScrollArrow from "../components/ScrollArrow";
import {Breakpoint} from "../constants";
import {DoText} from "../Styles";

export default function ThirdPage() {

    function handleRedirectToMain() {
        window.location.reload();
    }

    return (
        <Container>
            <DoxxLogoScrolling>
                <DoxxLogoScrollingContent>
                    <DoxxLogoBanner src={logoDoxxSliding}/>
                    <DoxxLogoBanner src={logoDoxxSliding}/>
                </DoxxLogoScrollingContent>
            </DoxxLogoScrolling>
            <DoTextWrap>
                <DoText>do-&#8288;Work</DoText>
                <DoText>do-&#8288;Experiences</DoText>
                <DoText>do-&#8288;Community</DoText>
            </DoTextWrap>
            <PageFooter>
                <FooterLogo src={logoDoxxSmall} onClick={handleRedirectToMain}/>
                <BulletLine/>
                <ContactUs style={{marginRight:'2vw'}} href="mailto:hello@do-xx.com">contact us</ContactUs>
                {/*<ScrollArrowUpDown src={imageScrollArrowUpDownBlack} style={{marginRight:'1vw'}}/>*/}
                <ScrollArrow pageNum={3}/>
            </PageFooter>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;    
    background: linear-gradient(62deg, ${props => '#7DE1EB'}, ${props => '#aae7ed'}, ${props => '#d1e6c7'}, ${props => '#23D5AB'});
    animation: ${props => bgGradient} 10s ease infinite; 
    background-size: 400% 400%;      
`
const bgGradient = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`
const DOXX_SCROLLING_HEIGHT = 48;
const DoxxLogoScrolling = styled.div`
    position: relative;
    width: 100%;
    height: ${props => DOXX_SCROLLING_HEIGHT}vh;
    display: flex;
    align-items: center;
`
const DoTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    padding-left: 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        padding-right: 3vw;
    }
`
const DoxxLogoScrollingContent = styled.div`
    display: flex;
    width: auto;
`
const DoxxLogoBanner = styled('img')<{toLeft?:boolean}>`
    height: ${props => DOXX_SCROLLING_HEIGHT * 0.7}vh;
    margin-right: 3vw;
    animation: ${props => props.toLeft ? slideshowToLeft : slideshowToRight} 12s linear infinite; 
`
const slideshowToLeft = keyframes`
    0%{transform: translateX(0);}
    100%{transform: translateX(-100%);}
`
const slideshowToRight = keyframes`
    0%{transform: translateX(-100%);}
    100%{transform: translateX(0%);}
`
const PageFooter = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;    
    align-items: center;
    height: 14vh;
    padding 0 3vw 0 3vw;
`
const ContactUs = styled('a')<{color?:string}>`
    font-family: syncopate-bold;
    font-size: 2.3vh;
    color: ${props => props.color || '#000'};
    text-decoration: underline;
    margin-top: 3.5vh;
    cursor: pointer;
    white-space: nowrap;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 1.6vh;        
    }
`
const FooterLogo = styled.img`
    width: 5%;
    width: 9vh;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 7vh;
    }
`
const BulletLine = styled('div')<{bulletPos?:string,white?:boolean}>`
    width: 83%;
    height: 1.2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1vh;
    margin-top: 3.5vh;
    ${props => props.bulletPos == 'left' ?
    `
            &:before {
                content: '';
                display: inline-block;
                width: 1.4vh !important;
                height: 1.4vh !important;
                border-radius: 50%;
                background-color: ${props.white ? '#fff' : '#000'};
            }
            &:after {
                content: '';
                display: inline-block;
                width: 100%;
                height: 0.15vh;
                background-color: ${props.white ? '#fff' : '#000'};
                margin: 0 1vh;
            }               
        ` :
    `
            &:before {
                content: '';
                display: inline-block;
                width: 100%;
                height: 0.15vh;
                background-color: ${props.white ? '#fff' : '#000'};
                margin: 0 1vh;
            }
            &:after {
                content: '';
                display: inline-block;
                width: 1.4vh;
                height: 1.4vh;
                border-radius: 50%;
                background-color: ${props.white ? '#fff' : '#000'};
            }        
        `
};
    @media (max-width: ${props => Breakpoint.md}) {
        ${props => props.bulletPos == 'left' ?
    `
                &:before {
                width: 1vh !important;
                height: 1vh !important;
                }
            ` :
    `
                &:after {
                width: 1vh !important;
                height: 1vh !important;
                }                       
            `
}
    }
    
`
