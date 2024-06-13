import React from 'react'

const ImageContainer = ({imageName})=>{
    return(
      <div className="w-[50%]">
      <img
        src={`/assets/${imageName}.png`}
        alt="logo"
        className="object-contain "
      />
    </div>
    )
  }

export default ImageContainer
