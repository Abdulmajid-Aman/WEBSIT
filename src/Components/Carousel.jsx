import React, { useState } from 'react'

import ImageOne from '../Images/Carousel/client-logo-1.png'
import ImageTwo from '../Images/Carousel/client-logo-2.png'
import ImageThree  from '../Images/Carousel/client-logo-3.png'
import ImageFour from '../Images/Carousel/client-logo-4.png'

const Carousel = () => {
    const [images, setImages] = useState([
        ImageOne, ImageTwo, ImageThree, ImageFour
    ])

    const image = document.querySelector('img')
    let pic = images.map((index, image) => {
        return (
            <>
            <div key={index}>
                <img src={image} alt="logo" />
            </div>
            </>
        )
    })
  return (
    <>
    <div className="carousel">
        {pic}
    </div>
    </>
  )
}

export default Carousel