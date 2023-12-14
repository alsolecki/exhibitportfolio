import React from 'react'
import render01 from '/renderings/01-GreatLakesRTC_final_lo.jpg'
import render02 from '/renderings/Bluegrass_ (2)lo.jpg'
import render04 from '/renderings/01-Creation_2017-10-31.jpg'
import render03 from '/renderings/01_west_day.jpg'
import render05 from '/renderings/LSU_02-Northwing_FINALlo.jpg'
import render06 from '/renderings/FMVC_FortMonroe_Rendlo.jpg'

const Beyond = () => {
  return (
    <div className="renderings">
      <img src={render01} alt="GreatLakesRTC rendering" className="render-image" />
      <img src={render02} alt="bluegrass exhibit" className="render-image" />
      <img src={render03} alt="central gallery" className="render-image" />
      <img src={render04} alt="chickasaw gallery" className="render-image" />
      <img src={render05} alt="lsu gallery rendering" className="render-image" />
      <img src={render06} alt="fort monroe rendering" className="render-image" />
    </div>
  )
}

export default Beyond