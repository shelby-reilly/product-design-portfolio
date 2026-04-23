import React from 'react'
import {GlobalStyles} from '@mui/material'
import FloatingTopNav from '../../components/FloatingTopNav/FloatingTopNav'
import {
    ArtifactCaption,
    ArtifactGrid,
    ArtifactTitle,
    JambaBackButton,
    ContentWrapper,
    DetailBlock,
    DetailGrid,
    DetailLabel,
    DetailValue,
    EmbedFrame,
    EmbedWrap,
    Eyebrow,
    Hero,
    HeroCopy,
    HeroImage,
    HeroMedia,
    HeroSummary,
    HeroTitle,
    ImageColumn,
    IntroGrid,
    IntroText,
    ProcessGrid,
    ProcessItem,
    ProcessNumber,
    ProjectPageContainer,
    Section,
    SectionBody,
    SectionEyebrow,
    SectionLead,
    SectionTitle,
    SplitSection,
    Statement,
    TextGrid,
    VisualFigure,
    VisualImage
} from './JambaProjectPage.styles'

import jambaReviews from '../../assets/images/jamba/jamba-reviews-clean.png'
import jambaPrototype from '../../assets/images/jamba/jamba-prototype.png'
import jambaSus from '../../assets/images/jamba/jamba-sus.png'
import jambaFrame540 from '../../assets/images/jamba/jamba-frame-540.png'
import jambaLogo from '../../assets/images/jamba/jamba-logo.png'

const figmaEmbedUrl =
    'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/V2eNGEivrXHw12JUGXYuhE/Jamba-Final-Prototype-Demo?node-id=1-2880&p=f&viewport=504%2C242%2C0.04&t=AX1lkfqcVEcRKAx3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2875&page-id=0%3A1'

