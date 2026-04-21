import {styled} from '@mui/material/styles'

export const MainWrapper = styled('section')(({theme}) => ({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'clamp(40px, 5vw, 64px) clamp(28px, 5vw, 72px)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        alignItems: 'flex-start',
        padding: '24px 16px 40px',
    },
}))

export const MidSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(420px, 0.96fr) minmax(520px, 1.04fr)',
    alignItems: 'center',
    gap: 'clamp(56px, 6vw, 96px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'minmax(320px, 0.86fr) minmax(480px, 1.14fr)',
        gap: '42px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}))

export const DescriptionWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '12px',
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        textAlign: 'center',
    },
}))

export const ProjectBishopLogo = styled('img')(({theme}) => ({
    width: 'clamp(250px, 22vw, 360px)',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    marginBottom: '18px',
    userSelect: 'none',
    [theme.breakpoints.down('md')]: {
        width: 'min(290px, 82vw)',
        marginBottom: '12px',
    },
}))

export const DescriptiveParagraph = styled('p')(({theme}) => ({
    margin: 0,
    maxWidth: '25ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(16px, 1.55vw, 24px)',
    lineHeight: 1.34,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
        maxWidth: '24ch',
        fontSize: '18px',
    },
}))

export const RoleText = styled('div')(({theme}) => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(13px, 1.15vw, 19px)',
    lineHeight: 1.2,
    color: 'rgba(255, 255, 255, 0.72)',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}))

export const DatesText = styled(RoleText)(() => ({}))

export const ButtonRow = styled('div')(({theme}) => ({
    marginTop: 'clamp(22px, 2.6vw, 34px)',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}))

export const LearnMoreButton = styled('button')(({theme}) => ({
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

export const DemoSection = styled('div')(({theme}) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    pointerEvents: 'auto',
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        alignItems: 'center',
    },
}))

export const CtrlYBadge = styled('div')<{ $activeTool?: string }>(({theme, $activeTool}) => ({
    alignSelf: 'flex-end',
    marginRight: 'clamp(14px, 2vw, 26px)',
    marginBottom: '18px',
    pointerEvents: $activeTool === 'emoji' || $activeTool === 'commenting-cursor' ? 'none' : 'auto',
    [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginBottom: '12px',
    },
}))

export const CtrlYLogoImage = styled('img')(() => ({
    width: 'clamp(110px, 10vw, 150px)',
    height: 'auto',
    display: 'block',
    maxWidth: '100%',
    objectFit: 'contain',
    userSelect: 'none',
}))

export const DemoWrapper = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '760px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto',
    filter: 'drop-shadow(0 22px 36px rgba(0, 0, 0, 0.4))',
    [theme.breakpoints.down('md')]: {
        maxWidth: '460px',
    },
}))

export const IpadImage = styled('img')(() => ({
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
    top: '50.2%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '91.8%',
    height: 'auto',
    borderRadius: '4px',
    objectFit: 'contain',
    zIndex: 2,
    userSelect: 'none',
    pointerEvents: 'none',
}))
