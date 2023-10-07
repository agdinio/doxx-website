import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Breakpoint} from "../constants";
import ArrowRightIcon from '../assets/images/events/event-arrow-right.svg';
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import {eventItems} from "../api/events";
import {REACT_APP_IMAGE_HOST} from "../config";

const EVENTSx = [
    {
        name: 'metajam',
        title: 'Metajam Asia 2022: NFT Singapore',
        description: 'Singapore\'s very first digital art and experiential festival that spanned over 3 months, culminating in a 3 day summit with iconic speakers on educational and innovative topics in the web3 space.',
        dates: 'June - July 2022',
        images: [
            'metajam-1.png',
            'metajam-2.png',
            'metajam-3.png',
            'metajam-4.png',
            'metajam-5.png',
            'metajam-6.png',
        ]
    },
    {
        name: 'cortina',
        title: 'Cortina Watch',
        description: 'One of Singapore’s most respected names in watch retail proudly celebrated its 50th year in business in 2022. Hosted in conjunction with H. Moser & Cie, a 10 piece limited edition timepiece was unveiled during the festivities.',
        dates: 'June - July 2022',
        images: [
            'cortina-1.png',
            'cortina-2.png',
            'cortina-3.png',
            'cortina-4.png',
            'cortina-5.png',
            'cortina-6.png',
        ]
    },
    {
        name: 'barouv',
        title: 'Barouv',
        description: 'A rooftop escape & social event space in the heart of Singapore that counts Coinhako, Fireblocks, Project Godjira, and other corporate brands as their partners.',
        dates: 'July 2022',
        images: [
            'barouv-1.png',
            'barouv-2.png',
            'barouv-3.png',
            'barouv-4.png',
            'barouv-5.png',
            'barouv-6.png',
        ]
    },
    {
        name: '313',
        title: '313',
        description: 'Home to Puma’s new flagship store in Singapore, 313 is a popular venue for both web2 and web3 brands such as Culture Cartel to showcase their digital displays to the public.',
        dates: 'August 2022',
        images: [
            '313-1.png',
            '313-2.png',
            '313-3.png',
            '313-4.png',
            '313-5.png',
            '313-6.png',
        ]
    },
    {
        name: 'foodfest',
        title: 'Singapore Food Festival',
        description: 'The annual Singapore Food Festival (SFF) returned for its 29th edition after the covid hiatus with a feast of over 70 gastronomic experiences based on the pillars of heritage, contemporary, and innovation.',
        dates: 'August - September 2022',
        images: [
            'foodfest-1.png',
            'foodfest-2.png',
            'foodfest-3.png',
            'foodfest-4.png',
            'foodfest-5.png',
            'foodfest-6.png',
        ]
    },
    {
        name: 'raffles_city',
        title: 'Raffles City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dates: 'August - September 2022',
        images: [
            'raffles_city-1.png',
            'raffles_city-2.png',
            'raffles_city-3.png',
            'raffles_city-4.png',
            'raffles_city-5.png',
            'raffles_city-6.png',
        ]
    },
    {
        name: 'asia_crypto_week',
        title: 'Asia Crypto Week',
        description: 'A week of various independently organised events around TOKEN2049 Singapore, a wide range of unparalleled networking opportunities were hosted in the form of meetups, workshops, and parties all across Singapore!',
        dates: 'September 2022',
        images: [
            'asia_crypto_week-1.png',
            'asia_crypto_week-2.png',
            'asia_crypto_week-3.png',
            'asia_crypto_week-4.png',
            'asia_crypto_week-5.png',
            'no-image.svg'
        ]
    },
    {
        name: 'champ_medici_lounge',
        title: 'Champ Medici Lounge',
        description: 'A five-day event coinciding with Token2049 Singapore, The Mandala Club played host to the Champ Medici x Dr Bombay Art Gallery, featuring key artworks which include NFTs by Steve Aoki and Wiz Khalifa.',
        dates: 'October 2022',
        images: [
            'champ_medici_lounge-1.png',
            'champ_medici_lounge-2.png',
            'champ_medici_lounge-3.png',
            'champ_medici_lounge-4.png',
            'champ_medici_lounge-5.png',
            'champ_medici_lounge-6.png',
        ]
    },
]

