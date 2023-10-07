import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createRoot, Root} from "react-dom/client";
import styled, {keyframes} from 'styled-components';
import logoDoxxStudio from '../assets/images/doxx-studio.svg';
import logoDoxxSmall from '../assets/images/doxx-logo-small.svg';
import logoDoxxSmallWhite from '../assets/images/doxx-logo-small-white.svg';
import logoDoxxSliding from '../assets/images/doxx-sliding.svg';
import imageKalpha from '../assets/images/gallery/kalpha.gif';
import imageMetaverse from '../assets/images/gallery/metaverse.gif';
import imageNftArt from '../assets/images/gallery/nft-art.gif';
import imageNftStudio from '../assets/images/gallery/nft-studio.gif';
import imageNobles from '../assets/images/gallery/nobles.gif';
import imagePeasants from '../assets/images/gallery/peasants.gif';
import imagePharaoh from '../assets/images/gallery/pharaoh.gif';
import imageScrollArrowDown from '../assets/images/scroll-arrow-down.svg';
import imageScrollArrowUpDownBlack from '../assets/images/scroll-arrow-up-down-black.svg';
import imageScrollArrowUpDownWhite from '../assets/images/scroll-arrow-up-down-white.svg';
import imageScrollArrowUp from '../assets/images/scroll-arrow-up.svg';
import ScrollArrow from "../components/ScrollArrow";
import {Breakpoint, BreakpointInPx} from "../constants";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Modal} from "../Styles";
import TermsModal from "../components/TermsModal";
import Brands from "./Brands";
import FooterPage from "./FooterPage";

const speed = 600;
const gallery = [
    {title: 'pnp: peasants', image: imagePeasants},
    {title: 'pnp: nobles', image: imageNobles},
    {title: 'pnp: pharaohs', image: imagePharaoh},
    {title: 'kalpha: aliens', image: imageKalpha},
    {title: 'metaverse: hutong china', image: imageMetaverse},
    {title: 'bigfoot town', image: imageNftArt},
    {title: 'metaverse: the supermarket', image: imageNftStudio},
]
const teamMembers = [
    {alias: 'Vyrie', image: require('../assets/images/team/vyrie.png').default, desc: 'Certified degen turned builder', color: '#EF8698'},
    {alias: 'Soda', image: require('../assets/images/team/soda.png').default, desc: 'Ideas + Caffeine = BUSINESS', color: '#FFFFFF'},
    {alias: 'Bibliophile', image: require('../assets/images/team/coffeeholic.png').default, desc: 'Exploring new worlds', color: '#E4951D'},
    {alias: 'Bongo', image: require('../assets/images/team/bongo.png').default, desc: 'You only have 1 life left', color: '#92DCBD'},
    {alias: 'Dad Bod', image: require('../assets/images/team/dadbod.png').default, desc: 'The Code Scavenger', color: '#E7DA6C'},
    {alias: 'Saturn', image: require('../assets/images/team/saturn.png').default, desc: 'I create therefore I am', color: '#FFA16D'},
]
const events = [
    {image: require('../assets/images/events/1.png').default, transformOrigin: 'top'},
    {image: require('../assets/images/events/2.png').default, transformOrigin: 'top right'},
    {image: require('../assets/images/events/3.png').default, transformOrigin: 'bottom left'},
    {image: require('../assets/images/events/4.png').default, transformOrigin: 'bottom'},
    {image: require('../assets/images/events/5.png').default, transformOrigin: 'bottom'},
    {image: require('../assets/images/events/6.png').default, transformOrigin: 'bottom right'},
]

