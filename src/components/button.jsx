import React from 'react'

const button = (props) => {
    const buttonStyles={
        background:props.buttonColor,
        padding:'17px 13px',
        fontSize:'17px',
    }
  return (
    <button id='button' style={buttonStyles}>{props.children}</button>
  )
}

export default button