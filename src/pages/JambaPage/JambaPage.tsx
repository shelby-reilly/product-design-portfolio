import React, {useEffect, useRef} from 'react'
import {useZoomPanInteraction} from '../../hooks/useZoomPanInteraction'
import {useSearchContext} from '../../context/SearchContext'
import {
    ButtonRow,
    CaseStudyButton,
    CardCluster,
    DescriptionWrapper,
    ImagesWrapper,
    JambaTitle,
    LineText,
    MainWrapper,
    MetaGroup,
    MidSection,
    PreviewCard,
    PreviewImage,
    ReviewImage,
    SignalBadge,
    SignalText,
    SignalTitle,
    SubLineText,
} from './JambaPage.styles'

import jambaWireframes from '../../assets/images/jamba/jamba-wireframes.png'
import jambaMockups from '../../assets/images/jamba/jamba-mockups.png'
import jambaPrototype from '../../assets/images/jamba/jamba-prototype.png'
import jambaReviews from '../../assets/images/jamba/jamba-reviews.png'
import jambaLogo from '../../assets/images/jamba/jamba-logo.png'

export default function JambaPage() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const visualRef = useRef<HTMLDivElement>(null)
    const copyRef = useRef<HTMLDivElement>(null)

    const visualInteraction = useZoomPanInteraction(visualRef)
    const copyInteraction = useZoomPanInteraction(copyRef)
    const {registerItem, unregisterItem, registerGroupAnchor} = useSearchContext()

    useEffect(() => {
        const items: {id: string; ref: React.RefObject<HTMLElement>}[] = [
            {id: 'jamba-visual', ref: visualRef},
            {id: 'jamba-copy', ref: copyRef}
        ]
        items.forEach((item) => item.ref.current && registerItem({id: item.id, element: item.ref.current}))
        sectionRef.current && registerGroupAnchor('Jamba', sectionRef.current, 5)
        return () => {
            items.forEach((item) => unregisterItem(item.id))
        }
    }, [registerGroupAnchor, registerItem, unregisterItem])

    const openCaseStudy = () => {
        window.location.hash = '#/jamba-project'
    }

    return (
        <MainWrapper ref={sectionRef}>
            <MidSection>
                <ImagesWrapper
                    ref={visualRef}
                    onMouseDown={visualInteraction.handleMouseDown}
                    onMouseMove={visualInteraction.handleMouseMove}
                    onMouseUp={visualInteraction.handleMouseUp}
                    onMouseLeave={visualInteraction.handleMouseLeave}
                    role="button"
                    tabIndex={0}
                    aria-label="Open Jamba case study"
                    onClick={openCaseStudy}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            openCaseStudy()
                        }
                    }}
                >
                    <CardCluster>
                        <PreviewCard $top="10px" $left="20px" $width="290px" $rotate={-4}>
                            <PreviewImage src={jambaWireframes} alt="Jamba wireframe progression"/>
                        </PreviewCard>
                        <PreviewCard $top="112px" $right="12px" $width="360px" $rotate={3}>
                            <PreviewImage src={jambaMockups} alt="Jamba mockup refinement"/>
                        </PreviewCard>
                        <PreviewCard $top="278px" $left="122px" $width="300px" $rotate={-2}>
                            <PreviewImage src={jambaPrototype} alt="Jamba prototype stepper"/>
                        </PreviewCard>
                        <SignalBadge>
                            <SignalTitle>Low satisfaction signal</SignalTitle>
                            <SignalText>
                                A visual refresh had already happened, but the order flow still wasn’t landing with users.
                            </SignalText>
                            <ReviewImage src={jambaReviews} alt="Jamba app review scores"/>
                        </SignalBadge>
                    </CardCluster>
                </ImagesWrapper>

                <DescriptionWrapper
                    ref={copyRef}
                    onMouseDown={copyInteraction.handleMouseDown}
                    onMouseMove={copyInteraction.handleMouseMove}
                    onMouseUp={copyInteraction.handleMouseUp}
                    onMouseLeave={copyInteraction.handleMouseLeave}
                >
                    <JambaTitle src={jambaLogo} alt="Jamba"/>
                    <LineText>
                        Redesigning the mobile ordering journey to reduce friction, improve clarity, and make a
                        visually refreshed app actually easier to use.
                    </LineText>

                    <MetaGroup>
                        <SubLineText>UX Researcher + UX Designer</SubLineText>
                        <SubLineText>2019</SubLineText>
                        <SubLineText>Customer journey, IA, prototype testing</SubLineText>
                        <SubLineText>4-phase research and redesign process</SubLineText>
                    </MetaGroup>

                    <ButtonRow>
                        <CaseStudyButton onClick={openCaseStudy}>Read case study</CaseStudyButton>
                    </ButtonRow>
                </DescriptionWrapper>
            </MidSection>
        </MainWrapper>
    )
}