export default function LandingOld() {
    const refScrolling = useRef(null);
    const refPanels = useRef<(HTMLDivElement | null)[]>([]);
    const [singleItem, setSingleItem] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPageNum, setCurrentPageNum] = useState(0);
    const refModal = useRef<HTMLDivElement>(null);
    const refGalleryProjectTitleWrap = useRef<(HTMLDivElement | null)[]>([]);
    const refGalleryProjectTitle = useRef<(HTMLSpanElement | null)[]>([]);
    const refCarouselEvent = useRef(null);
    const [breakpoint, setBreakpoint] = useState('');
    // @ts-ignore
    let root: Root | null = null;

    function handleRedirectToMain() {
        window.location.reload();
    }

    function handleTermsClick() {
        if (refModal.current) {
            root = createRoot(refModal.current);
            root.render(<TermsModal close={handleCloseModalClick}/>);
            refModal.current.classList.add('active');
        }
    }

    function handleCloseModalClick() {
        if (refModal.current) {
            // @ts-ignore
            root.unmount();
            refModal.current.classList.remove('active');
        }
    }

    function handleContactUsClick() {
        window.location.assign("mailto:hello@do-xx.com");
    }

    function initGalleryAnimation() {
        if (refGalleryProjectTitleWrap.current && refGalleryProjectTitle.current) {

            for (let i=0; i<refGalleryProjectTitleWrap.current.length; i++) {
                const wrap = refGalleryProjectTitleWrap.current[i];
                const title = refGalleryProjectTitle.current[i];
                if (title && wrap) {
                    console.log(title.innerText,title.offsetWidth, title.scrollWidth, wrap.scrollWidth)
                    if (title.offsetWidth > wrap.offsetWidth) {
                        title.classList.add('slide');
                    } else {
                        title.classList.remove('slide');
                    }
                }
            }

        }
    }

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

    function handleTelegramClick() {
        window.open("https://t.me/v_eth", "_blank");
    }

    function responsePage() {
        const md = Number(BreakpointInPx.md.slice(0, -2));
        const md2 = Number(BreakpointInPx.md2.slice(0, -2));
        const sm = Number(BreakpointInPx.sm.slice(0, -2));
        if (sm > window.innerWidth) {
            setBreakpoint('sm')
        } else if (md2 > window.innerWidth) {
            setBreakpoint('md2')
        } else if (md > window.innerWidth) {
            setBreakpoint('md')
            setSingleItem(true);
        } else {
            setBreakpoint('')
            setSingleItem(false);
        }
    }

    useEffect(() => {

        if (!refScrolling.current) {
            return;
        }

        const pnls = refPanels.current.length * 100;
        // @ts-ignore
        const footerHeight = refPanels.current[refPanels.current.length - 1]?.offsetHeight / (window.innerHeight / 100);
        const step = 100;
        let slength = 0;
        let hold = false;
        let scdir: string;
        let isFooter = false;
        setTotalPage(refPanels.current.length);

        /**
         * DESKTOP WHEEL EVENT
         */
        // @ts-ignore
        refScrolling.current.addEventListener('mousewheel', (e) => {
            let isTrackpad = false;
            if (e.wheelDeltaY) {
                if (e.wheelDeltaY === (e.deltaY * -3)) {
                    isTrackpad = true;
                }
            }
            else if (e.deltaMode === 0) {
                isTrackpad = true;
            }
            console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");

            if (e.deltaY < 0) {
                scdir = 'down';
            }
            if (e.deltaY > 0) {
                scdir = 'up';
            }
            e.stopPropagation();

            if (!hold) {
                // console.log(Math.abs(slength) + step + (step - footerHeight))
                // console.log(pnls)
                if (scdir === 'up' && (Math.abs(slength) + step + (step - footerHeight)) < (pnls)) {
                    if ((pnls - (Math.abs(slength) + 100)) === 100) {
                        console.log('LAST PANEL',Math.abs(slength) + 200);
                        setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        isFooter = true;
                        slength = slength - footerHeight;
                    } else {
                        console.log('NOT LAST PANEL',  Math.abs(slength) + 200)
                        setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        slength = slength - step;
                    }
                } else if (scdir === 'down' && slength < 0) {
                    if (isFooter) {
                        console.log(isFooter)
                        setCurrentPageNum((Math.abs(slength + (step - (step - footerHeight))) + 100) / 100)
                        isFooter = false;
                        slength = slength + (step - (step - footerHeight));
                    } else {
                        setCurrentPageNum((Math.abs(slength)) / 100)
                        slength = slength + step;
                    }
                }

                hold = true;

                // @ts-ignore
                refScrolling.current.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(() => hold = false, isTrackpad ? 1500 : speed);
            }
        })

        /**
         * DESKTOP ARROW KEY EVENT
         */
        // @ts-ignore
        document.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (!hold) {
                if (e.key == 'ArrowDown' && (Math.abs(slength) + step + (step - footerHeight)) < (pnls)) {
                    if ((pnls - (Math.abs(slength) + 100)) === 100) {
                        console.log('LAST PANEL', scdir)
                        setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        isFooter = true;
                        slength = slength - footerHeight;
                    } else {
                        console.log('NOT LAST PANEL',scdir)
                        setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        slength = slength - step;
                    }
                } else if (e.key == 'ArrowUp' && slength < 0) {
                    if (isFooter) {
                        console.log(isFooter)
                        setCurrentPageNum((Math.abs(slength + (step - (step - footerHeight))) + 100) / 100)
                        isFooter = false;
                        slength = slength + (step - (step - footerHeight));
                    } else {
                        setCurrentPageNum((Math.abs(slength)) / 100)
                        slength = slength + step;
                    }
                }

                hold = true;

                // @ts-ignore
                refScrolling.current.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(() => hold = false, speed);
            }
        });


        /**
         * MOBILE TOUCH EVENT
         */
        const pageActualHeight = window.innerHeight /10;
        const mpnls = refPanels.current.length * pageActualHeight;
        // @ts-ignore
        const mfooterHeight = refPanels.current[refPanels.current.length - 1]?.offsetHeight / (window.innerHeight / pageActualHeight);
        const mstep = 100;

        let touchstartY = 0
        let touchendY = 0
        let xDown:any = null;
        let yDown:any = null;
        // @ts-ignore
        refScrolling.current.addEventListener('touchstart', (e) => {
            // xDown = e.touches[0].clientX;
            yDown = e.touches[0].clientY;
        })
        // @ts-ignore
        refScrolling.current.addEventListener('touchmove', (e) => {
            if ( ! yDown ) {
                return;
            }

            // const xUp = e.touches[0].clientX;
            const yUp = e.touches[0].clientY;

            // const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;

            if (!hold) {
                if (yDiff > 0 && (Math.abs(slength) + mstep + (mstep - mfooterHeight)) < (mpnls)) {
                    if ((mpnls - (Math.abs(slength) + pageActualHeight)) === pageActualHeight) {
                        console.log('LAST PANEL', scdir)
                        // setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        isFooter = true;
                        slength = slength - mfooterHeight;
                    } else {
                        console.log('NOT LAST PANEL',scdir)
                        // setCurrentPageNum((Math.abs(slength) + 200) / 100)
                        slength = slength - mstep;
                    }
                } else if (yDiff <=0 && slength < 0) {
                    if (isFooter) {
                        console.log(isFooter)
                        // setCurrentPageNum((Math.abs(slength + (mstep - (mstep - mfooterHeight))) + 100) / 100)
                        isFooter = false;
                        slength = slength + (mstep - (mstep - mfooterHeight));
                    } else {
                        // setCurrentPageNum((Math.abs(slength)) / 100)
                        slength = slength + mstep;
                    }
                }



                hold = true;

                // @ts-ignore
                refScrolling.current.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(() => hold = false, speed);
            }

        })

        /*
                // @ts-ignore
                refScrolling.current.addEventListener('touchstartx', (e) => {
                    touchstartY = e.changedTouches[0].screenY;
                    e.stopPropagation();
                })

                // @ts-ignore
                refScrolling.current.addEventListener('touchendx', (e) => {
                    touchendY = e.changedTouches[0].screenY;
                    if (touchstartY > touchendY) {
                        scdir = 'up';
                    } else {
                        scdir = 'down';
                    }
                    e.stopPropagation();

                    if (!hold) {
                        if (scdir === 'up' && (Math.abs(slength) + step + (step - footerHeight)) < (pnls)) {
                            if ((pnls - (Math.abs(slength) + 100)) === 100) {
                                console.log('LAST PANEL', scdir)
                                isFooter = true;
                                slength = -(Math.abs(slength) + footerHeight);
                            } else {
                                console.log('NOT LAST PANEL',scdir)
                                slength = -(Math.abs(slength) + step);
                            }
                        } else if (scdir === 'down' && Math.abs(slength) > 0) {
                            if (isFooter) {
                                console.log(isFooter)
                                isFooter = false;
                                slength = slength + footerHeight;
                            } else {
                                slength = slength + step;
                            }
                        }

                        hold = true;

                        // @ts-ignore
                        refScrolling.current.style.transform = 'translateY(' + slength + 'vh)';
                        setTimeout(() => hold = false, speed);
                    }
                })
        */




        // const bpoint = Number(BreakpointInPx.md.slice(0, -2));
        // if (bpoint > window.innerWidth) {
        //     setSingleItem(true);
        // } else {
        //     setSingleItem(false);
        // }
        //
        // window.onresize = () => {
        //     const bpoint = Number(BreakpointInPx.md.slice(0, -2));
        //     if (bpoint > window.innerWidth) {
        //         setSingleItem(true);
        //     } else {
        //         setSingleItem(false);
        //     }
        // }

        responsePage();
        window.onresize = () => {
            responsePage();
        }

    }, [])

    return (
        <Container>
            <Modal ref={refModal}/>
            <ScrollingWrap id="ref-scrolling" ref={refScrolling}>

                <Panel ref={el => refPanels.current[0] = el}>
                    <FirstSectionBackground>
                        <LandingLogo src={logoDoxxStudio}/>
                        {/*<ScrollArrowImageDown src={imageScrollArrowDown}/>*/}
                        <ScrollArrow abs bottom={5} pageNum={1} arrowUpHidden white />
                    </FirstSectionBackground>
                </Panel>

                <Panel ref={el => refPanels.current[1] = el}>
                    <SecondSectionBackground>
                        <DoTextWrap>
                            <DoText>do-&#8288;Web3</DoText>
                            <DoText>do-&#8288;Blockchain</DoText>
                            <DoText>do-&#8288;NFTS.</DoText>
                        </DoTextWrap>
                        <DoxxLogoScrolling>
                            <DoxxLogoScrollingContent>
                                <DoxxLogoBanner src={logoDoxxSliding} toLeft/>
                                <DoxxLogoBanner src={logoDoxxSliding} toLeft/>
                            </DoxxLogoScrollingContent>
                        </DoxxLogoScrolling>
                        <PageFooter>
                            <ContactUs href="mailto:hello@do-xx.com">contact us</ContactUs>
                            <BulletLine bulletPos="left"/>
                            <FooterLogo src={logoDoxxSmall} onClick={handleRedirectToMain} style={{marginRight:'2vw'}}/>
                            {/*<ScrollArrowUpDown src={imageScrollArrowUpDownBlack} style={{marginRight:'1vw'}}/>*/}
                            <ScrollArrow pageNum={2}/>
                        </PageFooter>
                    </SecondSectionBackground>
                </Panel>

                <Panel ref={el => refPanels.current[2] = el}>
                    <ThirdSectionBackground>
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
                    </ThirdSectionBackground>
                </Panel>

                <Panel ref={el => refPanels.current[3] = el}>
                    <FourthSectionBackground>
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
                    </FourthSectionBackground>
                </Panel>

                <Panel ref={el => refPanels.current[4] = el}>
                    <FifthSectionBackground>
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
                            <OwlCarousel loop={true} autoplay={true} autoplayTimeout={5000} smartSpeed={1000} items={singleItem ? 1 : 4}>
                                {
                                    gallery.map((item, i) => {

                                        return (
                                            <Gallery key={`galleryimage-${i}`} >
                                                <GalleryImageWrap className="gallery-image">
                                                    <GalleryImage src={item.image}/>
                                                </GalleryImageWrap>
                                                <ProjectTitleWrap ref={el => refGalleryProjectTitleWrap.current[i] = el}>
                                                    <ProjectTitle ref={el => refGalleryProjectTitle.current[i] = el}>
                                                        {item.title}
                                                    </ProjectTitle>
                                                </ProjectTitleWrap>
                                            </Gallery>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </CarouselWrap>
                        <PageFooter>
                            <ContactUsWhite href="mailto:hello@do-xx.com">contact us</ContactUsWhite>
                            <BulletLine bulletPos="left" white/>
                            <FourthFooterLogo src={logoDoxxSmallWhite} onClick={handleRedirectToMain} style={{marginRight:'2vw'}}/>
                            {/*<ScrollArrowUpDown src={imageScrollArrowUpDownWhite} style={{marginRight:'1vw'}}/>*/}
                            <ScrollArrow white pageNum={5}/>
                        </PageFooter>
                    </FifthSectionBackground>
                </Panel>

                <Panel ref={el => refPanels.current[5] = el}>
                    <SectionBackgroundTeam>
                        <ContentTeam>
                            <ContentTeamGrid>
                                <ContentTeamCell>
                                    <TeamHeaderText>Team</TeamHeaderText>
                                </ContentTeamCell>
                                {
                                    teamMembers.map((member, i) => {
                                        return (
                                            <ContentTeamCell key={`teamimage-${i}`}>
                                                <MemberImage src={member.image}/>
                                                <MemberDesc>
                                                    <MemberAlias color={member.color}>{member.alias}</MemberAlias>
                                                    <MemberAliasDesc>{member.desc}</MemberAliasDesc>
                                                </MemberDesc>
                                            </ContentTeamCell>
                                        )
                                    })
                                }
                                <ContentTeamCell/>
                            </ContentTeamGrid>
                        </ContentTeam>
                        <ContentTeamMobile>
                            <TeamHeaderText>Team</TeamHeaderText>
                            <CarouselWrap>
                                <OwlCarousel loop={true} autoplay={true} autoplayTimeout={5000} smartSpeed={1000} items={1}>
                                    {
                                        teamMembers.map((member, i) => {
                                            return (
                                                <ContentTeamCell key={`teamimage-${i}`}>
                                                    <MemberImage src={member.image}/>
                                                    <MemberDesc>
                                                        <MemberAlias color={member.color}>{member.alias}</MemberAlias>
                                                        <MemberAliasDesc>{member.desc}</MemberAliasDesc>
                                                    </MemberDesc>
                                                </ContentTeamCell>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </CarouselWrap>
                        </ContentTeamMobile>
                        <PageFooter>
                            <FooterLogo src={logoDoxxSmallWhite} onClick={handleRedirectToMain}/>
                            <BulletLine white/>
                            <ContactUs color={'#fff'} style={{marginRight:'2vw'}} href="mailto:hello@do-xx.com">contact us</ContactUs>
                            {/*<ScrollArrowUpDown src={imageScrollArrowUpDownWhite} style={{marginRight:'1vw'}}/>*/}
                            <ScrollArrow white pageNum={6}/>
                        </PageFooter>

                    </SectionBackgroundTeam>
                </Panel>

                <Panel ref={el => refPanels.current[6] = el}>
                    <Brands breakpoint={breakpoint}/>
                </Panel>



{/*
                <Panel ref={el => refPanels.current[6] = el}>
                    <SectionBackgroundEvents>
                        <ContentEvents>
                            <ContentEventsGrid>
                                <ContentEventRow>
                                    <EventHeader>
                                        <EventHeaderText size={6}>Events</EventHeaderText>
                                        <EventHeaderText font={'syncopate-regular'} size={1.7} marginTop={2} style={{opacity:0.8}}>Latest event:</EventHeaderText>
                                        <EventHeaderText size={2.9} marginTop={1}>Metajam Asia 2022:</EventHeaderText>
                                        <EventHeaderText size={2.9}>NFT Singapore</EventHeaderText>
                                        <div style={{display:'flex',justifyContent:'flex-start',marginTop:'5vh'}}>
                                            <ScrollArrow pageNum={7}/>
                                        </div>
                                    </EventHeader>
                                </ContentEventRow>
                                <ContentEventRow>
                                    <EventImage src={events[0].image} transformOrigin={events[0].transformOrigin}/>
                                    <EventImage src={events[1].image} transformOrigin={events[1].transformOrigin}/>
                                </ContentEventRow>
                                <ContentEventRow>
                                    <EventImage src={events[2].image} transformOrigin={events[2].transformOrigin}/>
                                    <EventImage src={events[3].image} transformOrigin={events[3].transformOrigin}/>
                                </ContentEventRow>
                                <ContentEventRow>
                                    <EventImage src={events[4].image} transformOrigin={events[4].transformOrigin}/>
                                    <EventImage src={events[5].image} transformOrigin={events[5].transformOrigin}/>
                                </ContentEventRow>
                            </ContentEventsGrid>
                            <ContentEventsMore>
                                <ContentEventsMoreLeft>
                                    <ContentEventsMoreLeftWrap>
                                        <CEMText>More</CEMText>
                                        <CEMText>events</CEMText>
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
                                        items={5}
                                        ref={refCarouselEvent}
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
                        </ContentEvents>

                        <ContentEventsMobile>
                            <EventHeader>
                                <EventHeaderText size={6}>Events</EventHeaderText>
                                <EventHeaderText font={'syncopate-regular'} size={1.7} marginTop={2} style={{opacity:0.8}}>Latest event:</EventHeaderText>
                                <EventHeaderText size={2.9} marginTop={1}>Metajam Asia 2022:</EventHeaderText>
                                <EventHeaderText size={2.9}>NFT Singapore</EventHeaderText>
                            </EventHeader>
                            <CarouselWrap>
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
                            </CarouselWrap>
                        </ContentEventsMobile>

                    </SectionBackgroundEvents>
                </Panel>
*/}



                <Panel ref={el => refPanels.current[7] = el} autoHeight id="contact-us">
                    <MainFooterBackground>
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
                            <div style={{display:'flex',justifyContent:'space-between',margin:'1vh 0',width:'23vh'}}>
                                <SmallButton src={require('../assets/images/twitter.svg').default} bgColor={'#72D4FF'}/>
                                <SmallButton src={require('../assets/images/telegram.svg').default} bgColor={'#0383C1'} onClick={handleTelegramClick}/>
                            </div>
                        </ButtonGroupMobile>
                        <MainFooter>
                            <MainFooterTM>2022 DO-XX Studio Ltd.</MainFooterTM>
                            <MainFooterBulletLine/>
                            <PressTermWrap>
                                <MainFooterPressTerms>Press</MainFooterPressTerms>
                                <MainFooterPressTerms style={{marginRight:'2vw'}} onClick={handleTermsClick}>Terms</MainFooterPressTerms>
                            </PressTermWrap>
                            {/*<ScrollArrowImageUp src={imageScrollArrowUp} style={{marginRight:'1vw'}}/>*/}
                            <div style={{marginRight:'2vw'}}>
                                <ScrollArrow arrowDownHidden pageNum={8}/>
                            </div>
                        </MainFooter>
                        <PressTermWrapMobile>
                            <MainFooterPressTerms>Press</MainFooterPressTerms>
                            <MainFooterPressTerms onClick={handleTermsClick}>Terms</MainFooterPressTerms>
                        </PressTermWrapMobile>
                    </MainFooterBackground>
                </Panel>

            </ScrollingWrap>
            {/*<ScrollIndicator total={totalPage} page={currentPageNum}/>*/}
        </Container>
    );
}

const h = window.innerHeight + 'px';
const Container = styled.div`
    width: 100%;
    height: ${props => h};
    overflow: hidden;
    max-height: -webkit-fill-available;
`
const ScrollingWrap = styled.div`
    position: relative;
    overflow: hidden;
    height: auto;
    transition: ${speed}ms cubic-bezier(0.5, 0, 0.5, 1);
    &::-webkit-scrollbar {
        width:0;
        height:0;
    }
    display: flex;
    flex-direction: column;
`

const Panel = styled('div')<{autoHeight?:boolean}>`
    position: relative;
    height: ${props => props.autoHeight ? 'auto' : h};
    overflow: hidden;
    font-size: 10vmin;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // color: hsla(0, 0%, 100%, .1);
    // &:nth-child(1) {
    //     background: #012345;
    // }
    //
    // &:nth-child(2) {
    //     background: #123456;
    // }

    // &:nth-child(3) {
    //     background: #234567;
    // }
    //
    // &:nth-child(4) {
    //     background: #345678;
    // }
    //
    // &:nth-child(5) {
    //     background: #456789;
    // }    
    // &:nth-child(6) {
    //     background: rgba(255,0,0,0.7);
    // }    
`

const FirstSectionBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    flex-direction: column;
`
const LandingLogo = styled.img`
    width: 30vw;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    margin-bottom: 5vh;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 60vw;        
    }
`
const SecondSectionBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;    
    background: linear-gradient(62deg, ${props => '#EE7752'}, ${props => '#E73C7E'}, ${props => '#23A6D5'}, ${props => '#23d5ab'});
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
const ThirdSectionBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;    
    background: linear-gradient(62deg, ${props => '#7DE1EB'}, ${props => '#aae7ed'}, ${props => '#d1e6c7'}, ${props => '#23D5AB'});
    animation: ${props => bgGradient} 10s ease infinite; 
    background-size: 400% 400%;      
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
const DoText = styled('span')<{color?:string,size?:number,fourth?:boolean,letterspacing?:number}>`
    font-family: syncopate-bold;
    // font-size: ${props => props.size || 5.5}vw;
    font-size: ${props => props.size || 8}vh;
    color: ${props => props.color || '#000'};
    line-height: 0.9;
    letter-spacing: ${props => props.letterspacing || -0.3}rem;
    word-wrap: break-word;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: ${props => props.size || 7}vh;
        line-height: 1; 
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
const FooterLogo = styled.img`
    width: 5%;
    width: 9vh;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        width: 7vh;
    }
`
const FourthSectionBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #111;
`
const LineOrange = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => h};
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
    height: ${props => h};
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
    height: ${props => h};
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
    height: ${props => h};
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
    height: ${props => h};
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
    height: ${props => h};
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

const FifthSectionBackground = styled.div`
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
const Gallery = styled.div`
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
const MainFooterBackground = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, ${props => '#E73C7E'}, ${props => '#ffffff'});
    background-size: 10% 400%;      
`
const MainFooterTextWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 12vw;
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
const MainFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;    
    align-items: center;
    height: 14vh;
    padding 0 0 0 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        padding 0 0 0 3vh;
    }
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
    padding-left: 3vh;
    padding-right: 3vh;
    padding-bottom: 3vh;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;
    }
`
const MainFooterPressTerms = styled.span`
    font-family: syncopate-bold;
    font-size: 2.3vh;
    color: #000;
    text-decoration: underline;
    margin-left: 2.5vw;    
    white-space: nowrap;
    cursor: pointer;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 2.1vh;
        margin: 0;    
    }
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
        width: 23vh;
        height: 5.3vh;
        border-radius: 4vh;
        &:after {
            font-size: ${props => 5.3 * 0.25}vh;
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
        width: 11vh;
        height: 5.3vh;
        border-radius: 5.3vh;
        &:after {
            width: 5.3vh;
            height: 5.3vh;        
            background-size: 45%;
        }
    }
`

const SectionBackgroundTeam = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #343434;
`
const TeamHeaderText = styled('div')<{color?:string}>`
    font-family: syncopate-bold;
    font-size: 5vh;
    color: ${props => props.color || '#fff'};
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 4vh;        
        padding-top: 6vh;
        padding-bottom: 4vh;
        padding-left: 3vw;
    }       
`
const ContentTeam = styled.div`
    width: 100%;
    height: 86vh;
    display: flex;
    flex-direction: column;
    padding: 6vh 3vw 1.5vh 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        display: none;        
    }
`
const ContentTeamMobile = styled.div`
    width: 100%;
    display: none;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;        
    }
`
const ContentTeamRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 3.5vh;
`
const ContentTeamGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 3vh;
`
const ContentTeamCell = styled.div`
    width: 100%;
    height: 38vh;
    border-radius: 0.5vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: ${props => Breakpoint.md}) {
        height: 60vh;
    }
`
const MemberImage = styled('div')<{src?:string}>`
    width: 100%;
    height: 100%;
    background-color: #9e9e9e;
    filter: grayscale(1);
    &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: center;
    }
    &:hover {
        filter: grayscale(0);
    }
`
const MemberDesc = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding: 2vh;
`
const MemberAlias = styled('span')<{color?:string}>`
    font-family: syncopate-bold;
    color: ${props => props.color};
    font-size: 1.2vw;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 3vh;        
    }
`
const MemberAliasDesc = styled.span`
    font-family: circular-std-italic;
    color: #fff;
    font-size: 0.9vw;
    margin-top: 1%;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 2.3vh;        
    }
`

const ARROW_WIDTH_PCT = 0.423;
const ScrollArrowImageDown = styled.img`
    position: absolute;
    height: 5.5vh;
    width: ${props => 5.5 * ARROW_WIDTH_PCT}vh;
    bottom: 4vh;
    @media (max-width: ${props => Breakpoint.md}) {
        height: 5vh;       
        width: ${props => 5 * ARROW_WIDTH_PCT}vh; 
    }
`
const ScrollArrowUpDown = styled.img`
    height: 7vh;
    width: ${props => 7 * ARROW_WIDTH_PCT}vh;    
    @media (max-width: ${props => Breakpoint.md}) {
        height: 5.5vh;       
        width: ${props => 5.5 * ARROW_WIDTH_PCT}vh; 
    }
`
const ScrollArrowImageUp = styled.img`
    height: 5.5vh;
    width: ${props => 5.5 * ARROW_WIDTH_PCT}vh;
    margin-bottom: 4vh;
    @media (max-width: ${props => Breakpoint.md}) {
        height: 5vh;       
        width: ${props => 5 * ARROW_WIDTH_PCT}vh; 
    }
`

const SectionBackgroundEvents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F7E0D7;
`
const ContentEvents = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        display: none;        
    }
