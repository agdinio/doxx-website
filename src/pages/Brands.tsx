import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from "styled-components";
import {Breakpoint, BreakpointInPx} from "../constants";
import OwlCarousel from "react-owl-carousel";
import ScrollArrow from "../components/ScrollArrow";
import $ from "jquery";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
]
const events = [
    {id:1,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/1.png').default, transformOrigin: 'top'},
    {id:2,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/2.png').default, transformOrigin: 'top right'},
    {id:3,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/3.png').default, transformOrigin: 'bottom left'},
    {id:4,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/4.png').default, transformOrigin: 'bottom'},
    {id:5,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/5.png').default, transformOrigin: 'bottom'},
    {id:6,title:'MetaJam Asia 2022: NFT Singapore',desc:'Singapore’s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',date:'June-July 2022',image: require('../assets/images/events/6.png').default, transformOrigin: 'bottom right'},
]

export default function Brands(props:any) {
    const refCarouselEvent = useRef(null);
    const refEventModalCarousel = useRef(null);
    const refEvenImageModalTitle = useRef(null);
    const refEvenImageModalDate = useRef(null);
    const refEventImageModalCounter = useRef(null);
    const refEvenImageModalDesc = useRef(null);
    // const [breakpoint, setBreakpoint] = useState('');
    const breakpoint = props.breakpoint;

    function handleEventCarouselPrevClick() {
        if (refCarouselEvent.current) {
            // @ts-ignore
            refCarouselEvent.current.prev(1000);
        }
    }

    function handleEventCarouselNextClick() {
        if (refCarouselEvent.current) {
            // @ts-ignore
            refCarouselEvent.current.next(1000);
        }
    }

    function handleEventModalCarouselClick(direction:number) {
        if (direction === 0) {
            if (refEventModalCarousel.current) {
                // @ts-ignore
                refEventModalCarousel.current.prev(1000);
            }
        } else {
            if (refEventModalCarousel.current) {
                // @ts-ignore
                refEventModalCarousel.current.next(1000);
            }
        }
    }

    function eventImageClick(selectedIndex:number) {
        showModal();

        if (refEventModalCarousel.current) {
            // @ts-ignore
            refEventModalCarousel.current.to(selectedIndex - 1, 500);
        }
    }

    function showModal() {
        $("#event-modal-container").fadeIn('fast');
    }
    function hideModal() {
        $("#event-modal-container").fadeOut('fast');
    }

    async function modalEventCounter(event:any) {
        if (!event.namespace) {
            return;
        }
        const slides = await event.relatedTarget;
        const _slide = slides.relative(slides.current()) + 1 + '/' + slides.items().length;

        const eventObj = await events[slides.relative(slides.current())];
        if (eventObj) {
            if (refEvenImageModalTitle.current) {
                // @ts-ignore
                refEvenImageModalTitle.current.innerHTML = eventObj.title;
            }
            if (refEvenImageModalDate.current) {
                // @ts-ignore
                refEvenImageModalDate.current.innerHTML = eventObj.date;
            }
            if (refEventImageModalCounter.current) {
                // @ts-ignore
                refEventImageModalCounter.current.innerHTML = slides.relative(slides.current()) + 1 + '/' + slides.items().length;
            }
            if (refEvenImageModalDesc.current) {
                // @ts-ignore
                refEvenImageModalDesc.current.innerHTML = eventObj.desc;
            }
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

    useEffect(() => {
        hideModal();
    }, [props.closeModal])

    return (
        <Container id="brands-container">
                <EventModalContainer className="delModal" id="event-modal-container">
                    <EventModalContainerInner>
                        <EventModalImageCloseButton onClick={() => hideModal()}/>
                        <EventModalImagePrevButton onClick={() => handleEventModalCarouselClick(0)}/>
                        <EventModalDescPanel paddingBottom={2} bottom>
                            <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <EventImageDesc ref={refEvenImageModalTitle}/>
                                    <EventImageDesc ref={refEvenImageModalDate}/>
                                </div>
                                <EventImageDesc ref={refEventImageModalCounter}/>
                            </div>
                        </EventModalDescPanel>
                        <CarouselEventModalPanel>
                                <OwlCarousel
                                ref={refEventModalCarousel}
                                loop={true}
                                dots={false} items={1}
                                onInitialized={modalEventCounter}
                                onChanged={modalEventCounter}
                            >
                                {
                                    events.map((event, i) => {
                                        return (
                                            <EventModalImageWithDescription key={i}>
                                                <EventModalImage src={event.image}/>
                                            </EventModalImageWithDescription>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </CarouselEventModalPanel>
                        <EventModalDescPanel paddingTop={2}>
                            <EventImageDesc ref={refEvenImageModalDesc}/>
                        </EventModalDescPanel>
                        <EventModalImageNextButton onClick={() => handleEventModalCarouselClick(1)}/>
                    </EventModalContainerInner>
                </EventModalContainer>
            <Header>
                <HeaderTextBig>Brands</HeaderTextBig>
                <HeaderTextSmall>Some of our trusted clients</HeaderTextSmall>
            </Header>
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

{/*
                <OwlCarousel
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={5000}
                    smartSpeed={1000}
                    items={breakpoint === 'md' ? 4 : breakpoint === 'md2' ? 3 : breakpoint === 'sm' ? 2 : 9}
                    dots={false}
                >
                    {
                        brands.map((brand, i) => {
                            return (
                                <BrandImageWrap key={`brand-${i}`}>
                                    <BrandImage src={brand.image} />
                                </BrandImageWrap>
                            )
                        })
                    }
                </OwlCarousel>
*/}

            </BrandsSection>

            <EventsSection>
                <ContentEventsGrid>
                    <ContentEventRow>
                        <Center>
                            <EventHeader>
                                <EventHeaderText size={5}>Events</EventHeaderText>
                                <EventHeaderText font={'syncopate-regular'} size={1.6} marginTop={1.5} style={{opacity:0.8}}>Latest event:</EventHeaderText>
                                <EventHeaderText size={2.8} marginTop={1}>Metajam Asia 2022:</EventHeaderText>
                                <EventHeaderText size={2.8}>NFT Singapore</EventHeaderText>
                                {
                                    (breakpoint && 'md,md2,sm'.indexOf(breakpoint) > -1) ? null : (
                                    <div style={{display:'flex',justifyContent:'flex-start',marginTop:'2vh'}}>
                                    <ScrollArrow pageNum={7}/>
                                    </div>
                                    )
                                }
                            </EventHeader>
                        </Center>
                    </ContentEventRow>
                    {
                        (breakpoint && 'md,md2,sm'.indexOf(breakpoint) > -1) ? (
                            <CarouselEventWrap>
                                <OwlCarousel loop={true} autoplay={true} autoplayTimeout={5000} smartSpeed={1000} items={1}>
                                    {
                                        events.map((event, i) => {
                                            return (
                                                <ContentEventsCell>
                                                    <EventImageMobile src={event.image}/>
                                                </ContentEventsCell>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </CarouselEventWrap>
                        ) : (
                            <>
                                <ContentEventRow>
                                    <EventImage src={events[0].image} transformOrigin={events[0].transformOrigin} onClick={() => eventImageClick(events[0].id)}/>
                                    <EventImage src={events[1].image} transformOrigin={events[1].transformOrigin} onClick={() => eventImageClick(events[1].id)}/>
                                </ContentEventRow>
                                <ContentEventRow>
                                    <EventImage src={events[2].image} transformOrigin={events[2].transformOrigin} onClick={() => eventImageClick(events[2].id)}/>
                                    <EventImage src={events[3].image} transformOrigin={events[3].transformOrigin} onClick={() => eventImageClick(events[3].id)}/>
                                </ContentEventRow>
                                <ContentEventRow>
                                    <EventImage src={events[4].image} transformOrigin={events[4].transformOrigin} onClick={() => eventImageClick(events[4].id)}/>
                                    <EventImage src={events[5].image} transformOrigin={events[5].transformOrigin} onClick={() => eventImageClick(events[5].id)}/>
                                </ContentEventRow>
                            </>
                        )
                    }
                </ContentEventsGrid>
                <ContentEventsMore>
                    <ContentEventsMoreLeft>
                        <ContentEventsMoreLeftWrap>
                            {
                                (breakpoint && 'md,md2,sm'.indexOf(breakpoint) > -1) ? null : (
                                    <>
                                        <CEMText>More</CEMText>
                                        <CEMText>events</CEMText>
                                    </>
                                )
                            }
                            <CEMArrow src={require('../assets/images/events/arrow-right-long.svg').default} />
                        </ContentEventsMoreLeftWrap>
                    </ContentEventsMoreLeft>
                    <ContentEventsMoreRight>

                        <EventCarouselPrevButton onClick={handleEventCarouselPrevClick}/>
                        <OwlCarousel
                            loop={true}
                            autoplay={true}
                            autoplayTimeout={5000}
                            smartSpeed={1000}
                            items={breakpoint === 'md' ? 4 : breakpoint === 'md2' ? 3 : breakpoint === 'sm' ? 2 : 5}
                            ref={refCarouselEvent}
                            dots={false}
                        >
                            {
                                events.map((event, i) => {
                                    return (
                                        <EventCarouselImageWrap key={`eventcarouselimagewrap${i}`}>
                                            <EventCarouselImage src={event.image}/>
                                            <Cover bg={i % 2 === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(204,204,204,0.9)'}>
                                                <CoverText font={'syncopate-bold'} size={1.5}>Event name</CoverText>
                                                <CoverText font={'syncopate-regular'} size={1}>event date</CoverText>
                                                <CoverText font={'syncopate-bold'} size={1.5}>Coming soon</CoverText>
                                            </Cover>
                                        </EventCarouselImageWrap>
                                    )
                                })
                            }
                        </OwlCarousel>
                        <EventCarouselNextButton onClick={handleEventCarouselNextClick}/>

                    </ContentEventsMoreRight>

                </ContentEventsMore>
            </EventsSection>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
const Header = styled.div`
    height: 12vh;
    color: #fff;
    margin: 0 3vw;
    @media (max-width: ${props => Breakpoint.md2}) {
        font-size: 4vh;        
        padding-top: 6vh;
        padding-bottom: 4vh;
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 2vh;
    border-bottom: 0.05vw solid #5500C0;    
`

const HeaderTextBig = styled.span`
    font-family: syncopate-bold;
    font-size: 5vh;
    color: #5500C0;
    height: 4vh;
    line-height: 0.9;
`
const HeaderTextSmall = styled.span`
    font-family: syncopate-bold;
    font-size: 1.5vh;
    color: #5500C0;
`

const BrandsSection = styled.div`
    position: relative;
    width: 100vw;
    height: 16vh; 
    display: flex;
    align-items: center;
    justify-content: center;
`
const BrandsScrolling = styled.div`
    position: relative;
    width: 100vw;
    // height: auto;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: -10rem;
`
const BrandImageWrap = styled.div`
    width: 14vh;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4vh;
    @media (max-width: ${props => Breakpoint.md}) {
        // height: 4vh;       
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


/*------------------------------------------------------------*/
const EventHeader = styled.div`
    @media (max-width: ${props => Breakpoint.md}) {
        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-left: 3vw;    
    }
    position: relative;
    display: flex;
    flex-direction: column;
`
const EventHeaderText = styled('div')<{font?:string,size?:number,marginTop?:number}>`
    font-family: ${props => props.font || 'syncopate-bold'};
    font-size: ${props => props.size}vh;
    color: #000;
    margin-top: ${props => props.marginTop || 0}vh;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: ${props => (props.size || 1) * 0.7}vh;        
    }       
`
const ContentEventRow = styled.div`
    width: 100%;
    height: 29vh;
    display: flex;
    flex-direction: row;
    @media (max-width: ${props => Breakpoint.md}) {
        height: auto;
    }       
`
const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 3vw;
`
const EventImage = styled('div')<{src?:string,transformOrigin?:string,noTransform?:boolean}>`
    width: 25vw;
    height: 100%;
    display: inline-block;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
    filter: grayscale(1);
    &:hover {
        transform: scale(${props => props.noTransform ? 1 : 1.2});
        transform-origin: ${props => props.transformOrigin};
        filter: grayscale(0);
        z-index: 100;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
        height: 100%;
    }    
`

/*------------------------------------------------------------*/
const EventsSection = styled.div`
    width: 100%;
    height: 72vh;
    background-color: #F7E0D7; 
`
const ContentEventsGrid = styled.div`
    width: 100%;
    // height: 80%;
    height: 58vh;
    display: grid;
    grid-template-columns: auto auto;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;
        flex-direction: column;
    }    
`
const ContentEventsMore = styled.div`
    width: 100%;
    // height: 20%;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: ${props => Breakpoint.md}) {
    }        
`
const ContentEventsMoreLeft = styled.div`
    width: 18vw;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentEventsMoreLeftWrap = styled.div`
    display: flex;
    flex-direction: column;
`
const CEMText = styled.span`
    font-family: syncopate-bold;
    font-size: 2.5vh;
    color: #fff;
`
const CEMArrow = styled.img`
    width: 60%;
    margin-top: 2vh;
`
const ContentEventsMoreRight = styled.div`
    position: relative;
    width: 82vw;
    height: 100%;
    display: flex;
`
const EventCarouselImageWrap = styled.div`
    position: relative;
    width: 16.4vw;
    height: 14.4vh;
    background: red;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
    }    
`
const EventCarouselImage = styled('div')<{src?:string}>`
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
`
const Cover = styled('div')<{bg?:string}>`
    position: absolute;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;        
    padding-left: 10%;
    background-color: ${props => props.bg};
`
const CoverText = styled('span')<{font?:string,size?:number}>`
    font-family: ${props => props.font || 'syncopate-bold'};
    font-size: ${props => props.size || 1}vh;
`

const EventCarouselPrevButton = styled.div`
    width: 3vh;
    height: 3vh;
    border-radius: 1vh;
    background-color: #5500C0;
    position: absolute;
    z-index: 100;
    bottom: 1vh;
    left: 1vh;
    &:after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url(${props => require('../assets/images/scroll-assets/arrow-up-white.svg').default});
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: center;
        transform: rotate(-90deg);
    }
`
const EventCarouselNextButton = styled.div`
    width: 3vh;
    height: 3vh;
    border-radius: 1vh;
    background-color: #5500C0;
    position: absolute;
    z-index: 100;
    bottom: 1vh;
    right: 1vh;
    &:after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url(${props => require('../assets/images/scroll-assets/arrow-up-white.svg').default});
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: center;
        transform: rotate(90deg);
    }
`

const CarouselEventWrap = styled.div`
    width: 100%;
`
const ContentEventsCell = styled.div`
    width: 100%;
    height: 40vh;
`
const EventImageMobile = styled('div')<{src?:string}>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 45%;
    background-position: center;
    @media (max-width: ${props => Breakpoint.md}) {
        background-size: 46%;
    }    
    @media (max-width: ${props => Breakpoint.md2}) {
        background-size: 60%;
    }    
    @media (max-width: ${props => Breakpoint.md2}) {
        background-size: 100%;
    }    
`

const EventModalContainer = styled.div`
    display: none;
`
const EventModalContainerInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${props => Breakpoint.md}) {
        justify-content: center;
    }    
`
const EventModalDescPanel = styled('div')<{bottom?:boolean,paddingTop?:number,paddingBottom?:number}>`
    width: 63.7vh;
    height: 20vh;
    display: flex;
    align-items: ${props => props.bottom ? 'flex-end' : 'flex-start'};
    padding-top: ${props => props.paddingTop || 0}vh;
    padding-bottom: ${props => props.paddingBottom || 0}vh;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 60vw;
    }    
    
`
const CarouselEventModalPanel = styled.div`
    // position: absolute;
    width: 60vw;
    height: 60vh;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
`
const EventModalImageWithDescription = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const EventModalImage = styled('div')<{src?:string}>`
    width: 60vw;
    height: 60vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
const EventModalImagePrevButton = styled.div`
    position: absolute;
    width: 6vh;
    height: 6vh;
    z-index: 200;
    top: 46%;
    left: 2%;
    background-image: url(${props => require('../assets/images/events/arrow-up.svg').default});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    transform: rotate(-90deg);
    cursor: pointer;
`
const EventModalImageNextButton = styled.div`
    position: absolute;
    width: 6vh;
    height: 6vh;
    z-index: 200;
    top: 46%;
    right: 2%;
    background-image: url(${props => require('../assets/images/events/arrow-up.svg').default});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    transform: rotate(90deg);
    cursor: pointer;
`
const EventModalImageCloseButton = styled.div`
    position: absolute;
    width: 5vh;
    height: 5vh;
    z-index: 200;
    top: 3%;
    right: 2%;
    background-image: url(${props => require('../assets/images/events/close-x.svg').default});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    cursor: pointer;
    opacity: 0.7;
`
const EventImageDesc = styled('div')<{marginBottom?:number}>`
    font-size: 1.5vh;
    color: #fff;
    margin-bottom: ${props => props.marginBottom || 0}vh;
`