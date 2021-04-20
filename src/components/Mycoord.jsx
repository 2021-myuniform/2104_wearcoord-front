import React from 'react'
import Img1 from '../img/chitosesports-b_10016758.png';
import Img2 from '../img/pants/aozoraya-sp_10142639.png';


function Mycoord() {
  return (
    <div className="coord">
      <div className="coordTops">
      <img src={Img1} alt="" className="wearImg" />
      </div>
      <div className="coordPants">
      <img src={Img2} alt="" className="wearImg" />
      </div>
    </div>
  )
}

export default Mycoord