`
const ContentEventsGrid = styled.div`
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-columns: auto auto;
`
const ContentEventsMore = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-between;    
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
    font-size: 3vh;
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
    height: 20vh;
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
const ContentEventRow = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;
`
const EventHeader = styled.div`
    width: 100%;
    height: 100%;
    padding: 6vh 3vw 1.5vh 3vw;
    @media (max-width: ${props => Breakpoint.md}) {
        padding-top: 6vh;
        padding-bottom: 4vh;
        padding-left: 3vw;    
    }
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
const ContentEventsCell = styled.div`
    width: 100%;
    height: 100%;
`
const EventImage = styled('div')<{src?:string,transformOrigin?:string,noTransform?:boolean}>`
    width: 25vw;
    height: 50vh;
    height: 100%;
    display: inline-block;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
    filter: grayscale(1);
    &:hover {
        transform: scale(${props => props.noTransform ? 1 : 1.1});
        transform-origin: ${props => props.transformOrigin};
        filter: grayscale(0);
        z-index: 100;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 100%;
        height: 100%;
    }    
`
const EventImageMobile = styled('img')<{}>`
        width: 100%;
        height: 100%;
`
const ContentEventsMobile = styled.div`
    width: 100%;
    display: none;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        display: flex;        
    }
`
const EventCarouselPrevButton = styled.div`
    width: 4vh;
    height: 4vh;
    border-radius: 1.2vh;
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
    width: 4vh;
    height: 4vh;
    border-radius: 1.2vh;
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


