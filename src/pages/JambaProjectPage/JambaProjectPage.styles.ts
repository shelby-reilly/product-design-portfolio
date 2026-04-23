import {styled} from '@mui/material/styles'

export const ProjectPageContainer = styled('div')(() => ({
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #FFFDF8 0%, #FFF8EE 100%)',
    color: '#161616',
}))

export const JambaBackButton = styled('button')(() => ({
    display: 'inline-flex',
    position: 'fixed',
    top: 20,
    left: 20,
    zIndex: 1700,
    alignItems: 'center',
    gap: 8,
    padding: '10px 16px',
    borderRadius: 10,
    background: 'rgba(255,255,255,0.94)',
    color: '#8F4D15',
    border: '1px solid rgba(229, 134, 43, 0.22)',
    boxShadow: '0 10px 30px rgba(173, 110, 40, 0.14)',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
    '&:hover': {
        transform: 'translateX(-3px)',
        boxShadow: '0 14px 34px rgba(173, 110, 40, 0.18)',
        background: '#FFFFFF',
    },
}))

export const ContentWrapper = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '120px 28px 88px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        padding: '104px 18px 64px',
    },
}))

export const Hero = styled('section')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(320px, 0.86fr) minmax(420px, 1.14fr)',
    gap: 'clamp(28px, 5vw, 56px)',
    alignItems: 'center',
    paddingBottom: '42px',
    borderBottom: '1px solid rgba(22,22,22,0.08)',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
        paddingBottom: '32px',
    },
}))

export const HeroCopy = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
}))

export const Eyebrow = styled('div')(() => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: '#E5862B',
}))

export const HeroTitle = styled('img')(({theme}) => ({
    width: 'min(100%, 320px)',
    height: 'auto',
    display: 'block',
    margin: 0,
    userSelect: 'none',
    WebkitUserDrag: 'none',
    [theme.breakpoints.down('md')]: {
        width: 'min(100%, 250px)',
    },
}))

export const HeroSummary = styled('p')(() => ({
    margin: 0,
    maxWidth: '30ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: 'clamp(18px, 1.7vw, 25px)',
    lineHeight: 1.48,
    color: 'rgba(22,22,22,0.84)',
}))

export const DetailGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '18px 22px',
    marginTop: '12px',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const DetailBlock = styled('div')(() => ({
    paddingTop: '14px',
    borderTop: '1px solid rgba(22,22,22,0.12)',
}))

export const DetailLabel = styled('div')(() => ({
    marginBottom: '6px',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#E5862B',
}))

export const DetailValue = styled('div')(() => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '15px',
    lineHeight: 1.55,
    color: 'rgba(22,22,22,0.8)',
}))

export const HeroMedia = styled('div')(() => ({
    position: 'relative',
}))

export const HeroImage = styled('img')(() => ({
    width: '100%',
    display: 'block',
    height: 'auto',
    borderRadius: '28px',
    boxShadow: '0 24px 56px rgba(20,20,20,0.12)',
}))

export const Section = styled('section')(({theme}) => ({
    padding: '38px 0',
    borderBottom: '1px solid rgba(22,22,22,0.08)',
    [theme.breakpoints.down('md')]: {
        padding: '30px 0',
    },
}))

export const SectionEyebrow = styled('div')(() => ({
    marginBottom: '8px',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#E5862B',
}))

export const SectionTitle = styled('h2')(() => ({
    margin: 0,
    maxWidth: '15ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: 'clamp(28px, 3vw, 42px)',
    lineHeight: 1.06,
    letterSpacing: '-0.04em',
}))

export const SectionLead = styled('p')(() => ({
    margin: '14px 0 0',
    maxWidth: '76ch',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '17px',
    lineHeight: 1.65,
    color: 'rgba(22,22,22,0.76)',
}))

export const SectionBody = styled('p')(() => ({
    margin: '14px 0 0',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '17px',
    lineHeight: 1.65,
    color: 'rgba(22,22,22,0.76)',
}))

export const IntroGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(280px, 0.9fr) minmax(0, 1.1fr)',
    gap: '24px 42px',
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const IntroText = styled('p')(() => ({
    margin: 0,
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '18px',
    lineHeight: 1.72,
    color: 'rgba(22,22,22,0.78)',
}))

export const SplitSection = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(280px, 0.82fr) minmax(0, 1.18fr)',
    gap: '26px 42px',
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const ImageColumn = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
}))

export const ProcessGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '22px',
    marginTop: '24px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const ProcessItem = styled('div')(() => ({
    paddingTop: '16px',
    borderTop: '2px solid rgba(229, 134, 43, 0.22)',
}))

export const ProcessNumber = styled('div')(() => ({
    marginBottom: '12px',
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '30px',
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    color: 'rgba(22,22,22,0.28)',
}))

export const TextGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '18px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const Statement = styled('div')(() => ({
    paddingTop: '14px',
    borderTop: '1px solid rgba(22,22,22,0.1)',
}))

export const ArtifactGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '24px 30px',
    marginTop: '24px',
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}))

export const VisualFigure = styled('figure')(() => ({
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}))

export const VisualImage = styled('img')(() => ({
    width: '100%',
    display: 'block',
    borderRadius: '22px',
    boxShadow: '0 16px 36px rgba(20,20,20,0.08)',
}))

export const ArtifactTitle = styled('div')(() => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 1.35,
    color: '#161616',
}))

export const ArtifactCaption = styled('div')(() => ({
    fontFamily: '"Google Sans", Futura, sans-serif',
    fontSize: '15px',
    lineHeight: 1.6,
    color: 'rgba(22,22,22,0.74)',
}))

export const EmbedWrap = styled('div')(() => ({
    marginTop: '26px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 18px 42px rgba(20,20,20,0.1)',
    border: '1px solid rgba(22,22,22,0.08)',
    background: '#FFFFFF',
}))

export const EmbedFrame = styled('iframe')(({theme}) => ({
    width: '100%',
    height: '720px',
    border: 0,
    display: 'block',
    background: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        height: '560px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '420px',
    },
}))
