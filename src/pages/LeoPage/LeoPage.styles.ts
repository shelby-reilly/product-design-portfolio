import {styled} from '@mui/material/styles'

export const MainWrapper = styled('section')(({theme}) => ({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 'clamp(8px, 1.5vw, 18px) clamp(28px, 5vw, 72px) clamp(30px, 4vw, 48px)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        padding: '4px 16px 34px',
    },
}))

export const MidSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(500px, 1.04fr) minmax(380px, 0.96fr)',
    alignItems: 'center',
    gap: 'clamp(44px, 6vw, 92px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'minmax(420px, 1fr) minmax(340px, 0.9fr)',
        gap: '36px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}))

export const VisualWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 0,
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginBottom: '24px',
    },
}))

export const LeoArt = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '24px',
    boxShadow: '0 22px 42px rgba(33, 45, 97, 0.22)',
    userSelect: 'none',
    WebkitUserDrag: 'none',
    transition: 'transform 180ms ease, box-shadow 180ms ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 28px 52px rgba(33, 45, 97, 0.28)',
    },
}))

export const DescriptionWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '12px',
    textAlign: 'left',
    pointerEvents: 'auto',
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        textAlign: 'center',
    },
}))

export const Title = styled('div')(() => ({
    margin: 0,
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(48px, 5vw, 80px)',
    lineHeight: 0.95,
    letterSpacing: '-0.05em',
    color: '#FFFFFF',
}))

export const LineText = styled('p')(({theme}) => ({
    margin: 0,
    maxWidth: '28ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(16px, 1.5vw, 23px)',
    lineHeight: 1.36,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
        maxWidth: '27ch',
        fontSize: '18px',
    },
}))

export const MetaGroup = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'inherit',
    gap: '6px',
    marginTop: '8px',
}))

export const SubLineText = styled('div')(() => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(13px, 1.15vw, 18px)',
    lineHeight: 1.2,
    color: 'rgba(255, 255, 255, 0.72)',
}))

export const ButtonRow = styled('div')(({theme}) => ({
    marginTop: 'clamp(22px, 2.6vw, 34px)',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}))

export const PrimaryButton = styled('a')(({theme}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'clamp(220px, 18vw, 280px)',
    minHeight: '62px',
    padding: '14px 26px',
    border: '4px solid rgba(245, 248, 255, 0.98)',
    borderRadius: '6px',
    backgroundColor: '#6180EC',
    color: '#FFFFFF',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: 'clamp(15px, 1.05vw, 18px)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    boxShadow: '10px 10px 0 rgba(133, 161, 245, 0.42)',
    textDecoration: 'none',
    pointerEvents: 'auto',
    transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
    '&:hover': {
        transform: 'translate(-2px, -2px)',
        boxShadow: '12px 12px 0 rgba(133, 161, 245, 0.48)',
        backgroundColor: '#6D89EE',
    },
    [theme.breakpoints.down('md')]: {
        minWidth: '210px',
        minHeight: '54px',
    },
}))
