import React, {useEffect, useRef, useState} from 'react'
import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BulkInventoryScreen from './screens/BulkInventoryScreen'
import BattalionsScreen from './screens/BattalionsScreen'
import MoveItemsScreen from './screens/MoveItemsScreen'


const PhoneWrapper = styled('div')<{ $width: number }>(({ $width }) => ({
    position: 'relative',
    width: `${$width}px`,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
}))

const PhoneImg = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
    userSelect: 'none',
    WebkitUserDrag: 'none',
}))

const ScreenOverlay = styled(Box)(() => ({
    position: 'absolute',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    pointerEvents: 'auto',
    display: 'flex',
    flexDirection: 'column',
}))

export default function IphoneOutline({
    initialTab = 0,
    width = 246,
}: {
    initialTab?: number
    width?: number
}) {
    const [navValue, setNavValue] = React.useState(initialTab)
    const [overlayStyle, setOverlayStyle] = useState<any>({})
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const img = imgRef.current
        if (!img) return
        const update = () => {
            const rect = img.getBoundingClientRect()
            if (rect.width === 0 || rect.height === 0) return
            const scaleX = rect.width / 1404
            const scaleY = rect.height / 2896
            const radius = Math.min(scaleX, scaleY) * 58
            setOverlayStyle({
                top: 48 * scaleY,
                left: 62 * scaleX,
                width: 1278 * scaleX,
                height: 2750 * scaleY,
                borderRadius: `${radius}px`,
            })
        }

        if (img.complete) {
            update()
        } else {
            img.addEventListener('load', update, {once: true})
        }
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('resize', update)
        }
    }, [])

    return (
        <PhoneWrapper $width={width}>
            <PhoneImg ref={imgRef} src={`${process.env.PUBLIC_URL}/images/iphone-outline.png`} alt="iPhone outline"/>
            <ScreenOverlay
                style={overlayStyle}
                onWheel={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
            >
                <Box sx={{flex: 1, overflow: 'auto', p: 1, position: 'relative'}}>
                    {navValue === 0 && <BattalionsScreen/>}
                    {navValue === 1 && <BulkInventoryScreen/>}
                    {navValue === 2 && <MoveItemsScreen/>}
                    {navValue === 0 && (
                        <>

                            <Box sx={{flexGrow: 1, pb: 6}}/>

                            <Box sx={{
                                alignSelf: 'flex-end',
                                mb: 1.5,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                fontFamily: 'Inter, sans-serif',
                                fontSize: 8,
                                fontWeight: 700,
                                color: '#403F3E'
                            }}>
                                {[{label: '0-80%', color: '#FF5247'}, {
                                    label: '81-99%',
                                    color: '#FFCF27'
                                }, {label: '100%', color: '#0EDC6D'}].map((item) => (
                                    <Box key={item.label} sx={{display: 'flex', alignItems: 'center', gap: 1}}><Box
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            bgcolor: item.color,
                                            borderRadius: 0.5
                                        }}/><Typography
                                        sx={{fontSize: 8, fontWeight: 700, color: '#403F3E'}}>{item.label}</Typography></Box>))}
                            </Box>
                        </>
                    )}
                </Box>
                <BottomNavigation
                    showLabels
                    value={navValue}
                    onChange={(_, newValue) => setNavValue(newValue)}
                    sx={{
                        backgroundColor: 'transparent',
                        borderTop: '1px solid #E0E0E0',
                        px: 0.5,
                        minHeight: 52,
                        height: 52,
                        '& .MuiBottomNavigationAction-root': {
                            color: '#403F3E',
                            minWidth: 0,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 4,
                            paddingBottom: 6,
                            minHeight: 52,
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: 10,
                            lineHeight: 1,
                            marginTop: 2,
                            '&.Mui-selected': {
                                fontSize: 10,
                            },
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: 20,
                        },
                    }}
                >
                    <BottomNavigationAction label="Sets" icon={<WorkOutlineIcon/>}/>
                    <BottomNavigationAction label="Bulk" icon={<Inventory2OutlinedIcon/>}/>
                    <BottomNavigationAction label="Remove" icon={<HighlightOffOutlinedIcon/>}/>
                </BottomNavigation>
            </ScreenOverlay>
        </PhoneWrapper>
    )
} 
