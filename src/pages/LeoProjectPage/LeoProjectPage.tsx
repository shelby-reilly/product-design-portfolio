import React from 'react'
import {GlobalStyles} from '@mui/material'
import FloatingTopNav from '../../components/FloatingTopNav/FloatingTopNav'
import {
    ArtifactCaption,
    ArtifactGrid,
    ArtifactTitle,
    BrandMark,
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
    ImageColumn,
    IntroGrid,
    IntroText,
    LeoBackButton,
    LinkButton,
    LinkRow,
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
    VisualFigure,
    VisualImage
} from './LeoProjectPage.styles'

import leoLogo from '../../assets/images/leo/leo-logo.png'
import leoOnboarding from '../../assets/images/leo/leo-onboarding-screens.svg'
import leoAudio from '../../assets/images/leo/leo-audio-screens.svg'

const slidesEmbedUrl =
    'https://docs.google.com/presentation/d/1I74Pv8jC8fhwP5ax1YQbwnqYxcITFA9nQY2lRf6aB98/embed?start=false&loop=false&delayms=3000'

const slidesUrl =
    'https://docs.google.com/presentation/d/1I74Pv8jC8fhwP5ax1YQbwnqYxcITFA9nQY2lRf6aB98/edit?usp=sharing'

export default function LeoProjectPage() {
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
            <LeoBackButton onClick={handleBackClick}>← Back to Portfolio</LeoBackButton>

            <ContentWrapper>
                <Hero>
                    <HeroCopy>
                        <BrandMark src={leoLogo} alt="Leo AI logo"/>
                        <Eyebrow>Master&apos;s thesis</Eyebrow>
                        <HeroSummary>
                            A mental health conversational AI concept for first responders, designed to create
                            lower-friction support around an issue that too often goes unaddressed until crisis.
                        </HeroSummary>

                        <DetailGrid>
                            <DetailBlock>
                                <DetailLabel>Focus</DetailLabel>
                                <DetailValue>Mental health support for first responders</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Scope</DetailLabel>
                                <DetailValue>Research, concept definition, onboarding, and interaction design</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Methods</DetailLabel>
                                <DetailValue>Lit review, interviews, ride-alongs, codesign, and prototyping</DetailValue>
                            </DetailBlock>
                            <DetailBlock>
                                <DetailLabel>Collaborators</DetailLabel>
                                <DetailValue>Megan Shepherd, Rayyan Thad, Stephanie Lee, GTPD, and Dr. Bruce Walker</DetailValue>
                            </DetailBlock>
                        </DetailGrid>
                    </HeroCopy>

                    <HeroMedia>
                        <HeroImage src={leoOnboarding} alt="Leo AI onboarding screens"/>
                    </HeroMedia>
                </Hero>

                <Section>
                    <IntroGrid>
                        <div>
                            <SectionEyebrow>Why this mattered</SectionEyebrow>
                            <SectionTitle>Support needed to feel lower-friction, not more clinical.</SectionTitle>
                        </div>
                        <IntroText>
                            This project started from a high-stakes reality: in 2019, more first responders died by
                            suicide than in the line of duty. Existing support systems often carried stigma, low trust,
                            or too much user effort. The design opportunity was not to make another therapy product, but
                            to explore a more approachable layer of support that better matched the day-to-day context
                            of the people it aimed to help.
                        </IntroText>
                    </IntroGrid>
                </Section>

                <Section>
                    <SplitSection>
                        <div>
                            <SectionEyebrow>Challenge</SectionEyebrow>
                            <SectionTitle>Design for real constraints, not idealized help-seeking behavior.</SectionTitle>
                            <SectionBody>
                                Research pointed to a culture shaped by pride, stigma, competitiveness, compound trauma,
                                and concern about career consequences. People were interested in better mental health
                                support, but that support needed to respect trust, timing, and low buy-in. The concept
                                had to feel useful without feeling like one more system asking users to self-identify
                                as struggling.
                            </SectionBody>
                        </div>

                        <ImageColumn>
                            <VisualFigure>
                                <VisualImage src={leoAudio} alt="Leo AI audio interaction screens"/>
                                <ArtifactCaption>
                                    The concept leaned into conversational support and guided audio interactions instead
                                    of relying only on text-heavy, high-effort flows.
                                </ArtifactCaption>
                            </VisualFigure>
                        </ImageColumn>
                    </SplitSection>
                </Section>

                <Section>
                    <SectionEyebrow>Approach</SectionEyebrow>
                    <SectionTitle>Research first, then concept narrowing.</SectionTitle>
                    <SectionLead>
                        The project moved through four phases, from understanding the problem space to defining a more
                        grounded concept direction. The strongest value came from combining literature, direct user
                        research, and codesign rather than jumping straight into interface design.
                    </SectionLead>

                    <ProcessGrid>
                        <ProcessItem>
                            <ProcessNumber>01</ProcessNumber>
                            <ArtifactTitle>Explore the landscape</ArtifactTitle>
                            <ArtifactCaption>
                                Reviewed literature, existing systems, and mental health context, then used interviews
                                to understand where current support broke down for real users.
                            </ArtifactCaption>
                        </ProcessItem>
                        <ProcessItem>
                            <ProcessNumber>02</ProcessNumber>
                            <ArtifactTitle>Study day-to-day reality</ArtifactTitle>
                            <ArtifactCaption>
                                Conducted ride-alongs and contextual conversations to better understand work rhythms,
                                emotional processing, and how existing tools fit into the job.
                            </ArtifactCaption>
                        </ProcessItem>
                        <ProcessItem>
                            <ProcessNumber>03</ProcessNumber>
                            <ArtifactTitle>Converge on the concept</ArtifactTitle>
                            <ArtifactCaption>
                                Used wall walks, design implications, brainstorming, and codesign to narrow toward a
                                lower-buy-in conversational AI direction that could support healthier habits over time.
                            </ArtifactCaption>
                        </ProcessItem>
                    </ProcessGrid>
                </Section>

                <Section>
                    <SectionEyebrow>Design direction</SectionEyebrow>
                    <SectionTitle>A supporter, not a therapist.</SectionTitle>
                    <SectionLead>
                        The resulting direction focused on a conversational system that could feel more ambient,
                        approachable, and integrated into everyday life. The point was not to replace professional care,
                        but to create a more realistic entry point for awareness, reflection, and support.
                    </SectionLead>

                    <ArtifactGrid>
                        <Statement>
                            <ArtifactTitle>Lower the activation energy</ArtifactTitle>
                            <ArtifactCaption>
                                The concept reduced the burden on users to explicitly seek help in moments when stigma
                                or exhaustion might otherwise stop them from engaging.
                            </ArtifactCaption>
                        </Statement>
                        <Statement>
                            <ArtifactTitle>Design around trust</ArtifactTitle>
                            <ArtifactCaption>
                                Research made it clear that credibility, privacy, and tone mattered just as much as
                                features. The experience needed to feel supportive without becoming intrusive.
                            </ArtifactCaption>
                        </Statement>
                        <VisualFigure>
                            <VisualImage src={leoOnboarding} alt="Leo AI onboarding experience"/>
                            <ArtifactTitle>Onboarding set the relationship</ArtifactTitle>
                            <ArtifactCaption>
                                Early screens focused on framing the system clearly, gathering a baseline, and making
                                the product feel intentional instead of vague or overly clinical.
                            </ArtifactCaption>
                        </VisualFigure>
                        <VisualFigure>
                            <VisualImage src={leoAudio} alt="Leo AI conversational audio interface"/>
                            <ArtifactTitle>Audio created a lighter interaction model</ArtifactTitle>
                            <ArtifactCaption>
                                Voice-led interactions supported a more natural, lower-friction mode of engagement than
                                a purely text-based assistant.
                            </ArtifactCaption>
                        </VisualFigure>
                    </ArtifactGrid>
                </Section>

                <Section>
                    <SectionEyebrow>Slides</SectionEyebrow>
                    <SectionTitle>The full thesis presentation.</SectionTitle>
                    <SectionLead>
                        This deck captures the broader research process, synthesis, and concept development behind the
                        project. It is embedded here as supporting depth rather than the primary storytelling format.
                    </SectionLead>
                    <LinkRow>
                        <LinkButton href={slidesUrl} target="_blank" rel="noopener noreferrer">
                            Open slides in Google
                        </LinkButton>
                    </LinkRow>
                    <EmbedWrap>
                        <EmbedFrame
                            src={slidesEmbedUrl}
                            allowFullScreen
                            loading="lazy"
                            title="Leo AI master's thesis slides"
                        />
                    </EmbedWrap>
                </Section>
            </ContentWrapper>
        </ProjectPageContainer>
    )
}
