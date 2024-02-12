import React from 'react'
import { Button ,styled} from '@mui/material'

    const CustomButton=({backgroundColor,BtnText,width,color,borderColor})=>{

        const CustomButton =styled(Button)(({theme})=>({
            backgroundColor:backgroundColor,
            width: width,
            textTransform:'none',
            BtnTxt:BtnText,
            fontWeight:'bold',
            color: color,
            padding:'0.5rem 1.25rem',
            borderRadius:'7px',
            margin:'6px',
            border: '2px solid ',
            borderColor:borderColor,
            ":hover":{
                backgroundColor: color,
                color: backgroundColor,
            }
        }))
       return(
        <CustomButton>{BtnText}</CustomButton>
       ) 

    }


export default CustomButton;