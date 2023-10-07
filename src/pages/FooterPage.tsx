import React, {useEffect} from 'react';
import ScrollArrow from "../components/ScrollArrow";
import styled from "styled-components";
import {Breakpoint} from "../constants";
import {createRoot} from "react-dom/client";
import TermsModal from "../components/TermsModal";
import {gsap} from "gsap";

const brands = [
    {name: "", image: require("../assets/images/brands/metajam.png").default},
    {name: "", image: require("../assets/images/brands/sankranti.png").default},
    {name: "", image: require("../assets/images/brands/lacoffee.png").default},
    {name: "", image: require("../assets/images/brands/roastedstory.png").default},
    {name: "", image: require("../assets/images/brands/man.png").default},
    {name: "", image: require("../assets/images/brands/myfirst.png").default},
    {name: "", image: require("../assets/images/brands/nanyang.png").default},
    {name: "", image: require("../assets/images/brands/baker.png").default},
    {name: "", image: require("../assets/images/brands/pacifictime.png").default},
    {name: "", image: require("../assets/images/brands/botanica.png").default},
    {name: "", image: require("../assets/images/brands/barouv.png").default},
    {name: "", image: require("../assets/images/brands/culture_cartel.png").default},
    {name: "", image: require("../assets/images/brands/seletar_country_club.png").default},
    {name: "", image: require("../assets/images/brands/fireblocks.png").default},
    {name: "", image: require("../assets/images/brands/coinhako.png").default},
    {name: "", image: require("../assets/images/brands/zestclinic.png").default},
    {name: "", image: require("../assets/images/brands/mirl.png").default},
    {name: "", image: require("../assets/images/brands/fay_rilsa.png").default},
    {name: "", image: require("../assets/images/brands/nuodle.png").default},
]

export default function FooterPage({showTerms}:any) {

    function handleContactUsClick() {
        window.location.assign("mailto:hello@do-xx.com");
    }

    function handleTelegramClick() {
        window.open("https://t.me/v_eth", "_blank");
    }

    function handleTermsClick() {
        if (showTerms) {
            showTerms();
        }
    }

    useEffect(() => {
        const boxWidth = 200,
            totalWidth = boxWidth * brands.length,  //  * n of boxes
            elBrandImageWrap = document.querySelectorAll(".brand-image-wrap"),
            dirFromLeft = "+=" + totalWidth,
            dirFromRight = "-=" + totalWidth;

        const mod = gsap.utils.wrap(0, totalWidth);

        gsap.set(elBrandImageWrap, {
            x:function(i) {
                return i * boxWidth;
            }
        });
        gsap.timeline()
            .to(elBrandImageWrap,  {
                x: dirFromRight,
                modifiers: {
                    x: x => mod(parseFloat(x)) + "px"
                },
                duration:25, ease:'none',
                repeat:-1,
            });
    }, [])


    return (
        <Container>
            <Header>Partners</Header>
            <Content>
                <BrandsSection>
                    <BrandsScrolling>
                        {
                            brands.map((brand, i) => {
                                return (
                                    <BrandImageWrap className="brand-image-wrap" key={`brand-${i}`}>
                                        <BrandImage src={brand.image} />
                                    </BrandImageWrap>
                                )
                            })
                        }

                    </BrandsScrolling>
                </BrandsSection>

                <ContentDesc>
                    <MainFooterTextWrap>
                        <MainFooterText color={'#5500C0'}>We&nbsp;<MainFooterText>Discuss &bull; Talk &bull; Listen &bull;</MainFooterText></MainFooterText>
                        <MainFooterText>Collaborate &bull; Partner &bull; Hire</MainFooterText>
                        <MainFooterText color={'#5500C0'}>Do You?</MainFooterText>
                    </MainFooterTextWrap>
                    <MainFooterTextWrapMobile>
                        <MainFooterText color={'#5500C0'}>We&nbsp;<MainFooterText>Discuss &bull; </MainFooterText></MainFooterText>
                        <MainFooterText>Talk &bull; Listen &bull;</MainFooterText>
                        <MainFooterText>Collaborate &bull; </MainFooterText>
                        <MainFooterText>Partner &bull; Hire</MainFooterText>
                        <MainFooterText color={'#5500C0'}>Do You?</MainFooterText>
                    </MainFooterTextWrapMobile>
                    <ButtonGroup>
                        <ContactUsButton onClick={handleContactUsClick}/>&nbsp;
                        <SmallButton src={require('../assets/images/twitter.svg').default} bgColor={'#72D4FF'}/>&nbsp;
                        <SmallButton src={require('../assets/images/telegram.svg').default} bgColor={'#0383C1'} onClick={handleTelegramClick}/>
                    </ButtonGroup>
                    <ButtonGroupMobile>
                        <ContactUsButton onClick={handleContactUsClick}/>
                        <div style={{display:'flex',justifyContent:'space-between',margin:'1vh 0',width:'28vh'}}>
                            <SmallButton src={require('../assets/images/twitter.svg').default} bgColor={'#72D4FF'}/>
                            <SmallButton src={require('../assets/images/telegram.svg').default} bgColor={'#0383C1'} onClick={handleTelegramClick}/>
                        </div>
                    </ButtonGroupMobile>

                    <Bottom>
                        <MainFooter>
                            <MainFooterTM>2022 DO-XX Studio Ltd.</MainFooterTM>
                            <MainFooterBulletLine/>
                            <PressTermWrap>
                                <MainFooterPressTerms>Press</MainFooterPressTerms>
                                <MainFooterPressTerms style={{marginRight:'2vw'}} onClick={handleTermsClick}>Terms</MainFooterPressTerms>
                            </PressTermWrap>
                            <div style={{marginRight:'2vw'}}>
                                <ScrollArrow arrowDownHidden pageNum={9}/>
                            </div>
                        </MainFooter>
                        <PressTermWrapMobile>
                            <MainFooterPressTerms>Press</MainFooterPressTerms>
                            <MainFooterPressTerms onClick={handleTermsClick}>Terms</MainFooterPressTerms>
                        </PressTermWrapMobile>
                    </Bottom>
                </ContentDesc>
            </Content>
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const MainFooterTextWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    padding-left: 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        display: none;
    }
`
const MainFooterTextWrapMobile = styled.div`
    width: 100%;
    display: none;
    flex-direction: column;
    padding-top: 12vw;
    padding-left: 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;
    }