export default function Events() {

    const [activeEvent, setActiveEvent] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [modalStatus, setModalStatus] = useState<any>();

    const handleNextEventClick = () => {
        if (activeEvent < (eventItems.length - 1)) {
            setActiveEvent(prev => prev + 1);
        } else {
            setActiveEvent(0);
        }
    }

    const handleGoToEventClick = (i:number,p:any) => {
        setActiveEvent(i);
    }

    const eventImageClick = (index:number) => {
        setModalStatus({isOpen:true, index})
    }

    useEffect(() => {
        setSelectedEvent(eventItems[activeEvent]);
    }, [activeEvent])

    return (
        <Container>
            <ModalImage selEvent={selectedEvent} status={modalStatus} closeModal={() => setModalStatus({isOpen: false, index:1})}/>
            <Header>Events</Header>
            <Content>
                <Left>
                    <Grid>
                        {
                            loading ? (
                                null
                                ) : (
                                selectedEvent ? (
                                        selectedEvent.images.map((p:any, i:number) => {
                                            return (
                                                <Box
                                                    key={`${p.name}-${i}`}
                                                    // src={require(`../assets/images/events/${p}`).default}
                                                    src={`${REACT_APP_IMAGE_HOST}/${p}-/scale_crop/500x500/-/progressive/yes/`}
                                                    noImage={p === 'no-image.svg'}
                                                    onClick={() => eventImageClick(i + 1)}
                                                />
                                            )
                                        })
                                    ) : null
                            )
                        }
                    </Grid>
                </Left>
                <Right>
                    <Col>
                        <Col marginBottom={2}>
                            <Text color="#ffffff" size={1.8} letterspacing={0.1} lineHeight={1}>{selectedEvent?.title}</Text>
                        </Col>
                        <Col marginBottom={2}>
                            <Text color="#ffffff" size={0.9} letterspacing={0.1} lineHeight={1}>{(selectedEvent?.dates || '').toUpperCase()}</Text>
                        </Col>
                        <Col>
                            <Text style={{fontFamily:"poppins-light"}} color="#ffffff" size={0.8} letterspacing={0.1} lineHeight={1.3}>{selectedEvent?.description}</Text>
                        </Col>
                    </Col>

                    <BulletWrap>
                        <NextEventButton onClick={handleNextEventClick}/>
                        <Bullets>
                            {
                                eventItems.map((p, i) => (<Bullet key={`${p.name}-${i}`} active={i === activeEvent} onClick={() => handleGoToEventClick(i, p)} />))
                            }
                        </Bullets>
                    </BulletWrap>
                </Right>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(90deg, #FFFFFF 0%, #F9E6D5 89.53%);
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
    justify-content: space-between;
    background: rgba(0,0,0,0.1);
    @media (max-width: ${props => Breakpoint.md}) {
        flex-direction: column;
        height: 87%;
    }        
`
const Left = styled.div`
    width: 75%;
    height: 100%;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
    }        
`
const Right = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #000000;
    padding: 6vh 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
        height: 60%;
        padding: 3vh 3vw;
    }        
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    height: 100%;
`
const Box = styled('div')<{src?:string,noImage?:boolean}>`
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: ${props => props.noImage ? '20%' : 'cover'};
    background-position: center top;    
    transition: all 0.3s ease-in-out;
    &:hover {
        z-index: 100;        
        transform: scale(1.05);
        &:nth-of-type(1) {
            transform-origin: top left;           
        }
        &:nth-of-type(2) {
            transform-origin: top;           
        }
        &:nth-of-type(3) {
            transform-origin: top right;           
        }
        &:nth-of-type(4) {
            transform-origin: bottom left;           
        }
        &:nth-of-type(5) {
            transform-origin: bottom;           
        }
        &:nth-of-type(6) {
            transform-origin: bottom right;           
        }
    }
`
const BulletWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Bullets = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5vw;
`
const Bullet = styled('div')<{active?:boolean}>`
    width: 100%;
    height: 1vh;
    border-radius: 1vh;
    background-color: #ffffff;
    opacity: ${props => props.active ? 1 : 0.4};
    transition: all 0.3s ease-in-out;    
    cursor: pointer;
`

const NextEventButton = styled.div`
    width: 100%;
    height: 5vw;
    background-color: #FFB769;
    border-radius: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 3vh;
    &:before {
        content: 'NEXT EVENT';
        font-family: syncopate-bold;
        font-size: ${props => 5 * 0.25}vw;
        color: #000000;
        line-height: 0.9;
    }
    &:after {
        content: '';
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url(${props => ArrowRightIcon});
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: center;            
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 25vh;
        height: 5vh;
        &:before {
            font-size: calc(5vh * 0.3);
        }
    }
    &:hover {
        opacity: 0.8;
    }
`
const Col = styled('div')<{marginBottom?:number}>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.marginBottom}vh;
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

const ModalImage = ({selEvent,status,closeModal}:any) => {
    const refEvenImageModalTitle = useRef(null);
    const refEvenImageModalDate = useRef(null);
    const refEventImageModalCounter = useRef(null);
    const refEventModalCarousel = useRef(null);
    const refEvenImageModalDesc = useRef(null);

    useEffect(() => {
        if(status?.isOpen) {
            if (refEventModalCarousel.current) {
                // @ts-ignore
                refEventModalCarousel.current.to(status.index - 1, 500);
            }
            showModal();
        } else {
            hideModal();
        }
    }, [status]);

    async function modalEventCounter(event:any) {
        if (!event.namespace) {
            return;
        }
        const slides = await event.relatedTarget;
        const _slide = slides.relative(slides.current()) + 1 + '/' + slides.items().length;

        if (refEvenImageModalTitle.current) {
            // @ts-ignore
            refEvenImageModalTitle.current.innerHTML = selEvent?.title;
        }
        if (refEvenImageModalDate.current) {
            // @ts-ignore
            refEvenImageModalDate.current.innerHTML = selEvent?.dates;
        }
        if (refEventImageModalCounter.current) {
            // @ts-ignore
            refEventImageModalCounter.current.innerHTML = slides.relative(slides.current()) + 1 + '/' + slides.items().length;
        }
        if (refEvenImageModalDesc.current) {
            // @ts-ignore
            refEvenImageModalDesc.current.innerHTML = selEvent?.description;
        }
    }

    function showModal() {
        $("#event-modal-container").fadeIn('fast');
    }
    function hideModal() {
        $("#event-modal-container").fadeOut('fast');
    }

    function handleEventModalCarouselClick(direction:number) {
        if (direction === 0) {
            if (refEventModalCarousel.current) {
                // @ts-ignore
                refEventModalCarousel.current.prev(500);
            }
        } else {
            if (refEventModalCarousel.current) {
                // @ts-ignore
                refEventModalCarousel.current.next(500);
            }
        }
    }

    return (
        <EventModalContainer className="delModal" id="event-modal-container">
            <EventModalContainerInner>
                <EventModalImageCloseButton onClick={() => {
                    hideModal();
                    closeModal();
                }}/>
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
                            (selEvent && selEvent.images) && (
                                selEvent.images.map((p: any, i: number) => {
                                    return (
                                        <EventModalImageWithDescription key={`${p.name}-${i}`}>`
                                            {/*<EventModalImage src={require(`../assets/images/events/${p}`).default}/>*/}
                                            {/*<EventModalImage src={`${REACT_APP_IMAGE_HOST}/${p}-/scale_crop/700x700/-/progressive/yes/`}/>*/}
                                            <EventModalImage src={`${REACT_APP_IMAGE_HOST}/${p}-/progressive/yes/`}/>
                                        </EventModalImageWithDescription>
                                    )
                                }))
                        }
                    </OwlCarousel>
                </CarouselEventModalPanel>
                <EventModalDescPanel paddingTop={2}>
                    <EventImageDesc ref={refEvenImageModalDesc}/>
                </EventModalDescPanel>
                <EventModalImageNextButton onClick={() => handleEventModalCarouselClick(1)}/>
            </EventModalContainerInner>
        </EventModalContainer>
    )
}
const EventModalContainer = styled.div`
    display: none;
`
const EventModalContainerInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0, 0.3);
    backdrop-filter: blur(0.4rem);
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
    width: 60vw;
    height: 60vh;
    @media (max-width: ${props => Breakpoint.md}) {
        height: 50vh;
    }    
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
    @media (max-width: ${props => Breakpoint.md}) {
        height: 50vh;
    }    
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
    line-height: 1.4;
`