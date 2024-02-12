import React from 'react'
import { Typography, styled, Box ,useTheme} from '@mui/material'


const foodData=[
    { id:1, count:'250+', name:'Dishes'},
    { id:2, count:'300+', name:'Trusted Clients'},
    { id:3, count:'350+', name:'Delivery Per Day'},
]

const ItemBox=styled(Box)(({theme})=>({
  maxHeight:250,
  maxWidth:250,
  textAlign:'center',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  gap:20,
  justifyContent:'center'
}))

const CustomMainBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    my:2,
    justifyContent:' space-evenly',
    width:'100%',
    alignItems:'center',
    boxShadow:1,
    marginTop:'200px',
    [theme.breakpoints.down('md')]:{
         marginTop:'200px',
    }
  
}))

const CustomTypography=styled(Typography)(({theme})=>({
      fontSize:'4vw',
      fontWeight: 'Bold',
      [theme.breakpoints.down('md')]:{
      fontSize:'10vw',
   }
}))

function CountSection() {

    const theme=useTheme();

  return (
    <CustomMainBox >
        {foodData.map((element)=>(
            <ItemBox>
               <CustomTypography> {element.count} </CustomTypography> 
               <Typography sx={{opacity:'70%'}}> {element.name} </Typography> 
            </ItemBox>
        ))}
    </CustomMainBox>
  )
}

export default CountSection