`
const MainFooterText = styled('span')<{color?:string}>`
    font-family: syncopate-bold;
    font-size: 3.6vw;
    color: ${props => props.color || '#000'};
    letter-spacing: -0.2vw; 
    line-height: 1;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 4.3vh;    
    }
`

const Bottom = styled.div`
    width: 100%;
    position: absolute;
    bottom: 3vh;
    padding 0 0 0 3vw;
`
const MainFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;    
    align-items: center;
`
const MainFooterTM = styled.span`
    font-family: syncopate-bold;
    font-size: 2.3vh;
    color: #000;
    white-space: nowrap;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 1.6vh;        
    }
`
const MainFooterBulletLine = styled.div`
    width: 100%;
    height: 1.2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1vw;
    &:before {
        content: '';
        display: inline-block;
        width: 1.4vh !important;
        height: 1.4vh !important;
        border-radius: 50%;
        background-color: #000;
    }
    &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 0.15vh;
        background-color: #000;
        margin: 0 1vh;
    }               
};
    
`
const ButtonGroup = styled.div`
    width: 100%;
    height: 19vw;
    padding-top: 1.5vw;
    padding-left: 3vw;
    display: flex;
    flex-direction: row;
    @media (max-width: ${props => Breakpoint.md}) {
        display: none;
    }
`
const ButtonGroupMobile = styled.div`
    width: 24vh;
    display: none;
    flex-direction: column;
    padding-left: 3vw;
    margin-top: 2vh;
    margin-bottom: 14vh;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;
    }

`
const ContactUsButton = styled.div`
    width: 20vw;
    height: 4.5vw;
    background-color: #5500C0;
    border-radius: 4.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:after {
        content: 'contact us';
        font-family: syncopate-bold;
        font-size: ${props => 5 * 0.25}vw;
        color: #fff;
        line-height: 0.9;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 28vh;
        height: 7.3vh;
        border-radius: 7.3vh;
        &:after {
            font-size: ${props => 5.3 * 0.4}vh;
        }
    }
`
const SmallButton = styled('div')<{src?:string,bgColor?:string}>`
    width: 7vw;
    height: 4.5vw;
    background-color: ${props => props.bgColor};
    border-radius: 4.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:after {
        content: '';
        display: inline-block;
        width: 4.5vw;
        height: 4.5vw;
        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: center;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 13vh;
        height: 7.3vh;
        border-radius: 7.3vh;
        &:after {
            width: 7.3vh;
            height: 7.3vh;        
            background-size: 45%;
        }
    }
`
const PressTermWrap = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: ${props => Breakpoint.md}) {
        display: none;
    }
`
const PressTermWrapMobile = styled.div`
    width: 100%;
    display: none;
    justify-content: space-between;
    // padding-left: 3vh;
    padding-right: 3vh;
    // padding-bottom: 3vh;
    margin-top: 3vh;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;
        padding-left: 0;
    }
`
const MainFooterPressTerms = styled.span`
    font-family: syncopate-bold;
    font-size: 2.3vh;
    text-decoration: underline;
    margin-left: 2.5vw;    
    white-space: nowrap;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 2.1vh;
        margin: 0;    
    }
`

const Header = styled.div`
    font-family: syncopate-bold;
    font-size: 5vh;
    color: #000000;
    width: 100%;
    height: 17%;
    padding-left: 3vw;
    display: flex;
    align-items: center;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 4vh;        
        height: 13%;
    }
`
const Content = styled.div`
    width: 100%;
    height: 83%;
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        // flex-direction: column;
        height: 87%;
    }        
`
const ContentDesc = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, ${props => '#E73C7E'}, ${props => '#ffffff'});
    background-size: 10% 400%;      
`
const BrandsSection = styled.div`
    position: relative;
    width: 100%;
    height: ${props => window.innerHeight * (16/100)}px; 
    display: flex;
    align-items: center;
    justify-content: center;
`
const BrandsScrolling = styled.div`
    position: relative;
    width: 100vw;
    // height: auto;
    height: 8vh;
    // height: ${props => window.innerHeight - (100 - 8)}%; 
    height: ${props => window.innerHeight * (8/100)}px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    left: -10rem;
`
const BrandImageWrap = styled.div`
    width: 14vh;
    // height: 8vh;
    height: ${props => window.innerHeight * (8/100)}px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4vh;
    @media (max-width: ${props => Breakpoint.md}) {
        height: 4vh;       
    }
    position: absolute;
`
const BrandImage = styled('div')<{src?:string}>`
    width: 100%;
    height: 100%;
    display: flex;
    &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;    
    }
`
