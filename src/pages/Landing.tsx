import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Breakpoint, BreakpointInPx} from "../constants";
import logoDoxxStudio from '../assets/images/doxx-studio.svg';
import {isMobile} from "../Helper";
import ScrollArrow from "../components/ScrollArrow";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import LinesPage from "./LinesPage";
import Gallery from "./Gallery";
import Brands from "./Brands";
import FooterPage from "./FooterPage";
import {createRoot, Root} from "react-dom/client";
import TermsModal from "../components/TermsModal";
import {Modal} from "../Styles";
import TeamPage from "./TeamPage";
import CMS from "./CMS";
import Events from "./Events";
import $ from "jquery";

const speed = 600;
let activeSection = 0;

export default function Landing() {

    const refContainer = useRef(null);
    const refScrolling = useRef(null);
    const refSection = useRef<(HTMLDivElement | null)[]>([]);
    const [singleItem, setSingleItem] = useState(false);
    const [breakpoint, setBreakpoint] = useState('');
    const refModal = useRef<HTMLDivElement>(null);
    const [toggleShow, setToggleShow] = useState(1);
    // @ts-ignore
    let root: Root | null = null;

    function handleTelegramClick() {
        window.open("https://t.me/v_eth", "_blank");
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

    function responsePage() {
        const lg = Number(BreakpointInPx.lg.slice(0, -2));
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
        } else if (lg > window.innerWidth) {
            setBreakpoint('lg')
        } else {
            setBreakpoint('')
            setSingleItem(false);
        }
    }

    useEffect(() => {
        let startY: any;
        let isDown = false
        const pageLength = refSection.current.length;

        if (refScrolling.current) {


            // @ts-ignore
            refScrolling.current.addEventListener('mousedown_', (e: any) => {
                e.stopPropagation();
                isDown = true
                // startX = e.screenX + this[`tab${this.activeTab}`].offsetLeft
                startY = e.screenY + refSection.current[activeSection]?.offsetTop;
            })

            // @ts-ignore
            refScrolling.current.addEventListener('mousemove_', (e: any) => {
                e.stopPropagation();
                if (!isDown) {
                    return false;
                }

                let change = startY - e.screenY;

                // @ts-ignore
                refScrolling.current.style.top = `${-change}px`;
            })

            // @ts-ignore
            refScrolling.current.addEventListener('mouseup_', (e: any) => {
                e.stopPropagation();
                isDown = false
                // @ts-ignore
                let y = refSection.current[activeSection].offsetHeight * activeSection;
                let change = startY - e.screenY;

                let threshold = 0
                let distY = y + (e.screenY - startY)
                if (distY < 0) {
                    // @ts-ignore
                    threshold = y + refSection.current[activeSection].offsetHeight / 2;
                } else {
                    // @ts-ignore
                    threshold = y - refSection.current[activeSection].offsetHeight / 2;
                }

                if (distY < 0) {
                    let newActiveSection = 0;
                    if (change >= threshold) {
                        newActiveSection = activeSection < (pageLength - 1) ? (activeSection + 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                } else {
                    let newActiveSection = 0;
                    if (change < threshold) {
                        newActiveSection = (activeSection > 0 && activeSection < pageLength) ? (activeSection - 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                }
            })

            // @ts-ignore
            refScrolling.current.addEventListener('mouseleave_', (e: any) => {
                e.stopPropagation();
                isDown = false
                // @ts-ignore
                let y = refSection.current[activeSection].offsetHeight * activeSection;
                let change = startY - e.screenY;

                let threshold = 0
                let distY = y + (e.screenY - startY)
                if (distY < 0) {
                    // @ts-ignore
                    threshold = y + refSection.current[activeSection].offsetHeight / 2;
                } else {
                    // @ts-ignore
                    threshold = y - refSection.current[activeSection].offsetHeight / 2;
                }

                if (distY < 0) {
                    let newActiveSection = 0;
                    if (change >= threshold) {
                        newActiveSection = activeSection < 4 ? (activeSection + 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                } else {
                    let newActiveSection = 0;
                    if (change < threshold) {
                        newActiveSection = (activeSection > 0 && activeSection < 5) ? (activeSection - 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                }
            })


            /*************************************************************************************
             * MOBILE TOUCH EVENT
             *************************************************************************************/
            // @ts-ignore
            refScrolling.current.addEventListener('touchstart', (e: any) => {
                e.stopPropagation();
                startY = e.touches[0].clientY + refSection.current[activeSection]?.offsetTop;
            }, {passive: false})

            // @ts-ignore
            refScrolling.current.addEventListener('touchmove', (e: any) => {
                e.stopPropagation();
                if (!startY) {
                    return;
                }

                let change = startY - e.touches[0].clientY

                // @ts-ignore
                refScrolling.current.style.top = `${-change}px`;
            }, {passive: false})

            // @ts-ignore
            refScrolling.current.addEventListener('touchend', (e: any) => {
                e.stopPropagation();
                isDown = false
                // @ts-ignore
                let y = refSection.current[activeSection].offsetHeight * activeSection;
                let change = startY - e.changedTouches[0].clientY;

                let threshold = 0
                let distY = y + (e.changedTouches[0].clientY - startY)
                if (distY < 0) {
                    // @ts-ignore
                    threshold = y + refSection.current[activeSection].offsetHeight / 8;
                } else {
                    // @ts-ignore
                    threshold = y - refSection.current[activeSection].offsetHeight / 8;
                }

                if (distY < 0) {
                    let newActiveSection = 0;
                    if (change >= threshold) {
                        newActiveSection = activeSection < (pageLength - 1) ? (activeSection + 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.classList.toggle('animate');
                        // @ts-ignore
                        setTimeout(() => refScrolling.current.classList.toggle('animate'), 700);
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.classList.toggle('animate');
                        // @ts-ignore
                        setTimeout(() => refScrolling.current.classList.toggle('animate'), 700);
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                } else {
                    let newActiveSection = 0;
                    if (change < threshold) {
                        newActiveSection = (activeSection > 0 && activeSection < pageLength) ? (activeSection - 1) : activeSection;
                        activeSection = newActiveSection;
                        // @ts-ignore
                        refScrolling.current.classList.toggle('animate');
                        // @ts-ignore
                        setTimeout(() => refScrolling.current.classList.toggle('animate'), 700);
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    } else {
                        newActiveSection = activeSection;
                        // @ts-ignore
                        refScrolling.current.classList.toggle('animate');
                        // @ts-ignore
                        setTimeout(() => refScrolling.current.classList.toggle('animate'), 700);
                        // @ts-ignore
                        refScrolling.current.style.top = `-${newActiveSection * refSection.current[0].offsetHeight}px`;
                    }
                }

            })


            /*************************************************************************************
             * DESKTOP WHEEL EVENT
             *************************************************************************************/
            let hold = false;
            let scdir: string;

            // @ts-ignore
            refContainer.current.addEventListener('mousewheel', (e) => {
                e.stopPropagation();
                let isTrackpad = false;
                let newActiveSection = 0;
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

                if (!hold) {
                    if (scdir === 'up') {
                        if (activeSection < (refSection.current.length - 1)) {
                            newActiveSection = activeSection + 1;
                            activeSection = newActiveSection;
                        } else {
                            newActiveSection = activeSection;
                        }

                    } else if (scdir === 'down') {
                        if (activeSection > 0) {
                            newActiveSection = activeSection - 1;
                            activeSection = newActiveSection;
                        } else {
                            newActiveSection = activeSection;
                        }
                    }

                    hold = true;

                    // @ts-ignore
                    refScrolling.current.style.transform = `translateY(-${newActiveSection * refSection.current[0].offsetHeight}px)`;
                    setTimeout(() => hold = false, isTrackpad ? 1500 : speed);
                }
            })


            /*************************************************************************************
             * DESKTOP ARROW KEY EVENT
             *************************************************************************************/
            // @ts-ignore
            document.addEventListener('keydown', (e:any) => {
                e.stopPropagation();
                let newActiveSection = 0;
                if (!hold) {
                    if (e.key == 'ArrowDown') {
                        if (activeSection < (refSection.current.length - 1)) {
                            newActiveSection = activeSection + 1;
                            activeSection = newActiveSection;
                        } else {
                            newActiveSection = activeSection;
                        }
                        // @ts-ignore
                        refScrolling.current.style.transform = `translateY(-${newActiveSection * refSection.current[0].offsetHeight}px)`;

                    } else if (e.key == 'ArrowUp') {
                        if (activeSection > 0) {
                            newActiveSection = activeSection - 1;
                            activeSection = newActiveSection;
                        } else {
                            newActiveSection = activeSection;
                        }
                        // @ts-ignore
                        refScrolling.current.style.transform = `translateY(-${newActiveSection * refSection.current[0].offsetHeight}px)`;
                    }

                    hold = true;

                    setTimeout(() => hold = false, speed);
                }


                if (e.key === 'Escape') {
                    $("#event-modal-container").fadeOut('fast');
                    setToggleShow(prev => prev === 1 ? 2 : 1);
                }
            });

        }

        responsePage();
        window.onresize = () => {
            responsePage();
        }

    }, [])

    return (
        <Container ref={refContainer}>
            <Modal ref={refModal}/>
            <Scrolling ref={refScrolling}>
                <Section ref={el => refSection.current[0] = el}>
                    <FirstSectionBackground>
                        <LandingLogo src={logoDoxxStudio}/>
                        <ScrollArrow abs bottom={5} pageNum={1} arrowUpHidden white />
                    </FirstSectionBackground>
                </Section>
                <Section ref={el => refSection.current[1] = el}>
                    <SecondPage/>
                </Section>
                <Section ref={el => refSection.current[2] = el}>
                    <ThirdPage/>
                </Section>
                <Section ref={el => refSection.current[3] = el}>
                    <LinesPage/>
                </Section>
                <Section ref={el => refSection.current[4] = el}>
                    <Gallery singleItem={singleItem}/>
                </Section>
                <Section ref={el => refSection.current[5] = el}>
                    <TeamPage/>
                </Section>
                <Section ref={el => refSection.current[6] = el}>
                    <CMS/>
                </Section>
                <Section ref={el => refSection.current[7] = el}>
                    <Events/>
                </Section>
                <Section ref={el => refSection.current[8] = el}>
                    <FooterPage showTerms={handleTermsClick}/>
                </Section>
            </Scrolling>
        </Container>
    );
}

const h = window.innerHeight + 'px';
const Container = styled.div`
    position: relative;
    height: ${props => h};
    max-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
`
const Scrolling = styled.div`
    position: absolute;
    width: fill-available;
    height: auto;
    ${props => !isMobile.any() ? 'transition: all 0.7s cubic-bezier(0.5, 0, 0.5, 1)' : ''};
    &.animate {
        transition: all 0.3s cubic-bezier(0.5, 0, 0.5, 1);
    }
`

const Section = styled.div`
    position: relative;
    height: ${props => h};
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
