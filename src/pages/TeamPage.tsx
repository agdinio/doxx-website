import React from 'react';
import OwlCarousel from "react-owl-carousel";
import logoDoxxSmallWhite from "../assets/images/doxx-logo-small-white.svg";
import ScrollArrow from "../components/ScrollArrow";
import styled from "styled-components";
import {Breakpoint} from "../constants";

const teamMembers = [
    {alias: 'Vyrie', image: require('../assets/images/team/vyrie.png').default, desc: 'Certified degen turned builder', color: '#EF8698'},
    {alias: 'Soda', image: require('../assets/images/team/soda.png').default, desc: 'Ideas + Caffeine = BUSINESS', color: '#FFFFFF'},
    {alias: 'Bibliophile', image: require('../assets/images/team/coffeeholic.png').default, desc: 'Exploring new worlds', color: '#E4951D'},
    {alias: 'Bongo', image: require('../assets/images/team/bongo.png').default, desc: 'You only have 1 life left', color: '#92DCBD'},
    {alias: 'Dad Bod', image: require('../assets/images/team/dadbod.png').default, desc: 'The Code Scavenger', color: '#E7DA6C'},
    {alias: 'Saturn', image: require('../assets/images/team/saturn.png').default, desc: 'I create therefore I am', color: '#FFA16D'},
]

export default function TeamPage() {

    function handleRedirectToMain() {
        window.location.reload();
    }

    return (
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
    );
}


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
