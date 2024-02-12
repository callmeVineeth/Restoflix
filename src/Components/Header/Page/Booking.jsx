import React from 'react'
import {Container, Typography, styled, Box} from '@mui/material'
import starRatings from '../assets/Star.png'
import buyIcon from '../assets/buy_icon.png'
// import rent from '../assets/buy_icon.png'
import sellIcon from '../assets/sell_icon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CustomBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    padding: '40px'
}))
const CustomContainer=styled(Container)(({theme})=>({
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    gap: '1px',
}))
const MiniBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'16px'
}))
const CustomTypography=styled(Typography)(({theme})=>({
   fontSize:'25px',
   [theme.breakpoints.down('md')]:{
    fontSize: '18px'
   }
}))




function Booking() {
  return (
    <CustomBox>
        <div style={{
            backgroundColor:'#0F184C',
            width: '110px',
            height:'5px', 
            margin:'20px auto',
            transition:'all',
            ":hover":{ transform:'scale(2)',
            backgroundColor: 'red',
            width:'200px' }

            // hover not working will  rectify later. . . .      . .. . . . . . . . 

             }} > </div>           
        <Container>
           <Typography variant='h4'>How to Book ?</Typography>
           <Typography sx={{my:'20px', opacity:'60%'}}> Everything you need to know when you book for advanced slot</Typography>
        </Container>

        <CustomContainer>
            <Box>
                <img src={buyIcon} style={{ maxWidth:'30px'}}/>  <br/>  
               <CustomTypography> Order Guides    </CustomTypography>  <br/>
               <MiniBox> How to Order  
         <ArrowRightAltIcon sx={{color:'blue' , fontSize:'40px' , transition: '600ms' , ":hover":{ transform:'scale(1.2)' }}}/></MiniBox>
            </Box>

            <Box>
                <img src={sellIcon} style={{ maxWidth:'30px'}}/>  <br/>
                <CustomTypography> Booking Guides    </CustomTypography>  <br/>
               <MiniBox> How to Book
         <ArrowRightAltIcon sx={{color:'blue' , fontSize:'40px' , transition: '600ms' , ":hover":{ transform:'scale(1.2)' }}}/></MiniBox>
            </Box>

            <Box>
                <img src={sellIcon} style={{ maxWidth:'30px'}}/>  <br/>
                <CustomTypography> Payment Guides    </CustomTypography>  <br/>
                <MiniBox> Payement Method  
             <ArrowRightAltIcon sx={{color:'blue' , fontSize:'40px' , transition: '600ms' , ":hover":{ transform:'scale(1.2)' }}}/></MiniBox>
            </Box>

        </CustomContainer>

    </CustomBox>
   
  )
}

export default Booking