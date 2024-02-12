import React from 'react'
import {Box,Container,Typography, styled}  from '@mui/material'
import welcomeImg from '../assets/welcome.png'
import CustomButton from '../CustomButton'


const CustomBox= styled(Box)(({theme})=>({
      width:'50%',
      height: '70vh',
      textAlign:'left',
      [theme.breakpoints.down('md')]:{
        height: '50vh',
        width: '100%',
      
      }
}))
const CustomContainer= styled(Container)(({theme})=>({
  display:'flex', 
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'center',
  gap:'10px',
[theme.breakpoints.down('md')] :{
  flexDirection:'column',
  gap: '90px'
}
}))

const CustomImg = styled('img')(({theme})=>({
  height: '100%',
  [theme.breakpoints.down('md')]:{
    maxHeight:'300px',
  }
}))

const Title = styled(Typography)(({theme})=>({
  fontSize:'8vh',
  fontWeight:'bolder',
  lineHeight:'60px',
  color:'white',
  textShadow:'black'

}))

export default function Welcome() {
  return (
    <Box sx={{backgroundColor:'rgb(227 172 17)', marginTop:'110px', minHeight: '80vh'}}>
        <CustomContainer >
      
           <CustomBox>
               <Typography sx={{mt:'40px', fontSize:'24px', opacity:'60%'}}>
               Welcome to Savora :<br/> <span style={{ fontFamily:'monospace'}}>"where every bite tells a story"</span> 
               </Typography>
               <Title >
                  Discover a place where you'll love to Eat.
               </Title>
               <Typography sx={{ my:'20px'}}>
                  Immerse yourself in the elegant ambience as your savour each bite, accompanied by our extensive 
                  selection of hand-picked wines and carefully curated cocktails.
               </Typography>
               <CustomButton backgroundColor='#0F184C' color='white' BtnText='More About Us'  borderColor='#0F184C' />
           </CustomBox>
           
           <CustomBox sx={{ display: 'flex', alignItems:'center', justifyContent:'center'}}>
            <CustomImg src={welcomeImg}  />
           </CustomBox>
        </CustomContainer>
    </Box>
  )
}