const SIContainer = styled('div')<{top?:number,bottom?:number}>`
    position: absolute;
    bottom: ${props => props.bottom}%;
    left: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    -webkit-transition: all 1s ease;
    transition-delay: 400ms;
`
const SICircle = styled('div')<{bg?:string}>`
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    background-color: transparent;
    border: 0.2vh solid ${props => props.bg};
    // mix-blend-mode: difference;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SIPageText = styled('span')<{bg?:string}>`
    font-family: syncopate-bold;
    font-size: ${props => 7.5 * 0.3}vh;
    color: ${props => props.bg};
    margin-top: 5%;
`
const SIArrowUp = styled('div')<{bg?:string,show?:boolean}>`
    border: solid ${props => props.bg};
    border-width: 0 0.2vh 0.2vh 0;
    display: ${props => props.show ? 'inline-block' : 'none'};
    padding: 0.3vh;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-bottom: 0.2vh;
`
const SIArrowDown = styled('div')<{bg?:string,show?:boolean}>`
    border: solid ${props => props.bg};
    border-width: 0 0.2vh 0.2vh 0;
    display: ${props => props.show ? 'inline-block' : 'none'};
    padding: 0.3vh;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: 0.2vh;
`
const ScrollIndicator = (props:any) => {
    console.log(props.page, props.totalPage)
    let bottomVal = 0;
    let bgColor = '#fff';
    switch(props.page) {
        case 1:
            bottomVal = 5;
            bgColor = '#fff';
            break;
        case 2:
            bottomVal = 12;
            bgColor = '#000';
            break;
        case 3:
            bottomVal = 12;
            bgColor = '#000';
            break;
        case 4:
            bottomVal = 17;
            bgColor = '#fff';
            break;
        case 5:
            bottomVal = 9;
            bgColor = '#fff';
            break;
        case 6:
            bottomVal = 15;
            bgColor = '#000';
            break;
        default:
            bottomVal = 5;
            bgColor = '#fff';
            break;
    }


    return (
        <SIContainer bottom={bottomVal}>
            <SIArrowUp bg={bgColor} show={(props.page == 0 || props.page == 1) ? false : true}/>
            <SICircle bg={bgColor}>
                <SIPageText bg={bgColor}>{props.page || 1}</SIPageText>
            </SICircle>
            <SIArrowDown bg={bgColor} show={(props.page >= 6) ? false : true}/>
        </SIContainer>
    )
}