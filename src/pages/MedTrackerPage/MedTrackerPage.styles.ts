import {styled} from '@mui/material/styles'

export const MainWrapper = styled('section')(({theme}) => ({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 'clamp(40px, 5vw, 64px) clamp(28px, 5vw, 72px)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        padding: '24px 16px 40px',
    },
}))

export const LogoImage = styled('img')<{ $activeTool?: string }>(({theme, $activeTool}) => ({
    width: 'clamp(110px, 10vw, 150px)',
    height: 'auto',
    display: 'block',
    maxWidth: '100%',
    objectFit: 'contain',
    objectPosition: 'left center',
    flex: '0 0 auto',
    pointerEvents: $activeTool === 'emoji' || $activeTool === 'commenting-cursor' ? 'none' : 'auto',
    marginBottom: 'clamp(18px, 2.4vw, 28px)',
    marginLeft: 'clamp(2px, 0.5vw, 8px)',
    [theme.breakpoints.down('md')]: {
        width: '120px',
        marginBottom: '16px',
        marginLeft: 0,
    },
}))

export const MidSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(520px, 1.02fr) minmax(420px, 0.98fr)',
    alignItems: 'center',
    gap: 'clamp(52px, 6vw, 96px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'minmax(460px, 1fr) minmax(340px, 0.95fr)',
        gap: '40px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}))

export const ImagesWrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: 'clamp(18px, 2vw, 26px)',
    pointerEvents: 'auto',
    minWidth: 0,
    cursor: 'pointer',
}))

export const DesktopPhoneGroup = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    gap: 'clamp(22px, 2.4vw, 38px)',
    transform: 'translateX(8px)',
}))

export const PhoneFrame = styled('div')<{ $offset?: number; $width?: number }>(({ $offset = 0, $width = 180 }) => ({
    width: `${$width}px`,
    transform: `translateY(${$offset}px)`,
    flex: '0 0 auto',
    position: 'relative',
    overflow: 'visible',
    pointerEvents: 'auto',
    cursor: 'pointer',
}))

export const PhoneImg = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
    userSelect: 'none',
    WebkitUserDrag: 'none',
    filter: 'drop-shadow(0 14px 18px rgba(0, 0, 0, 0.34))',
}))

export const DescriptionWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
    gap: '10px',
    minWidth: 0,
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        textAlign: 'center',
    },
}))

export const MedTrackerLogo = styled('img')(({theme}) => ({
    width: 'clamp(250px, 22vw, 330px)',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    marginBottom: '6px',
    userSelect: 'none',
    [theme.breakpoints.down('md')]: {
        width: 'min(290px, 82vw)',
    },
}))

export const LineText = styled('p')(({theme}) => ({
    margin: 0,
    maxWidth: '24ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: 'clamp(16px, 1.55vw, 24px)',
    lineHeight: 1.32,
    fontWeight: 500,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
        maxWidth: '24ch',
        fontSize: '18px',
    },
}))

export const MetaGroup = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'inherit',
    gap: '6px',
    marginTop: '6px',
}))

export const SubLineText = styled('div')(({theme}) => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(13px, 1.15vw, 19px)',
    lineHeight: 1.2,
    color: 'rgba(255, 255, 255, 0.72)',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}))

export const ButtonRow = styled('div')(({theme}) => ({
    marginTop: 'clamp(24px, 2.8vw, 38px)',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}))

export const CaseStudyButton = styled('button')(({theme}) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'clamp(260px, 21vw, 330px)',
    minHeight: '68px',
    padding: '16px 30px',
    border: '5px solid rgba(245, 248, 255, 0.98)',
    borderRadius: '6px',
    backgroundColor: '#4361FF',
    color: '#FFFFFF',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: 'clamp(17px, 1.18vw, 20px)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxSizing: 'border-box',
    boxShadow: '12px 12px 0 rgba(198, 208, 255, 0.62)',
    pointerEvents: 'auto',
    transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
    '&:hover': {
        transform: 'translate(-2px, -2px)',
        boxShadow: '14px 14px 0 rgba(198, 208, 255, 0.68)',
        backgroundColor: '#4B67FF',
    },
    [theme.breakpoints.down('md')]: {
        minWidth: '220px',
        minHeight: '56px',
        padding: '14px 22px',
        fontSize: '15px',
        borderWidth: '4px',
        borderRadius: '5px',
        boxShadow: '8px 8px 0 rgba(198, 208, 255, 0.56)',
    },
}))

export const MobileSection = styled('section')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '8px 0 24px',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}))

export const MobileHeader = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px',
    padding: '8px 8px 0',
}))

export const MobileMeta = styled('div')(({theme}) => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '14px',
    lineHeight: 1.2,
    color: 'rgba(255, 255, 255, 0.72)',
}))

export const CarouselShell = styled('div')(() => ({
    position: 'relative',
    width: '100%',
    paddingTop: '10px',
}))

export const CarouselTrack = styled('div')(() => ({
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '72%',
    gap: '12px',
    overflowX: 'auto',
    padding: '0 36px',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    touchAction: 'pan-x pinch-zoom',
    overscrollBehaviorX: 'contain',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}))

export const Slide = styled('div')(() => ({
    scrollSnapAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'clamp(180px, 52vw, 240px)',
    pointerEvents: 'auto',
}))

export const Dots = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    paddingTop: '12px',
}))

export const Dot = styled('button')(() => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.35)',
    transition: 'transform 160ms ease, background 160ms ease',
    '&[data-active="true"]': {
        background: '#5263FF',
        transform: 'scale(1.4)',
    },
}))

export const StickyCTA = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '18px 16px 8px',
    marginTop: '22px',
}))

export const MobileCaseStudyButton = styled(CaseStudyButton)(() => ({
    minWidth: '220px',
    minHeight: '56px',
    padding: '14px 22px',
    fontSize: '15px',
}))
