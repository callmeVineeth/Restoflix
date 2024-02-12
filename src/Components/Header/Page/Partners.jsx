import React from 'react'
import {Container, Typography, styled, Box} from '@mui/material'
import starRatings from '../assets/Star.png'
import logosImg from '../assets/logos.png'



const CustomContainer = styled(Container)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

function Partners() {
  return (
   <Box sx={{minHeight: '200px' , paddingTop: '60px'}}>
        <CustomContainer>
            <Box>
                <Typography variant='h6'>Restoflix</Typography>
                <Typography sx={{fontWeight:'bold', fontSize: '16px'}} >More than 45,000 satisfied customers</Typography>
            </Box>

            <Box>
                <img src={starRatings} alt='start' style={{maxWidth:'100%'}}/>
                <Typography sx={{fontWeight:'bold', fontSize: '16px'}}>5 Star  rating( 2K+ reviews)</Typography>
            </Box>
        </CustomContainer>
        <Container>
          <img src={logosImg} alt='partnerLogos' style={{maxWidth:'100%'}}/>
        </Container>
   </Box>
    
  )
}

export default Partners