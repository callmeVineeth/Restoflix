import React from 'react'
import deliveryImg from '../assets/DeliveryImg.png'
import { Typography , Box,styled} from '@mui/material'
import CustomButton from '../CustomButton'

const CustomDiv=styled(Box)(({theme})=>({
    width:'60vw',
    minHeight: '300px',
    borderRadius: '10px',
    padding: '10px 30px',
    backgroundColor:'rgb(227 172 17)',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    gap: 10,
}));



function DeliverySection() {
  return (
   <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <CustomDiv>
        <Box sx={{ display: 'flex', flexDirection:'column', textAlign: 'left'}}>
          <Typography variant='h4' sx={{fontWeight:'bold', color:'white', fontFamily:'Raleway'}}>Super Fast Home Delivery</Typography>
          <Typography variant='h6' fontWeight={'subtitle1'} fontFamily={'Raleway'}>Door to door delivery</Typography>
          <CustomButton  width='150px' backgroundColor='white' color='#0F184C' BtnText='Order Now'  borderColor='white' />

          </Box>

       <Box sx={{ width:'200px'}}> <img src={deliveryImg} alt='deliveryImage' style={{ maxWidth:'100%'}}/>  </Box>
    </CustomDiv>

   </Box>
  )
}

export default DeliverySection