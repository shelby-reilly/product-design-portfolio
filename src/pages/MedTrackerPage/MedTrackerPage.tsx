import React, {useCallback, useEffect, useRef, useState} from 'react'
import {
    ButtonRow,
    CarouselShell,
    CarouselTrack,
    CaseStudyButton,
    DesktopPhoneGroup,
    DescriptionWrapper,
    Dot,
    Dots,
    ImagesWrapper,
    LineText,
    LogoImage,
    MainWrapper,
    MedTrackerLogo,
    MidSection,
    MobileCaseStudyButton,
    MobileHeader,
    MobileMeta,
    MobileSection,
    MetaGroup,
    PhoneImg,
    PhoneFrame,
    Slide,
    StickyCTA,
    SubLineText,
} from './MedTrackerPage.styles'
import {useZoomPanInteraction} from '../../hooks/useZoomPanInteraction'
import {GlobalStyles, useMediaQuery, useTheme} from '@mui/material'
import {useSearchContext} from '../../context/SearchContext'
import {useZoomPanContext} from '../../context/ZoomPanContext'


import mainMobile from '../../assets/images/main-mobile.png'
import movedMobile from '../../assets/images/moved-mobile.png'
import bulkMobile from '../../assets/images/bulk-mobile.png'
import medTrackerLogo from '../../assets/images/medtracker-logo-small.png'

