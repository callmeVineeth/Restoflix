import React from 'react'
import {Container, Typography, styled, Box} from '@mui/material'
// import likeIcon from '../Header/assets/like.png'
// import heartIcon from '../Header/assets/heart.png'
// import shareIcon from '../Header/assets/share.png'
import CustomCard from '../../CustomComponents/CustomCard'
import { Data } from '../../CustomComponents/Data'

const DisheBox = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:' row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'50px',
    [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
    }
}))

function Dishes() {
  return (
    <Box sx={{    backgroundColor: '#EEF0E5', boxShadow: 1, padding:'50px 20px', display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',}}>
        <Container sx={{display:'flex', flexDirection:'column', textAlign:'left',fontFamily:'monospace'}}>
            <Typography variant='h2'>Featured Dishes</Typography>  <br/>
            <Typography  variant='body1'  sx={{opacity:'60%'}}> Explore varienty of SouthIndian dishes </Typography>
        </Container>
        <Container>
            <DisheBox>
                {Data.map((foodItem)=>(
                    <CustomCard
                      key={foodItem.id}
                      img={foodItem.img}
                      price={foodItem.price}
                      item={foodItem.item}
                      like={foodItem.likes}
                      heart={foodItem.heart}
                      share={foodItem.share}
                       />
                      ))}
            </DisheBox>

        </Container>
    </Box>
  )
}

export default Dishes