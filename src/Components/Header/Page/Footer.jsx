import React from 'react'
// import styled from 'styled-components'
import {styled, Box,Typography} from '@mui/material'


const CustomBox=styled(Box)(({theme})=>({
    minHeight: '250px',
    width: '100%',
    display:'flex',
    backgroundColor:'#cfc58f',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:'10px',
    [theme.breakpoints.down('md')]:{
        // flexDirection:'column',


    }

}))


const ListComponent = ({ title, items }) => (
    <>
      <Typography variant="h5" >{title}</Typography>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index}>{item} </ListItem>
        ))}
      </ul>
    </>
  );

  const ListItem = styled('li')(({theme})=>({
    listStyle:'none',
    textAlign:'left',
    fontSize:'maxWidth',
    fontWeight:'500',
    ':hover':{
      opacity:'50%',
      fontSize:'12px',
    },
  }))

  const CustomListBox = styled(Box)(({theme})=>({
    width:'300px',
     display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
  }))

function Footer() {
    const featuredItems = ['Guides', 'Services', 'Contact'];
    const overviewItems = ['Overview Guides', 'Overview Services', 'Overview Contact'];
    const touchItems = ['Touch Guides', 'Touch Services', 'Touch Contact'];
  

  return (

  <CustomBox>
    <CustomListBox >
        <ListComponent title="Featured" items={featuredItems} />
   </CustomListBox>

    <CustomListBox >
        <ListComponent title="Overview" items={overviewItems} />
   </CustomListBox>

   <CustomListBox >
        <ListComponent title="Get in Touch" items={touchItems} />
   </CustomListBox>

  </CustomBox>
  )
}

export default Footer