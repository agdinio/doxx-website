import React from 'react';
import styled from "styled-components";
import {Breakpoint} from "../constants";

export default function TermsModal(props:any) {
    return (
        <Container>
            <ModalWrap>
                <Header>
                    <HeaderText>Terms of use</HeaderText>
                    <CloseButton onClick={props.close}/>
                </Header>
                <Line/>
                <Content>
                    <ContentText marginBottom={2}>
                        Last Updated: June 6, 2022
                    </ContentText>
                    <ContentText marginBottom={2}>
                        Please read these Terms of Use (the “Terms”) and our Privacy Policy carefully because they govern your use of the website located at https://do-xx.com/ and the content and functionalities accessible via the Site (collectively, the “Site”) offered by DO-XX Studio, a Singapore corporation.
                    </ContentText>
                    <ContentText marginBottom={2}>
                        DO-XX Studio maintains the Site as a portal for information, news and updates about non-fungible tokens, projects and services. For the avoidance of doubt, DO-XX Studio does not control the Ethereum blockchain protocol (“Protocol”) and cannot control activity and data on the Protocol, the validation of transactions on the Protocol, or use of the Protocol.
                    </ContentText>
                    <ContentText>
                        IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND DO-XX STUDIO THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY SECTION 14 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION.   HOWEVER, IF YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO ARBITRATE IN SECTION ‎14 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION 13 (GOVERNING LAW) WILL APPLY INSTEAD.
                    </ContentText>

                    <UL>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Agreement to Terms. By using our Site, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the Site.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Privacy Policy. Please review our Privacy Policy, which also governs your use of the Site, for information on how we collect, use and share your information.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Changes to these Terms or the Site. We may update the Terms from time to time at our sole discretion. If we do, we’ll let you know by posting the updated Terms on the Site. It’s important that you review the Terms whenever we update them or you use the Site. If you continue to use the Site after we have posted updated Terms it means that you accept and agree to the changes. If you don’t agree to be bound by the changes, you may not use the Site anymore. We may change or discontinue all or any part of the Site, at any time and without notice, at our sole discretion.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Who May Use the Site? You may use the Site only if you are 18 years or older and capable of forming a binding contract with DO-XX Studio, and not otherwise barred from using the Site under applicable law.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Feedback. We value your feedback on the Site, but please don’t send us suggestions for improvements, creative ideas, designs, pitch portfolios or other materials (collectively “Unsolicited Ideas”). This policy is aimed at avoiding potential disputes or misunderstandings when our Site might seem similar to Unsolicited Ideas that people submit. We may currently be developing, have developed or in the future will develop ideas or materials internally or receive ideas or materials from other parties that may be similar to Unsolicited Ideas. If you ignore this policy and send us your Unsolicited Ideas anyway, you grant us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sublicensable and transferable license under any and all intellectual property or other rights that you own or control to use, copy, modify, create derivative works based upon, make, have made, sell, offer for sale, import and otherwise exploit in any manner or medium whatsoever known now or in the future your Unsolicited Ideas for any purpose, without compensation to you.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                DO-XX Studio’ Intellectual Property.  We may make available through the Site content that is subject to intellectual property rights. We or our licensors, or the third parties who otherwise own the intellectual property rights, retain all rights to that content.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                General Prohibitions and DO-XX Studio’ Enforcement Rights. You agree not to do any of the following:
                            </ContentText>
                            <UL style={{marginTop:'1vh',marginLeft:'1vw'}}>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Use, display, mirror or frame the Site or any individual element within the Site, Site’s name, any DO-XX Studio trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without DO-XX Studio’ express written consent;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Access, tamper with, or use non-public areas of the Site, DO-XX Studio’ computer systems, or the technical delivery systems of DO-XX Studio’ providers;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Attempt to probe, scan or test the vulnerability of any DO-XX Studio’ system or network or breach any security or authentication measures;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by DO-XX Studio or any of DO-XX Studio’ providers or any other third party (including another user) to protect the Site;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Attempt to access or search the Site or download content from the Site using any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by DO-XX Studio or other generally available third-party web browsers;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Use the Site, or any portion thereof, for any commercial purpose or for the benefit of any third party or in any manner not permitted by these Terms;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Site;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Site;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Impersonate or misrepresent your affiliation with any person or entity;
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Violate any applicable law or regulation; or
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Encourage or enable any other individual to do any of the foregoing.
                                    </ContentText>
                                </li>
                            </UL>
                        </li>
                        <VerticalSpace/>
                        <ContentText marginTop={3}>
                            DO-XX Studio is not obligated to monitor access to or use of the Site or to review or edit any content. However, we have the right to do so for the purpose of operating the Site, to ensure compliance with these Terms and to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider it objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Site. We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law.
                        </ContentText>
                        <VerticalSpace/>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Links to Third Party Websites or Resources. The Site may allow you to access third-party websites or other resources. We provide access only as a convenience and are not responsible for the content, products or services on or available from those resources or links displayed on such websites. You acknowledge sole responsibility for and assume all risk arising from your use of any third-party resources.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Termination. We may suspend or terminate your access to and use of the Site, at our sole discretion, at any time and without notice to you. Upon any termination, discontinuation or cancellation of these Terms or the Site, the following Sections will survive: 5, 6, 8, ‎9, 10, ‎11, ‎12, ‎13, ‎14, and 15.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Warranty Disclaimers.
                            </ContentText>
                            <UL style={{marginTop:'1vh',marginLeft:'1vw'}}>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        THE SITE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. We make no warranty that the Site will meet your requirements or be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality, accuracy, timeliness, truthfulness, completeness or reliability of any information or content on the Site. Any reliance you place on such information or content is strictly at your own risk.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        To the extent the Site allows you to interact with the Protocol, you understand that your use of the Protocol is entirely at your own risk. The Protocol is available on an “as is” basis without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, quiet enjoyment and non-infringement. You assume all risks associated with using the Protocol, and digital assets and decentralized systems generally, including but not limited to, that digital assets are highly volatile; you may not have ready access to assets; and you may lose some or all of your tokens or other assets. You agree that you will have no recourse against DO-XX Studio or anyone else for any losses due to the use of the Protocol. For example, these losses may arise from or relate to: (i) lost funds; (ii) server failure or data loss; (iii) corrupted cryptocurrency wallet files; (iv) unauthorized access; (v) errors, mistakes, or inaccuracies; or (vi) third-party activities.
                                    </ContentText>
                                </li>
                            </UL>
                        </li>
                        <VerticalSpace/>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Indemnity. You will indemnify and hold DO-XX Studio and its officers, directors, employees and agents, harmless from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with (a) your access to or use of the Site, or (b) your violation of these Terms.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Limitation of Liability.
                            </ContentText>
                        </li>
                        <UL style={{marginTop:'1vh',marginLeft:'1vw'}}>
                            <li style={{listStyleType: 'decimal'}}>
                                <ContentText>
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER DO-XX Studio NOR ITS SERVICE PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SITE WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT DO-XX Studio OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                                </ContentText>
                            </li>
                            <li style={{listStyleType: 'decimal'}}>
                                <ContentText>
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL DO-XX Studio’ TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SITE EXCEED ONE HUNDRED U.S. DOLLARS ($100).
                                </ContentText>
                            </li>
                            <li style={{listStyleType: 'decimal'}}>
                                <ContentText>
                                    THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN DO-XX Studio AND YOU.
                                </ContentText>
                            </li>
                        </UL>
                        <VerticalSpace/>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Governing Law and Forum Choice. These Terms and any action related thereto will be governed by the Singapore law. Except as otherwise expressly set forth in Section 14 “Dispute Resolution,” the exclusive jurisdiction for all Disputes (defined below) that you and DO-XX Studio are not required to arbitrate will be the courts in Singapore, and you and DO-XX Studio each waive any objection to jurisdiction and venue in such courts.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Dispute Resolution.
                            </ContentText>
                            <UL style={{marginTop:'1vh',marginLeft:'1vw'}}>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Informal Resolution of Disputes.  You and DO-XX Studio must first attempt to resolve any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services (collectively, “Disputes”) informally.  Accordingly, neither you nor DO-XX Studio may start a formal arbitration proceeding for at least sixty (60) days after one party notifies the other party of a claim in writing.  As part of this informal resolution process, you must deliver your written notices via hand or first-class mail to us at DO-XX Studio, Attn: DO-XX Studio.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Mandatory Arbitration of Disputes. We each agree that any Dispute will be resolved solely by binding, individual arbitration and not in a class, representative or consolidated action or proceeding. You and DO-XX Studio agree that the Singapore laws governs the interpretation and enforcement of these Terms, and that you and DO-XX Studio are each waiving the right to a trial by jury or to participate in a class action. This arbitration provision shall survive termination of these Terms.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Exceptions. As limited exceptions to Section 14(a) above: (i) we both may seek to resolve a Dispute in small claims court if it qualifies; and (ii) we each retain the right to seek injunctive or other equitable relief from a court to prevent (or enjoin) the infringement or misappropriation of our intellectual property rights.
                                    </ContentText>
                                    <VerticalSpace/>
                                    <ContentText>
                                        Any arbitration hearings will take place in the county (or parish) where you live, unless we both agree to a different location. The parties agree that the arbitrator shall have exclusive authority to decide all issues relating to the interpretation, applicability, enforceability and scope of this arbitration agreement.
                                    </ContentText>
                                    <VerticalSpace/>
                                    <ContentText>
                                        Arbitration Costs. Payment of all filing, administration and arbitrator fees will not be sought by us, unless the arbitrator finds your Dispute frivolous. If we prevail in arbitration, we’ll pay all of our attorneys’ fees and costs and won’t seek to recover them from you. If you prevail in arbitration you will be entitled to an award of attorneys’ fees and expenses to the extent provided under applicable law.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Injunctive and Declaratory Relief. Except as provided in Section ‎14(c) above, the arbitrator shall determine all issues of liability on the merits of any claim asserted by either party and may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. To the extent that you or we prevail on a claim and seek public injunctive relief (that is, injunctive relief that has the primary purpose and effect of prohibiting unlawful acts that threaten future injury to the public), the entitlement to and extent of such relief must be litigated in a civil court of competent jurisdiction and not in arbitration. The parties agree that litigation of any issues of public injunctive relief shall be stayed pending the outcome of the merits of any individual claims in arbitration.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Class Action Waiver. YOU AND DO-XX Studio AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, if the parties’ Dispute is resolved through arbitration, the arbitrator may not consolidate another person’s claims with your claims, and may not otherwise preside over any form of a representative or class proceeding. If this specific provision is found to be unenforceable, then the entirety of this Dispute Resolution section shall be null and void.
                                    </ContentText>
                                </li>
                                <li style={{listStyleType: 'decimal'}}>
                                    <ContentText>
                                        Severability. With the exception of any of the provisions of these Terms (“Class Action Waiver”), if an arbitrator or court of competent jurisdiction decides that any part of these Terms is invalid or unenforceable, the other parts of these Terms will still apply.
                                    </ContentText>
                                    <VerticalSpace/>
                                    <ContentText>
                                        General Terms.
                                    </ContentText>
                                    <UL>
                                        <li style={{listStyleType: 'decimal'}}>
                                            <ContentText>
                                                Reservation of Rights. DO-XX Studio and its licensors exclusively own all right, title and interest in and to the Site, including all associated intellectual property rights. You acknowledge that the Site is protected by copyright, trademark, and other laws in Singapore and other jurisdictions. You agree not to remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Site.
                                            </ContentText>
                                        </li>
                                        <li style={{listStyleType: 'decimal'}}>
                                            <ContentText>
                                                Entire Agreement. These Terms constitute the entire and exclusive understanding and agreement between DO-XX Studio and you regarding the Site, and these Terms supersede and replace all prior oral or written understandings or agreements between DO-XX Studio and you regarding the Site. If any provision of these Terms is held invalid or unenforceable by a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. Except where provided by applicable law in your jurisdiction, you may not assign or transfer these Terms, by operation of law or otherwise, without DO-XX Studio’ prior written consent. Any attempt by you to assign or transfer these Terms absent our consent or your statutory right, without such consent, will be null. DO-XX Studio may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.
                                            </ContentText>
                                        </li>
                                    </UL>
                                </li>
                            </UL>
                        </li>
                        <VerticalSpace/>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Notices. Any notices or other communications provided by DO-XX Studio under these Terms will be given by posting to the Site.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Waiver of Rights. DO-XX Studio’ failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of DO-XX Studio. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.
                            </ContentText>
                        </li>
                        <li style={{listStyleType: 'decimal'}}>
                            <ContentText>
                                Contact Information. If you have any questions about these Terms or the Site, please contact DO-XX Studio at hello@do-xx.com.
                            </ContentText>
                        </li>
                    </UL>
                </Content>
            </ModalWrap>
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    width: 100%;
`
const ModalWrap = styled.div`
    margin: 2vw;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    border-radius: 0.3vw;
    overflow: hidden;
    background-color: #fff;
    @media (max-width: ${props => Breakpoint.md}) {
        margin: 2vh;
    }    
`
const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`
const HeaderText = styled.span`
    font-family: syncopate-bold;
    font-size: 3.5vw;
    color: #000;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 3.5vh;
    }
`
const CloseButton = styled.div`
    width: 10vw;
    height: 4vw;
    background-color: #5500C0;
    border-radius: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:after {
        content: 'Close';
        font-family: syncopate-bold;
        font-size: ${props => 5 * 0.25}vw;
        color: #fff;
        line-height: 0.9;
    }
    @media (max-width: ${props => Breakpoint.md}) {
        width: 12vh;
        height: 5vh;
        border-radius: 5vh;
        &:after {
            font-size: ${props => 5 * 0.3}vh;
        }
    }
`
const Line = styled.hr`
    width: 100%;
    border: none;
    border-bottom: 0.09vw solid #000;
    margin: 2vw 0;
    @media (max-width: ${props => Breakpoint.md}) {
        margin: 3vh 0;    
        border-bottom: 0.15vh solid #000;
    }
`
const Content = styled.div`
    width: 100%;
    height; auto;
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => Breakpoint.md}) {
        padding: 0;
    }
`
const ContentText = styled('span')<{marginTop?:number,marginBottom?:number}>`
    font-family: poppins-light;
    font-size: 1.4vw;
    margin-top: ${props => props.marginTop || 0}vw;
    margin-bottom: ${props => props.marginBottom || 0}vw;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 1.7vh;
        margin-top: ${props => (props.marginTop || 0) * 0.9 || 0}vw;
        margin-bottom: ${props => (props.marginBottom || 0) * 0.9 || 0}vh;
    }
`
const UL = styled.ul`
    font-family: poppins-light;
    font-size: 1.4vw;
    @media (max-width: ${props => Breakpoint.md}) {
        font-size: 1.7vh;
    }
`
const VerticalSpace = styled.div`
    height: 1vw;
`


