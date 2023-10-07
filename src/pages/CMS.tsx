import React, {useState} from 'react';
import styled from "styled-components";
import logoDoxxSmallWhite from "../assets/images/doxx-logo-small-white.svg";
import XCloseIcon from '../assets/images/close-x.svg';
import ScrollArrow from "../components/ScrollArrow";
import {Breakpoint} from "../constants";
import {DoText} from "../Styles";
import DesktopImage from '../assets/images/cms/desktop.png';
import $ from "jquery";
import {useModalContext} from "../hooks/ModalContext";
import ActivityIndicator from "../components/ActivityIndicator";

export default function CMS() {

    // @ts-ignore
    const {setOpen,setModalChildren} = useModalContext();

    function handleRedirectToMain() {
        window.location.reload();
    }

    function handleLearnMoreClick() {
        setModalChildren(<ModalContainer close={() => setOpen(false)}/>);
        setOpen(true);
    }


    return (
        <Container>
            <Content>
                <Left>
                    <Col>
                        <Col marginBottom={1}>
                            <Text color="#ffffff" size={2.1} letterspacing={0.02} normal>Introducing</Text>
                        </Col>
                        <Col marginBottom={1}>
                            <Text color="#ffffff">Content</Text>
                            <Text color="#ffffff">Management</Text>
                            <Text color="#ffffff">System</Text>
                        </Col>
                        <Col marginBottom={3}>
                            <Text color="#ffffff" size={1.2} letterspacing={0.02} lineHeight={1}>Cloud-based Content</Text>
                            <Text color="#ffffff" size={1.2} letterspacing={0.02} lineHeight={1}>Management Application to</Text>
                            <Text color="#ffffff" size={1.2} letterspacing={0.02} lineHeight={1}>Unlock unlimited possibilities</Text>
                        </Col>
                        <Col>
                            <LearnMoreButton onClick={handleLearnMoreClick}/>
                        </Col>
                    </Col>
                </Left>
                <Right>
                    <ImageDesktop src={DesktopImage} />
                </Right>
            </Content>
            <PageFooter>
                <ContactUsWhite href="mailto:hello@do-xx.com">contact us</ContactUsWhite>
                <BulletLine bulletPos="left" white/>
                <GalleryFooterLogo src={logoDoxxSmallWhite} onClick={handleRedirectToMain} style={{marginRight:'2vw'}}/>
                <ScrollArrow white pageNum={7}/>
            </PageFooter>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(249.27deg, #5500C0 0%, #5500C0 100%);
    justify-content: center;
    @media (max-width: ${props => Breakpoint.md}) {
        justify-content: flex-start;
    }
`
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding 0 3vw;
    margin-bottom: 10vh;
    @media (max-width: ${props => Breakpoint.md}) {
        flex-direction: column;
        padding-top: 5vh;
    }
`
const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        align-items: center;
        margin-bottom: 5vh;
    }
    
`
const Right = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: ${props => Breakpoint.md}) {
        justify-content: center;
    }
`
const Col = styled('div')<{marginBottom?:number}>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.marginBottom}vh;
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
const GalleryFooterLogo = styled.img`
    width: 9vh;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 7vh;
    }
    z-index: 10;
`
const Text = styled('span')<{color?:string,size?:number,letterspacing?:number,normal?:boolean,lineHeight?:number}>`
    font-family: ${props => props.normal ? 'syncopate-regular' : 'syncopate-bold'};
    font-size: ${props => props.size || 4.2}vw;
    color: ${props => props.color || '#000'};
    line-height: ${props => props.lineHeight || 0.9};
    letter-spacing: ${props => props.letterspacing || -0.3}rem;
    word-wrap: break-word;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: ${props => (props.size ? props.size * 1.2 : 0) || 5}vh;
        line-height: 1; 
    }    
`
const LearnMoreButton = styled.div`
    width: 15vw;
    height: 4.5vw;
    background-color: #A5E5E7;
    border-radius: 4.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:after {
        content: 'Learn More';
        font-family: syncopate-bold;
        font-size: ${props => 5 * 0.25}vw;
        color: #000000;
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
const ImageDesktop = styled.img`
    height: 22vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none;
    @media (max-width: ${props => Breakpoint.md}) {
        height: auto;
        width: 80vw; 
    }    
    @media (max-width: ${props => Breakpoint.md2}) {
        height: auto;
        width: 90vw; 
    }    
`
const ModalContainer = ({close}:any) => {

    const [downloading, setDownloading] = useState(false);

    async function handleDownload(fileUrl:string) {
        setDownloading(true);
        // await new Promise((resolve) => setTimeout(resolve, 5000))
        fetch(fileUrl).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'DO-XX_Activation_deck-1.pdf';
                alink.click();
                setDownloading(false);
            })
        })
    }

    return (
        <ModalContainerInner>
            <ModalBox>
                {
                    downloading && (
                      <DownloadingIndicator>
                          <ActivityIndicator height={3} color={'#ffffff'}/>
                          <Text size={0.5} color={'#ffffff'} letterspacing={0.01}  style={{marginTop:'0.5rem'}}>downloading... please wait...</Text>
                      </DownloadingIndicator>
                    )
                }
                <CloseButton onClick={() => close()} />
                <ContentBox paddingLeft={4}>
                    <Col marginBottom={1}>
                        <Text size={1.6} color="#ffffff" letterspacing={0.01}>For Retails</Text>
                    </Col>
                    <Col marginBottom={4}>
                        <Text size={0.7} color="#ffffff" letterspacing={0.01} style={{fontFamily:'poppins-light',fontStyle:'italic'}}>Retail shops, food chains, offices</Text>
                    </Col>
                    <Col>
                        <DocImage src={require('../assets/images/cms/dl-retails-doc.svg').default}/>
                    </Col>
                    <Col>
                        <DownloadDeckButton onClick={() => handleDownload('/downloads/DO-XX_Activation_deck-1.pdf')}/>
                    </Col>
                </ContentBox>
                <ContentBox paddingRight={4}>
                    <Col marginBottom={1}>
                        <Text size={1.6} color="#ffffff" letterspacing={0.01}>For Events</Text>
                    </Col>
                    <Col marginBottom={4}>
                        <Text size={0.7} color="#ffffff" letterspacing={0.01} style={{fontFamily:'poppins-light',fontStyle:'italic'}}>Galleries, exhibitions & seminars</Text>
                    </Col>
                    <Col>
                        <DocImage src={require('../assets/images/cms/dl-events-doc.svg').default}/>
                    </Col>
                    <Col>
                        <DownloadDeckButton onClick={() => handleDownload('/downloads/DO-XX_Retail.pdf')}/>
                    </Col>
                </ContentBox>
            </ModalBox>
        </ModalContainerInner>
    )
}
const ModalContainerInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${props => Breakpoint.md}) {
        padding: 0 2vw;
    }    
`
const ModalBox = styled.div`
    position: relative;
    width: 55rem;
    height: 60vh;
    border-radius: 0.8rem;
    background-color: #3F3F3F;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
    }    
    @media (max-width: ${props => Breakpoint.md2}) {
        flex-direction: column;
        height: 65vh;
    }    
`
const ContentBox = styled('div')<{ paddingLeft?: number, paddingRight?: number }>`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: ${props => props.paddingLeft}rem;
    padding-right: ${props => props.paddingRight}rem;
    @media (max-width: ${props => Breakpoint.md2}) {
        width: 100%;
        height: 50%;
        padding-left: 0;
        padding-right: 0;
    }    
`
const CloseButton = styled.div`
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url(${props => XCloseIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: 2.5%;
    right: 2%;        
    cursor: pointer;
`
const DocImage = styled.img`
    height: 9vw;
    @media (max-width: ${props => Breakpoint.md2}) {
        height: 7rem;
        margin-top: -1rem;
    }    
`
const DownloadDeckButton = styled.div`
    padding: 1vw 1.5vw;
    border: 0.1vw solid #A5E5E7;
    border-radius: 2vw;
    margin-top: 2rem;
    cursor: pointer;
    &:after {
        content: 'Download Deck';
        font-family: syncopate-bold;
        font-size: 0.8vw;
        color: #A5E5E7;
    }
    @media (max-width: ${props => Breakpoint.md2}) {
        &:after {
            font-size: 0.8rem;
        }
        padding: 1rem 1.5rem;
        border-radius: 2rem;
        margin-top: 1rem;
    }    
`
const DownloadingIndicator = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
`