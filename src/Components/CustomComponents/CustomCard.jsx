import React from 'react'
import { Data } from './Data'
import {Container, Typography, styled, Box} from '@mui/material';
import likeIcon from '../Header/assets/like.png'
import heartIcon from '../Header/assets/heart.png'
import shareIcon from '../Header/assets/share.png'
// import { Scale } from '@mui/icons-material';



function CustomCard({ img, price, item, like, heart, share }) {

  const DishBox = styled(Box)(({ theme }) => ({
    maxWidth: '360px',
    minWidth: '250px',
    minHeight: 380,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    margin: theme.spacing(0, 2, 0, 2),
    transition: 'transform 0.8s ease',
    ':hover': {
      transform: 'scale(1.1)',
      
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2, 0, 2, 0),
      minHeight: 300,
    },
  }));

    const ImgBox = styled(Box)(({theme})=>({
        width:'100%',height:'70%',

    }))
    const InfoBox = styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:' column',
        alignItems:'center',
        padding:'12px'
    }))

  return (
    <DishBox sx={{boxShadow: 4, backgroundColor:'white'}}>
            <ImgBox>
            <img src={img}  style={{maxWidth:'100%', maxHeight:'100%'}}/>
            </ImgBox>
            <Box sx={{ backgroundColor:'white'}}>
              <Typography variant='body2'  sx={{ fontWeight:'700'}}>
                {price}
               </Typography> 
              <Typography variant='body2'  sx={{ my:'2'}}>
                {item}
               </Typography> 

               <Box sx={{ display:'flex',
                           alignItems:'center',
                           justifyContent: 'space-between'}}>
                            
                   <InfoBox>
                    <img src={likeIcon}  alt='likeIcon' style={{ cursor:'pointer'}}/>
                    <Typography variant='body2' sx={{mt:1}}>
                    {like}
                    </Typography>
                   </InfoBox>

                   <InfoBox>
                    <img src={heartIcon}  alt='likeIcon' style={{ cursor:'pointer'}}/>
                    <Typography variant='body2' sx={{mt:1}}>
                    {heart}
                    </Typography>
                   </InfoBox>

                   <InfoBox>
                    <img src={shareIcon}  alt='likeIcon' style={{ cursor:'pointer'}}/>
                    <Typography variant='body2' sx={{mt:1}}>
                    {share}
                    </Typography>
                   </InfoBox>
                   
               </Box>
            </Box>
    </DishBox>
  )
}

export default CustomCard;