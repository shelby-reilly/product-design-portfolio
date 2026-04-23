import {styled} from '@mui/material/styles'

export const MainWrapper = styled('section')(({theme}) => ({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 'clamp(4px, 1vw, 12px) clamp(28px, 5vw, 72px) clamp(40px, 5vw, 64px)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        padding: '4px 16px 40px',
    },
}))

export const MidSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(420px, 0.98fr) minmax(520px, 1.02fr)',
    alignItems: 'center',
    gap: 'clamp(52px, 6vw, 96px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'minmax(340px, 0.95fr) minmax(460px, 1fr)',
        gap: '40px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}))

export const ImagesWrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    pointerEvents: 'auto',
    minWidth: 0,
    cursor: 'pointer',
}))

export const CardCluster = styled('div')(({theme}) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '780px',
    minHeight: '430px',
    [theme.breakpoints.down('md')]: {
        minHeight: 'auto',
        display: 'grid',
        gap: '12px',
    },
}))

export const PreviewCard = styled('div')<{ $top?: string; $left?: string; $right?: string; $rotate?: number; $width?: string }>(
    ({theme, $top, $left, $right, $rotate = 0, $width = '320px'}) => ({
        position: 'absolute',
        top: $top,
        left: $left,
        right: $right,
        width: $width,
        padding: '12px',
        borderRadius: '22px',
        background: theme.palette.mode === 'light' ? '#FFFFFF' : '#1F1F22',
        boxShadow: theme.palette.mode === 'light'
            ? '0 20px 36px rgba(0, 0, 0, 0.10)'
            : '0 24px 40px rgba(0, 0, 0, 0.36)',
        transform: `rotate(${$rotate}deg)`,
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        '&:hover': {
            transform: `translateY(-4px) rotate(${$rotate}deg)`,
        },
        [theme.breakpoints.down('md')]: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            width: '100%',
            transform: 'none',
            '&:hover': {
                transform: 'translateY(-4px)',
            },
        },
    })
)

export const PreviewImage = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '14px',
    userSelect: 'none',
    WebkitUserDrag: 'none',
}))

export const SignalBadge = styled('div')(({theme}) => ({
    position: 'absolute',
    left: '30px',
    bottom: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '14px 16px',
    borderRadius: '18px',
    background: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.96)' : 'rgba(22,22,24,0.92)',
    boxShadow: theme.palette.mode === 'light'
        ? '0 16px 32px rgba(0,0,0,0.09)'
        : '0 18px 34px rgba(0,0,0,0.28)',
    [theme.breakpoints.down('md')]: {
        position: 'relative',
        left: 'auto',
        bottom: 'auto',
        marginTop: '6px',
        alignItems: 'center',
        textAlign: 'center',
    },
}))

export const SignalTitle = styled('div')(({theme}) => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: theme.palette.mode === 'light' ? '#1A1A1A' : '#FFFFFF',
}))

export const SignalText = styled('div')(({theme}) => ({
    maxWidth: '26ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '13px',
    lineHeight: 1.45,
    color: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.72)' : 'rgba(255,255,255,0.76)',
}))

export const ReviewImage = styled('img')(() => ({
    width: '120px',
    height: 'auto',
    display: 'block',
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

export const JambaTitle = styled('img')(({theme}) => ({
    width: 'min(100%, 340px)',
    height: 'auto',
    display: 'block',
    marginBottom: '8px',
    userSelect: 'none',
    WebkitUserDrag: 'none',
    [theme.breakpoints.down('md')]: {
        width: 'min(100%, 260px)',
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
