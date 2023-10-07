import React, {useRef} from 'react';
import OwlCarousel from "react-owl-carousel";
import logoDoxxSmallWhite from "../assets/images/doxx-logo-small-white.svg";
import ScrollArrow from "../components/ScrollArrow";
import styled, {keyframes} from "styled-components";
import {Breakpoint} from "../constants";
import imagePeasants from "../assets/images/gallery/peasants.gif";
import imageNobles from "../assets/images/gallery/nobles.gif";
import imagePharaoh from "../assets/images/gallery/pharaoh.gif";
import imageKalpha from "../assets/images/gallery/kalpha.gif";
import imageMetaverse from "../assets/images/gallery/metaverse.gif";
import imageNftArt from "../assets/images/gallery/nft-art.gif";
import imageNftStudio from "../assets/images/gallery/nft-studio.gif";
import {isMobile} from "../Helper";
import {REACT_APP_IMAGE_HOST} from "../config";

const gallery = [
    {title: 'pnp: peasants', image: '4e0f39d5-47a2-4466-8a24-01d5b9e4338d/'},
    {title: 'pnp: nobles', image: '824b3765-3c7f-46f7-9382-151ec20e15c8/'},
    {title: 'pnp: pharaohs', image: '9ccf6715-79e7-492f-a0ea-cc040c4e3ed4/'},
    {title: 'kalpha: aliens', image: 'e5d9a8b3-8cdc-4a51-8e3e-6067bee3543b/'},
    {title: 'metaverse: hutong china', image: '40c6a43c-51b1-4a06-a04a-fe538aeb5cf3/'},
    {title: 'bigfoot town', image: 'e9efa097-d327-4a2c-b9a8-f4969db38f75/'},
    {title: 'metaverse: the supermarket', image: 'd51c7f56-746e-488e-98eb-e38f1555631e/'},
]

export default function Gallery({singleItem}:any) {

    const refGalleryProjectTitleWrap = useRef<(HTMLDivElement | null)[]>([]);
    const refGalleryProjectTitle = useRef<(HTMLSpanElement | null)[]>([]);

    function handleRedirectToMain() {
        window.location.reload();
    }

    return (
        <Container>
            <GalleryHeader>Gallery</GalleryHeader>
            <CarouselWrap>
                {/*
                            <div className="owl-carousel">
                                {
                                    gallery.map((item, i) => {
                                        return (
                                            <Gallery  key={i}>
                                                <GalleryImage>
                                                    <img src={item.image}/>
                                                </GalleryImage>
                                                <ProjectTitle>{item.title}</ProjectTitle>
                                            </Gallery>
                                        )
                                    })
                                }
                            </div>
*/}
                <OwlCarousel loop={true} autoplay={true} autoplayTimeout={5000} smartSpeed={1000} items={(singleItem || isMobile.any()) ? 1 : 4}>
                    {
                        gallery.map((item, i) => {
                            return (
                                <GalleryItem key={`galleryimage-${i}`} >
                                    <GalleryImageWrap className="gallery-image">
                                        {/*<GalleryImage src={item.image}/>*/}
                                        <GalleryImage src={`${REACT_APP_IMAGE_HOST}/${item.image}`}/>
                                    </GalleryImageWrap>
                                    <ProjectTitleWrap ref={el => refGalleryProjectTitleWrap.current[i] = el}>
                                        <ProjectTitle ref={el => refGalleryProjectTitle.current[i] = el}>
                                            {item.title}
                                        </ProjectTitle>
                                    </ProjectTitleWrap>
                                </GalleryItem>
                            )
                        })
                    }
                </OwlCarousel>
            </CarouselWrap>
            <PageFooter>
                <ContactUsWhite href="mailto:hello@do-xx.com">contact us</ContactUsWhite>
                <BulletLine bulletPos="left" white/>
                <GalleryFooterLogo src={logoDoxxSmallWhite} onClick={handleRedirectToMain} style={{marginRight:'2vw'}}/>
                {/*<ScrollArrowUpDown src={imageScrollArrowUpDownWhite} style={{marginRight:'1vw'}}/>*/}
                <ScrollArrow white pageNum={5}/>
            </PageFooter>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000;
`
const GalleryHeader = styled.div`
    font-family: syncopate-bold;
    font-size: 5vh;
    color: #fff;
    padding-top: 6vh;
    padding-bottom: 4vh;
    padding-left: 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 4vh;        
        padding-top: 6vh;
        padding-bottom: 4vh;
    }
`
const CarouselWrap = styled.div`
    width: 100%;
    padding: 0 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${props => Breakpoint.md}) {
        padding: 0 5vw;
    }
    @media (max-width: ${props => Breakpoint.md2}) {
        padding: 0;
    }
`
const GalleryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
    }
    width: auto;
    height: auto;
`
const GalleryImage__ = styled.div`
    width: 100%;
    height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 48vh;
        height: 48vh;
    }
    @media (max-width: ${props => Breakpoint.md2}) {
        width: 100%;
        height: 50vh;
    }
`
const GalleryImageWrap_ORIG = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const GalleryImageWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${props => Breakpoint.md}) {
        height: auto;
    }
    height: 50vh;
`
const GalleryImage = styled.img`
    @media (max-width: ${props => Breakpoint.md}) {
        width: 70vh !important;
    }
    @media (max-width: ${props => Breakpoint.md2}) {
        width: 100% !important;
    }
`
const ProjectTitleWrap = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 70vh;
    }    
    @media (max-width: ${props => Breakpoint.md2}) {
        width: 95%;
    }
`
const ProjectTitle = styled.span`
    font-family: syncopate-regular;
    font-size: 2vw;
    color: #fff;
    mix-blend-mode: difference;    
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 2.5vh;
        margin-top: 2vh;
        width: 70vh;
    }    
    // white-space: nowrap;
    &.slide {
        animation: ${props => slideshowToLeft} 3s linear infinite;
    }
    @media (max-height: 850px) {
        margin-top: 3vh;
        font-size: 3vh;
    }    
`
const slideshowToLeft = keyframes`
    0%{transform: translateX(0);}
    100%{transform: translateX(-100%);}
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
