import React from 'react'
import { Typography, styled, Box} from '@mui/material'
import ambienceImg from '../assets/ambience.jpg'

const CustomBox = styled(Box)(({theme})=>({
    height: 700,
    background:'white',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:30,
    padding:'70px 20px',
    padding:'40px 30px',
    [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
        marginBottom:'200px',
        
    }

}))

const CustomImgBox= styled(Box)(({theme})=>({
    maxWidth: 500,
    [theme.breakpoints.down('md')]:{
        marginTop: 100,
    }
}))

function AmbienceSection() {
  return (
    <CustomBox>
        
        <CustomImgBox>
            
        <img src={ambienceImg}  alt='ambienceImage' style={{width: '100%'}}/>
               
        </CustomImgBox> 
        

        <Box  sx={{maxWidth: 440, textAlign:'left'}}>
            <div style={{height:'5px' , width:'100px',  backgroundColor:'#0F184C', marginBottom:'40px'}}></div>
            <Typography variant='h4' fontWeight={'bold'}>You've found an ambience you love</Typography>
            <Typography sx={{fontWeight:'bold' ,opacity:'60%'}}>
                Discover the epitome of cultural excellence of Savoria where
                every visit is an enchanting rendezvous with the art of dining.
            </Typography>
        </Box>
    </CustomBox>
  )
}

export default AmbienceSection