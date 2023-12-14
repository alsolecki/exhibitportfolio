import React from 'react'
import ProjectLine from './ProjectLine.jsx';

//IMAGES
import nshof01 from '/DSC_2628_editlo.jpg'
import bluegrass02 from '/bluegrass_2 -11_18_08184.jpg'
import fortmonroe01 from '/fort-monroe-visitor-center_lo.jpg'
import centralgallery01 from '/1409030005-2v.jpg'
import centralgallery02 from '/1409030004-Edit-DOWNSIZE_v2.jpg'
import purpleheart01 from '/LRnational-purple-heart-hall-of-honor_50590128463_o.jpg'
import firstladies01 from '/OSM-First-Ladies-0058.jpg'
import firstladies02 from '/OSM-First-Ladies-0026.jpg'
import sailing01 from '/TSM-01.jpg'
import hollyheart from '/3_DSC_1999-DOWNSIZE.jpg'
import bluegrass01 from '/11_18_08232.jpg'
import clarksville01 from '/DSC_1226_AltFlat-DOWNSIZE.jpg'
import flspark01 from '/DSC_1109_LoRes.jpg'
import purpleheart02 from '/national-purple-heart-hall-of-honor_50590872306_o.jpg'
import vietnamnavy01 from '/HealyKohler-8509702lo.jpg'
import dukeenergy01 from '/DSC_1173lo.jpg'
import reynolds01 from '/2016-08-30 13.44.34lo.jpg'


