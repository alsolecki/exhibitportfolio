import React from 'react'
import drawing01 from '/drawings/HRNM_plan.jpg'
import drawing02 from '/drawings/HRNM_bubble.jpg'
import drawing03 from '/drawings/marathonplan-01-01.jpg'
import drawing05 from '/drawings/WCplan-CD-02.jpg'
import drawing07 from '/drawings/PHdetail-01.jpg'
import drawing08 from '/drawings/axo.jpg'


const CourseInfo = () => {
  return (
    <div className="drawings">
      <img src={drawing03} alt="concept plan drawing" className="drawing-image" />
      <img src={drawing05} alt="concept plan drawing" className="drawing-image" />
      <img src={drawing07} alt="detail drawing" className="drawing-image" />
      <img src={drawing02} alt="concept plan drawing" className="drawing-image" />
      <img src={drawing08} alt="detail drawing" className="drawing-image" />
      <img src={drawing01} alt="concept plan drawing" className="drawing-image" />
    </div>
  )
}

export default CourseInfo