export default function MedTrackerPage() {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))


    const sectionRef = useRef<HTMLDivElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)
    const descRef = useRef<HTMLDivElement>(null)

    const imagesInteraction = useZoomPanInteraction(imagesRef)
    const descInteraction = useZoomPanInteraction(descRef)
    const {registerItem, unregisterItem, registerGroupAnchor} = useSearchContext()
    const {activeTool} = useZoomPanContext()


    const trackRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<HTMLDivElement[]>([])
    const [active, setActive] = useState(0)
    const setSlideRef = useCallback((el: HTMLDivElement | null, i: number) => {
        if (!el) return
        slideRefs.current[i] = el
    }, [])

    const onScroll = useCallback(() => {
        const track = trackRef.current
        if (!track) return
        const center = track.getBoundingClientRect().left + track.clientWidth / 2
        let closest = 0
        let minDist = Infinity
        slideRefs.current.forEach((s, idx) => {
            if (!s) return
            const r = s.getBoundingClientRect()
            const c = r.left + r.width / 2
            const d = Math.abs(c - center)
            if (d < minDist) {
                minDist = d;
                closest = idx
            }
        })
        setActive(closest)
    }, [])

    const scrollToIdx = (idx: number) => {
        const track = trackRef.current
        const target = slideRefs.current[idx]
        if (!track || !target) return
        const left = target.offsetLeft - (track.clientWidth - target.clientWidth) / 2
        track.scrollTo({left, behavior: 'smooth'})
    }

    useEffect(() => {
        const items: { id: string; ref: React.RefObject<HTMLElement> }[] = [
            {id: 'med-images', ref: imagesRef},
            {id: 'med-description', ref: descRef}
        ]
        items.forEach((it) => it.ref.current && registerItem({id: it.id, element: it.ref.current}))
        sectionRef.current && registerGroupAnchor('MedTracker', sectionRef.current, 1)
        return () => {
            items.forEach((it) => unregisterItem(it.id))
        }
    }, [registerItem, unregisterItem, registerGroupAnchor])

    const handleCaseStudyClick = () => {
        window.location.hash = '#/medtracker-project'
    }


    useEffect(() => {
        if (isDesktop) return
        const tr = trackRef.current
        const first = slideRefs.current[0]
        if (tr && first) {
            const left = first.offsetLeft - (tr.clientWidth - first.clientWidth) / 2
            tr.scrollTo({left})
            setActive(0)
        }
    }, [isDesktop])


    useEffect(() => {
        const containers = Array.from(document.querySelectorAll<HTMLElement>('.konvajs-content'))
        const carouselTrack = trackRef.current
        const elements = carouselTrack ? [...containers, carouselTrack] : containers
        if (!elements.length) return

        const cleanups: Array<() => void> = []

        elements.forEach((el) => {
            let startX = 0
            let startY = 0
            let locked: 'x' | 'y' | null = null


            const onPointerDown = (e: PointerEvent) => {
                startX = e.clientX
                startY = e.clientY
                locked = null
            }
            const onPointerMove = (e: PointerEvent) => {
                const dx = e.clientX - startX
                const dy = e.clientY - startY
                if (locked == null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
                    locked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
                }
                if (locked === 'x') {

                    ;(e as any).stopImmediatePropagation?.()
                    e.stopPropagation()
                    e.preventDefault()
                }

            }

            const onTouchStart = (e: TouchEvent) => {
                const t = e.touches[0]
                if (!t) return
                startX = t.clientX
                startY = t.clientY
                locked = null
            }
            const onTouchMove = (e: TouchEvent) => {
                const t = e.touches[0]
                if (!t) return
                const dx = t.clientX - startX
                const dy = t.clientY - startY
                if (locked == null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
                    locked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
                }
                if (locked === 'x') {
                    ;(e as any).stopImmediatePropagation?.()
                    e.stopPropagation()
                }
            }


            el.addEventListener('pointerdown', onPointerDown, {capture: true, passive: true})
            el.addEventListener('pointermove', onPointerMove, {capture: true, passive: false})
            el.addEventListener('touchstart', onTouchStart, {capture: true, passive: true})
            el.addEventListener('touchmove', onTouchMove, {capture: true, passive: false})

            cleanups.push(() => {
                el.removeEventListener('pointerdown', onPointerDown, {capture: true} as any)
                el.removeEventListener('pointermove', onPointerMove, {capture: true} as any)
                el.removeEventListener('touchstart', onTouchStart, {capture: true} as any)
                el.removeEventListener('touchmove', onTouchMove, {capture: true} as any)
            })
        })

        return () => cleanups.forEach((fn) => fn())
    }, [trackRef])

    return (
        <MainWrapper ref={sectionRef}>

            <GlobalStyles styles={{
                '.konvajs-content': {
                    touchAction: 'pan-y pinch-zoom',
                    overscrollBehaviorX: 'contain',
                },
            }}/>

            <LogoImage
                src={`${process.env.PUBLIC_URL}/images/vmware.png`}
                alt="VMware Logo"
                $activeTool={activeTool}
                onClick={handleCaseStudyClick}
            />

            {isDesktop && (
                <MidSection>
                    <ImagesWrapper
                        ref={imagesRef}
                        onClick={handleCaseStudyClick}
                        onMouseDown={imagesInteraction.handleMouseDown}
                        onMouseMove={imagesInteraction.handleMouseMove}
                        onMouseUp={imagesInteraction.handleMouseUp}
                        onMouseLeave={imagesInteraction.handleMouseLeave}
                        role="button"
                        tabIndex={0}
                        aria-label="Open MedTracker case study"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                handleCaseStudyClick()
                            }
                        }}
                    >
                        <DesktopPhoneGroup>
                            <PhoneFrame $offset={36} $width={210}>
                                <PhoneImg
                                    src={`${process.env.PUBLIC_URL}/images/iphone-bulk-inventory.png`}
                                    alt="MedTracker — Bulk inventory"
                                    draggable={false}
                                />
                            </PhoneFrame>
                            <PhoneFrame $offset={-16} $width={250}>
                                <PhoneImg
                                    src={`${process.env.PUBLIC_URL}/images/iphone-battalions.png`}
                                    alt="MedTracker — Battalions"
                                    draggable={false}
                                />
                            </PhoneFrame>
                            <PhoneFrame $offset={36} $width={210}>
                                <PhoneImg
                                    src={`${process.env.PUBLIC_URL}/images/iphone-move-items.png`}
                                    alt="MedTracker — Move items"
                                    draggable={false}
                                />
                            </PhoneFrame>
                        </DesktopPhoneGroup>
                    </ImagesWrapper>

                    <DescriptionWrapper
                        ref={descRef}
                        onMouseDown={descInteraction.handleMouseDown}
                        onMouseMove={descInteraction.handleMouseMove}
                        onMouseUp={descInteraction.handleMouseUp}
                        onMouseLeave={descInteraction.handleMouseLeave}
                    >
                        <MedTrackerLogo
                            src={medTrackerLogo}
                            alt="Med Tracker"
                            draggable={false}
                            data-testid="pb-logo-small"
                            onClick={handleCaseStudyClick}
                        />
                        <LineText>Streamlined medical inventory process saving {'>'} 11k hours annually.</LineText>
                        <MetaGroup>
                            <SubLineText>Senior Product Designer</SubLineText>
                            <SubLineText>2024 - 2025</SubLineText>
                        </MetaGroup>
                        <ButtonRow>
                            <CaseStudyButton onClick={handleCaseStudyClick}>
                                READ CASE STUDY
                            </CaseStudyButton>
                        </ButtonRow>
                    </DescriptionWrapper>
                </MidSection>
            )}

            {!isDesktop && (
                <MobileSection>
                    <MobileHeader ref={descRef}>
                        <MedTrackerLogo
                            src={medTrackerLogo}
                            alt="MedTracker"
                            draggable={false}
                        />
                        <LineText style={{textAlign: 'center', fontSize: '18px', marginTop: '16px'}}>
                            Streamlined medical inventory process saving {'>'} 11k hours annually.
                        </LineText>
                        <MobileMeta style={{marginTop: '12px'}}>
                            <span>Senior Product Designer</span>
                        </MobileMeta>
                        <MobileMeta>
                            <span>2024 - 2025</span>
                        </MobileMeta>
                    </MobileHeader>

                    <CarouselShell aria-label="MedTracker screens carousel">
                        <CarouselTrack
                            ref={trackRef}
                            onScroll={onScroll}
                            role="listbox"
                            aria-activedescendant={`med-slide-${active}`}
                        >
                            <Slide id="med-slide-0" ref={(el) => setSlideRef(el, 0)} role="option"
                                   aria-selected={active === 0}>
                                <PhoneImg src={mainMobile} alt="MedTracker — Battalions overview" draggable={false}/>
                            </Slide>
                            <Slide id="med-slide-1" ref={(el) => setSlideRef(el, 1)} role="option"
                                   aria-selected={active === 1}>
                                <PhoneImg src={bulkMobile} alt="MedTracker — Bulk inventory list" draggable={false}/>
                            </Slide>
                            <Slide id="med-slide-2" ref={(el) => setSlideRef(el, 2)} role="option"
                                   aria-selected={active === 2}>
                                <PhoneImg src={movedMobile} alt="MedTracker — Move items flow" draggable={false}/>
                            </Slide>
                        </CarouselTrack>

                        <Dots>
                            {[0, 1, 2].map((i) => (
                                <Dot
                                    key={i}
                                    data-active={active === i}
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => scrollToIdx(i)}
                                />
                            ))}
                        </Dots>
                    </CarouselShell>

                    <StickyCTA>
                        <MobileCaseStudyButton onClick={handleCaseStudyClick}>
                            READ CASE STUDY
                        </MobileCaseStudyButton>
                    </StickyCTA>
                </MobileSection>
            )}
        </MainWrapper>
    )
}