const Home = () => {
  return (

    <div className="parallax">

{/* Background images */}

      <img src={bluegrass02} alt="bluegass image" className="parallax__image01" />
      <img src={nshof01} alt="bluegass image" className="parallax__image02" />
      <img src={centralgallery01} alt="bluegass image" className="parallax__image03" />
      <img src={purpleheart01} alt="bluegass image" className="parallax__image04" />
      <img src={firstladies01} alt="first ladies image" className="parallax__image05" />

      <div style={{
        width: "100%",
        height: '4rem',
        background: 'linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))',
        transform: 'translateZ(-25px) scale(7)',
        position: 'absolute',
        top: '-30%',
      }}
      >
      </div>

      <div className="titlebox museums" style={{ top: '0%', fontSize: "2.5rem" }}>
        <h1>Museums</h1>
      </div>

      <img src={sailing01} alt="sailing image"
        className="parallax__image10"
      />

      <img src={hollyheart} alt="hollywood heartland image" className="parallax__image11" />

      <img src={nshof01} alt="national soccer hall of fame" className="parallax__image12" />

      <img src={fortmonroe01} alt="fort monroe visitor center" className="parallax__image13" />

      <img src={bluegrass01} alt="bluegrass museum" className="parallax__image14" />

      <img src={clarksville01} alt="clarksville" className="parallax__image15" />

      <img src={flspark01} alt="first landing state park" className="parallax__image16" />

      <img src={centralgallery02} alt="central gallery" className="parallax__image17" />

      <img src={purpleheart02} alt="purple heart gallery" className="parallax__image18" />

      <img src={vietnamnavy01} alt="vietnam gallery" className="parallax__image19" />

      <img src={firstladies02} alt="first ladies gallery" className="parallax__image20" />

      <img src={dukeenergy01} alt="duke energy lobby" className="parallax__image21" />

      <img src={reynolds01} alt="reynolds coliseum" className="parallax__image22" />






      <div className="project-group" style={{
        transform: 'translateZ(-15px) scale(2.25)',
        top: '160%'
      }}>

        <ProjectLine textColor="yellow" title="The Sailing Museum" location="Newport, RI" />

        <ProjectLine title="International Marathon Center" location="Hopkinton, MA" />

        <ProjectLine textColor="yellow" title="Hollywood in the Heartland" location="The State Historical Museum of Iowa" />

        <ProjectLine title="First Colony: Our Spanish Origins" location="Florida Museum of Natural History" />

        <ProjectLine textColor="yellow" title="National Soccer Hall of Fame" location="Frisco, TX" />

        <ProjectLine title="International Tennis Hall of Fame" location="Newport, RI" />

        <ProjectLine textColor="yellow" title="Bluegrass Music Hall of Fame & Museum" location="Owensboro, KY" />

        <ProjectLine title="Museum of the American Revolution" location="Philadelphia, PA" />

      </div>


      <div className="titlebox education" style={{ top: '410%', fontSize: '2rem', width: '60%' }}>
        <h1>Visitor Centers</h1>
      </div>

      <div className="project-group" style={{
        transform: 'translateZ(-8px) scale(1.65)',
        top: '540%'
      }}>
        <ProjectLine textColor="yellow" title="Fort Monroe Visitor & Education Center" location="Fort Monroe, VA" />

        <ProjectLine title="Hoh Rainforest Visitor Center" location="Olympic National Park" />

        <ProjectLine textColor="yellow" title="First Landing Trail Center" location="Virginia Beach, VA" />

        <ProjectLine title="Washington Monument" location="Washington, DC" />

        <ProjectLine textColor="yellow" title="Becoming Clarksville" location="Customs House & Cultural Center" />

        <ProjectLine title="Washington Crossing State Park Visitor Center & Museum" location="Titusville, NJ" />

        <ProjectLine title="Brunswick Byways Visitor Center" location="Lawrenceville, VA" />

        <ProjectLine textColor="yellow" title="Central Gallery" location="Florida Museum of Natural History" />

      </div>




      <div className="titlebox education" style={{ top: '770%', fontSize: '2rem', width: '60%' }}>
        <h1>Military History</h1>
      </div>

      <div className="project-group" style={{
        transform: 'translateZ(-8px) scale(1.65)',
        top: '920%'
      }}>

        <ProjectLine textColor="yellow" title="National Purple Heart Hall of Honor" location="New Windsor, NY" />

        <ProjectLine title="Fort Defiance Interpretive Center" location="Clarksville, TN" />

        <ProjectLine title="4th Infantry Division Museum" location="Fort Carson, CO" />

        <ProjectLine textColor="yellow" title="Vietnam Exhibit at the Hampton Roads Naval Museum" location="Norfolk, VA" />

        <ProjectLine title="Adams County Historical Society" location="Gettysburg, PA" />

        <ProjectLine title="1st Infantry Division Museum" location="Fort Riley, KS" />
      </div>



      <div className="titlebox education" style={{ 
        top: '1110%', 
        fontSize: '2rem',
        width: '60%'
        }}>
        <h1>Special Collections</h1>
      </div>

      <div className="project-group" style={{
        transform: 'translateZ(-8px) scale(1.65)',
        top: '1260%'
      }}>
        <ProjectLine title="Catfish Row Museum" location="Vicksburg, MS" />

        <ProjectLine textColor="yellow" title="Arkansas First Ladies Exhibit" location="Old State House Museum" />

        <ProjectLine title="The Civil Rights Act of 1964" location="Library of Congress" />

        <ProjectLine title="ACC Hall of Champions" location="Greensboro, NC" />

        <ProjectLine title="National Hip Hop Hall of Fame" location="New York, NY" />

        <ProjectLine textColor="yellow" title="Duke Energy History Exhibit" location="Charlotte, NC" />

        <ProjectLine title="Walter J. Brown Media Archive & Peabody Collection " location="University of Georgia" />

        <ProjectLine title="Communications Exhibit at Addleston Library" location="College of Charleston, SC" />

        <ProjectLine title="RAGBRAI State Historical Society Museum of Iowa" location="Des Moines, IA" />

        <ProjectLine textColor="yellow" title="Reynolds Coliseum" location="North Carolina State University" />
      </div>

      <div style={{
        width: "100%",
        height: '24rem',
        background: 'linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))',
        transform: 'translateZ(-25px) scale(5)',
        position: 'absolute',
        top: '1430%',
      }}
      ></div>
      <div className="credits" style={{
        width: '100%',
        height: '2rem',
        textAlign: 'center',
        position: 'absolute',
        top: '1560%',
        color: 'white',
        transform: 'translateZ(-20px) scale(3)'
      }}>
        <p>above projects completed as part of HealyKohler Design</p>
      </div>
    </div>
  )
}

export default Home