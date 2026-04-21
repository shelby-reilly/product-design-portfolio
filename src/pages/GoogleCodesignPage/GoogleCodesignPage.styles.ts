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
    width: 'clamp(42px, 4vw, 58px)',
    height: 'auto',
    display: 'block',
    maxWidth: '100%',
    objectFit: 'contain',
    objectPosition: 'left center',
    flex: '0 0 auto',
    pointerEvents: $activeTool === 'emoji' || $activeTool === 'commenting-cursor' ? 'none' : 'auto',
    marginBottom: 'clamp(12px, 2vw, 24px)',
    marginLeft: 'clamp(0px, 0.6vw, 10px)',
    [theme.breakpoints.down('md')]: {
        width: '52px',
        marginBottom: '12px',
        marginLeft: 0,
    },
}))

export const MidSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(520px, 1fr) minmax(430px, 1fr)',
    alignItems: 'center',
    gap: 'clamp(56px, 6vw, 98px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'minmax(480px, 1.05fr) minmax(340px, 0.95fr)',
        gap: '44px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}))

export const DemoWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    pointerEvents: 'auto',
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}))

export const DemoPlaceholder = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '820px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    filter: 'drop-shadow(0 22px 36px rgba(0, 0, 0, 0.42))',
    [theme.breakpoints.down('md')]: {
        maxWidth: '520px',
    },
}))

export const MacBookImage = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
    position: 'relative',
    zIndex: 1,
    userSelect: 'none',
    pointerEvents: 'none',
}))

export const DemoVideo = styled('video')(() => ({
    position: 'absolute',
    top: '11.6%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '76.2%',
    height: 'auto',
    borderRadius: '6px',
    objectFit: 'cover',
    display: 'block',
    zIndex: 2,
    userSelect: 'none',
    pointerEvents: 'none',
}))

export const DescriptionWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '12px',
    textAlign: 'right',
    pointerEvents: 'auto',
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        textAlign: 'center',
    },
}))

export const GoogleCodesignLogo = styled('img')(({theme}) => ({
    width: 'clamp(260px, 23vw, 380px)',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    marginBottom: '8px',
    userSelect: 'none',
    [theme.breakpoints.down('md')]: {
        width: 'min(320px, 84vw)',
    },
}))

export const LineText = styled('p')(({theme}) => ({
    margin: 0,
    maxWidth: '28ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(16px, 1.55vw, 24px)',
    lineHeight: 1.34,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
        maxWidth: '25ch',
        fontSize: '18px',
    },
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
    marginTop: 'clamp(22px, 2.6vw, 34px)',
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
        boxShadow: '8px 8px 0 rgba(198, 208, 255, 0.56)',
    },
}))