export default function JambaProjectPage() {
    const handleBackClick = () => {
        window.location.hash = ''
    }

    return (
        <ProjectPageContainer>
            <GlobalStyles styles={{
                'html, body, #root': {
                    height: 'auto',
                    minHeight: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }
            }}/>

            <FloatingTopNav/>
            <JambaBackButton onClick={handleBackClick}>← Back to Portfolio</JambaBackButton>

            <ContentWrapper>
                <Hero>
                    <HeroCopy>
                        <Eyebrow>Mobile ordering case study</Eyebrow>
                        <HeroTitle src={jambaLogo} alt="Jamba"/>
                        <HeroSummary>
                            Reworking the mobile ordering journey to reduce friction, clarify decisions, and make a
                            visually refreshed app actually easier to use.
                        </HeroSummary>

                        <DetailGrid>
                            <DetailBlock>
                                <DetailLabel>Role</DetailLabel>
                                <DetailValue>UX Researcher + UX Designer</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Scope</DetailLabel>
                                <DetailValue>Customer journey, IA, mobile ordering flow, prototype testing</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Timeline</DetailLabel>
                                <DetailValue>2019</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Team</DetailLabel>
                                <DetailValue>Student team project with shared research, synthesis, and design execution</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Process</DetailLabel>
                                <DetailValue>4-phase research, redesign, usability testing, and SUS evaluation</DetailValue>
                            </DetailBlock>
                        </DetailGrid>
                    </HeroCopy>

                    <HeroMedia>
                        <HeroImage src={jambaFrame540} alt="Jamba prototype hero composition with mobile screens"/>
                    </HeroMedia>
                </Hero>

                <Section>
                    <IntroGrid>
                        <div>
                            <SectionEyebrow>Why this mattered</SectionEyebrow>
                            <SectionTitle>Better visuals were not the real fix.</SectionTitle>
                        </div>
                        <IntroText>
                            The app had already been refreshed visually, but the core ordering experience still created
                            hesitation. Reviews pointed to a gap between graphic polish and product usability, so the
                            opportunity was bigger than a UI cleanup. The real work was restructuring the journey,
                            clarifying information, and making high-intent mobile ordering feel easier to complete.
                        </IntroText>
                    </IntroGrid>
                </Section>

                <Section>
                    <SplitSection>
                        <div>
                            <SectionEyebrow>Challenge</SectionEyebrow>
                            <SectionTitle>Friction was showing up in the moments that mattered most.</SectionTitle>
                            <SectionBody>
                                Users had to work too hard to compare drinks, understand what was in them, stay
                                oriented in the flow, and move through sign-up and checkout with confidence. None of
                                these issues was dramatic on its own, but together they weakened a conversion path that
                                should have felt fast, predictable, and easy to trust.
                            </SectionBody>
                        </div>

                        <ImageColumn>
                            <VisualFigure>
                                <VisualImage src={jambaReviews} alt="Jamba app store review summary"/>
                                <ArtifactCaption>
                                    Review sentiment made the core issue clear: the interface had been refreshed, but
                                    the experience still felt harder than it should.
                                </ArtifactCaption>
                            </VisualFigure>
                        </ImageColumn>
                    </SplitSection>
                </Section>

                <Section>
                    <SectionEyebrow>Approach</SectionEyebrow>
                    <SectionTitle>A four-phase process, distilled to the decisions that mattered.</SectionTitle>
                    <SectionLead>
                        The full project included research, wireframes, mockups, prototype testing, SUS scoring, and
                        expert feedback. For the portfolio, the clearest story is how that work moved from finding
                        friction to validating a stronger ordering flow.
                    </SectionLead>

                    <ProcessGrid>
                        <ProcessItem>
                            <ProcessNumber>01</ProcessNumber>
                            <ArtifactTitle>Diagnose the weak points</ArtifactTitle>
                            <ArtifactCaption>
                                Reviewed the existing app, gathered feedback, and mapped where confusion and
                                abandonment risk were appearing across the order-ahead journey.
                            </ArtifactCaption>
                        </ProcessItem>
                        <ProcessItem>
                            <ProcessNumber>02</ProcessNumber>
                            <ArtifactTitle>Reframe the structure</ArtifactTitle>
                            <ArtifactCaption>
                                Turned findings into clearer information architecture, better labeling, stronger
                                comparison, and more visible system status.
                            </ArtifactCaption>
                        </ProcessItem>
                        <ProcessItem>
                            <ProcessNumber>03</ProcessNumber>
                            <ArtifactTitle>Iterate and validate</ArtifactTitle>
                            <ArtifactCaption>
                                Refined the experience through wireframes, mockups, and prototype testing to see
                                whether clarity and confidence actually improved.
                            </ArtifactCaption>
                        </ProcessItem>
                    </ProcessGrid>
                </Section>

                <Section>
                    <SplitSection>
                        <div>
                            <SectionEyebrow>Key insights</SectionEyebrow>
                            <SectionTitle>The UX issues were structural, not cosmetic.</SectionTitle>
                        </div>

                        <TextGrid>
                            <Statement>
                                <ArtifactTitle>Users needed stronger predictability.</ArtifactTitle>
                                <ArtifactCaption>
                                    Important steps did not clearly signal what happened, what came next, or how close
                                    someone was to finishing an order.
                                </ArtifactCaption>
                            </Statement>
                            <Statement>
                                <ArtifactTitle>Comparison was carrying too much cognitive load.</ArtifactTitle>
                                <ArtifactCaption>
                                    Product decisions were harder than they needed to be because ingredients,
                                    categories, and tradeoffs were not surfaced cleanly.
                                </ArtifactCaption>
                            </Statement>
                            <Statement>
                                <ArtifactTitle>Checkout friction was cumulative.</ArtifactTitle>
                                <ArtifactCaption>
                                    There wasn’t one catastrophic break. A series of smaller ambiguities made a
                                    high-intent purchase flow feel less smooth and less trustworthy.
                                </ArtifactCaption>
                            </Statement>
                        </TextGrid>
                    </SplitSection>
                </Section>

                <Section>
                    <SectionEyebrow>Design direction</SectionEyebrow>
                    <SectionTitle>Rebuilding clarity in the places users make decisions.</SectionTitle>
                    <SectionLead>
                        The strongest improvements came from clarifying how people browse, compare, and move forward.
                        Instead of asking users to decode the interface, the redesign made key decisions more visible
                        and easier to act on.
                    </SectionLead>

                    <ArtifactGrid>
                        <Statement>
                            <ArtifactTitle>Clearer menu architecture</ArtifactTitle>
                            <ArtifactCaption>
                                Browsing shifted from a dense category view to a more direct structure that supported
                                quicker scanning, stronger search behavior, and easier product comparison.
                            </ArtifactCaption>
                        </Statement>
                        <Statement>
                            <ArtifactTitle>More visible progress and system status</ArtifactTitle>
                            <ArtifactCaption>
                                Key steps in sign-up and ordering were reframed to make progression, next actions, and
                                current state easier to understand at a glance.
                            </ArtifactCaption>
                        </Statement>
                        <Statement>
                            <ArtifactTitle>Simpler review and checkout moments</ArtifactTitle>
                            <ArtifactCaption>
                                The redesign brought order details, hierarchy, and confirmation cues into better
                                balance so users could verify choices without extra friction.
                            </ArtifactCaption>
                        </Statement>
                        <Statement>
                            <ArtifactTitle>Research translated into product decisions</ArtifactTitle>
                            <ArtifactCaption>
                                Rather than polishing screens in isolation, the work focused on using findings to shape
                                clearer flows, better labeling, and more predictable interactions end to end.
                            </ArtifactCaption>
                        </Statement>
                    </ArtifactGrid>
                </Section>

                <Section>
                    <SplitSection>
                        <div>
                            <SectionEyebrow>Prototype</SectionEyebrow>
                            <SectionTitle>Examples of design changes in the ordering flow.</SectionTitle>
                            <SectionBody>
                                One of the clearest shifts was in the menu experience itself. The redesign simplified
                                the information architecture, made category switching more visible, and surfaced the
                                details users needed to make faster decisions. Instead of asking people to scan across
                                stacked patterns and hidden context, the flow gave the menu a clearer structure and a
                                more predictable reading path.
                            </SectionBody>
                        </div>

                        <ImageColumn>
                            <VisualFigure>
                                <VisualImage src={jambaPrototype} alt="Jamba prototype progress state"/>
                                <ArtifactCaption>
                                    Design changes included moving smoothie browsing into a cleaner vertical menu,
                                    using tabs to expose categories more clearly, keeping search visible and
                                    consistent, surfacing ingredients, calories, and price earlier, and removing
                                    persistent location details when they were not needed.
                                </ArtifactCaption>
                            </VisualFigure>
                        </ImageColumn>
                    </SplitSection>

                    <EmbedWrap>
                        <EmbedFrame
                            src={figmaEmbedUrl}
                            allowFullScreen
                            loading="lazy"
                            title="Jamba final prototype demo"
                        />
                    </EmbedWrap>
                </Section>

                <Section>
                    <SectionEyebrow>Validation</SectionEyebrow>
                    <SectionTitle>Evidence over opinion.</SectionTitle>
                    <ArtifactGrid>
                        <VisualFigure>
                            <VisualImage src={jambaSus} alt="System Usability Scale comparison for Jamba"/>
                            <ArtifactTitle>Usability direction improved</ArtifactTitle>
                            <ArtifactCaption>
                                The redesigned prototype tested better than the original experience, giving the
                                direction stronger support than visual preference alone.
                            </ArtifactCaption>
                        </VisualFigure>
                        <Statement>
                            <ArtifactTitle>What changed most</ArtifactTitle>
                            <ArtifactCaption>
                                This project reinforced a pattern that still shapes how I work: when a product feels
                                frustrating, the answer is often not more interface polish. It is better structure,
                                clearer choices, visible status, and tighter feedback loops between research and design.
                            </ArtifactCaption>
                        </Statement>
                    </ArtifactGrid>
                </Section>
            </ContentWrapper>
        </ProjectPageContainer>
    )
}
