import React, {useEffect, useRef} from 'react'
import {useZoomPanInteraction} from '../../hooks/useZoomPanInteraction'
import {useSearchContext} from '../../context/SearchContext'
import {
    ButtonRow,
    DescriptionWrapper,
    LogoTitle,
    LeoArt,
    LineText,
    MainWrapper,
    MetaGroup,
    MidSection,
    PrimaryButton,
    SubLineText,
    VisualWrapper,
} from './LeoPage.styles'

import leoArt from '../../assets/images/leo/leo.svg'
import leoLogo from '../../assets/images/leo/leo-home-logo.png'

export default function LeoPage() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const visualRef = useRef<HTMLDivElement>(null)
    const copyRef = useRef<HTMLDivElement>(null)

    const visualInteraction = useZoomPanInteraction(visualRef)
    const copyInteraction = useZoomPanInteraction(copyRef)
    const {registerGroupAnchor} = useSearchContext()

    useEffect(() => {
        sectionRef.current && registerGroupAnchor('Leo AI', sectionRef.current, 4)
    }, [registerGroupAnchor])

    const openCaseStudy = () => {
        window.location.hash = '#/leo-project'
    }

    return (
        <MainWrapper ref={sectionRef}>
            <MidSection>
                <DescriptionWrapper
                    ref={copyRef}
                    onMouseDown={copyInteraction.handleMouseDown}
                    onMouseMove={copyInteraction.handleMouseMove}
                    onMouseUp={copyInteraction.handleMouseUp}
                    onMouseLeave={copyInteraction.handleMouseLeave}
                >
                    <LogoTitle src={leoLogo} alt="Leo AI"/>
                    <LineText>
                        A mental health conversational AI concept for first responders, designed to create lower-friction
                        support around an issue that too often goes unaddressed until crisis.
                    </LineText>

                    <MetaGroup>
                        <SubLineText>Master&apos;s thesis</SubLineText>
                        <SubLineText>2019-2021</SubLineText>
                        <SubLineText>Georgia Tech master&apos;s project</SubLineText>
                        <SubLineText>Lit review, interviews, ride-alongs, codesign, concept prototyping</SubLineText>
                        <SubLineText>Problem framing with GTPD and Dr. Bruce Walker</SubLineText>
                    </MetaGroup>

                    <ButtonRow>
                        <PrimaryButton
                            href="#/leo-project"
                            onClick={(event) => {
                                event.preventDefault()
                                openCaseStudy()
                            }}
                        >
                            Read case study
                        </PrimaryButton>
                    </ButtonRow>
                </DescriptionWrapper>

                <VisualWrapper
                    ref={visualRef}
                    onMouseDown={visualInteraction.handleMouseDown}
                    onMouseMove={visualInteraction.handleMouseMove}
                    onMouseUp={visualInteraction.handleMouseUp}
                    onMouseLeave={visualInteraction.handleMouseLeave}
                >
                    <a
                        href="#/leo-project"
                        onClick={(event) => {
                            event.preventDefault()
                            openCaseStudy()
                        }}
                        aria-label="Open Leo AI project"
                        style={{display: 'block', width: '100%'}}
                    >
                        <LeoArt src={leoArt} alt="Leo AI product visual"/>
                    </a>
                </VisualWrapper>
            </MidSection>
        </MainWrapper>
    )
}
