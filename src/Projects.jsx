import React from 'react'
import ProjectLine from './ProjectLine.jsx';

//IMAGES
import nshof01 from '/DSC_2628_editlo.jpg'
import bluegrass02 from '/bluegrass_2 -11_18_08184.jpg'
import fortmonroe01 from '/fort-monroe-visitor-center_lo.jpg'
import centralgallery01 from '/1409030005-2v.jpg'
import purpleheart01 from '/LRnational-purple-heart-hall-of-honor_50590128463_o.jpg'
import firstladies01 from '/OSM-First-Ladies-0058.jpg'
import sailing01 from '/TSM-01.jpg'
import hollyheart from '/3_DSC_1999-DOWNSIZE.jpg'
import clarksville01 from '/DSC_1226_AltFlat-DOWNSIZE.jpg'
import flspark01 from '/DSC_1109_LoRes.jpg'
import vietnamnavy01 from '/HealyKohler-8509702lo.jpg'
import dukeenergy01 from '/DSC_1173lo.jpg'
import reynolds01 from '/2016-08-30 13.44.34lo.jpg'

const Projects = () => {
    return (

        <div className="project-container">

            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Museums</h1>
            </div>

            <img src={sailing01} alt="sailing image" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="The Sailing Museum" location="Newport, RI" />

            <ProjectLine title="International Marathon Center" location="Hopkinton, MA" />


            <img src={hollyheart} alt="hollywood heartland image" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Hollywood in the Heartland" location="The State Historical Museum of Iowa" />

            <ProjectLine title="First Colony: Our Spanish Origins" location="Florida Museum of Natural History" />


            <img src={nshof01} alt="nshof image" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="National Soccer Hall of Fame" location="Frisco, TX" />

            <ProjectLine title="International Tennis Hall of Fame" location="Newport, RI" />

            <img src={bluegrass02} alt="bluegass image" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Bluegrass Music Hall of Fame & Museum" location="Owensboro, KY" />

            <ProjectLine title="Museum of the American Revolution" location="Philadelphia, PA" />


            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Visitor Centers</h1>
            </div>

            <img src={fortmonroe01} alt="fort monroe visitor center" className="project-image" />
            <ProjectLine textColor="var(--alt-title-color)" title="Fort Monroe Visitor & Education Center" location="Fort Monroe, VA" />

            <ProjectLine title="Hoh Rainforest Visitor Center" location="Olympic National Park" />

            <img src={flspark01} alt="first landing state park" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="First Landing Trail Center" location="Virginia Beach, VA" />

            <ProjectLine title="Washington Monument" location="Washington, DC" />

            <img src={clarksville01} alt="clarksville" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Becoming Clarksville" location="Customs House & Cultural Center" />

            <ProjectLine title="Washington Crossing State Park Visitor Center & Museum" location="Titusville, NJ" />

            <img src={centralgallery01} alt="central gallery image" className="project-image" />
            <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Central Gallery" location="Florida Museum of Natural History" />

            <ProjectLine title="Brunswick Byways Visitor Center" location="Lawrenceville, VA" />


            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Military History</h1>
            </div>


            <div>

                <img src={purpleheart01} alt="purpleheart image" className="project-image" />

                <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="National Purple Heart Hall of Honor" location="New Windsor, NY" />

                <ProjectLine title="Fort Defiance Interpretive Center" location="Clarksville, TN" />

                <ProjectLine title="4th Infantry Division Museum" location="Fort Carson, CO" />

                <img src={vietnamnavy01} alt="vietnam gallery" className="project-image" />
                <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Vietnam Exhibit at the Hampton Roads Naval Museum" location="Norfolk, VA" />

                <ProjectLine title="Adams County Historical Society" location="Gettysburg, PA" />

                <ProjectLine title="1st Infantry Division Museum" location="Fort Riley, KS" />
            </div>



            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Special Collections</h1>
            </div>

            <div>

                <img src={firstladies01} alt="first ladies image" className="project-image" />
                <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Arkansas First Ladies Exhibit" location="Old State House Museum" />

                <ProjectLine title="Catfish Row Museum" location="Vicksburg, MS" />

                <ProjectLine title="The Civil Rights Act of 1964" location="Library of Congress" />

                <ProjectLine title="ACC Hall of Champions" location="Greensboro, NC" />

                <img src={dukeenergy01} alt="duke energy lobby" className="project-image" />
                <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Duke Energy History Exhibit" location="Charlotte, NC" />

                <ProjectLine title="National Hip Hop Hall of Fame" location="New York, NY" />

                <ProjectLine title="Walter J. Brown Media Archive & Peabody Collection " location="University of Georgia" />

                <img src={reynolds01} alt="reynolds coliseum" className="project-image" />
                <ProjectLine paddingTop='0.75rem' textColor="var(--alt-title-color)" title="Reynolds Coliseum" location="North Carolina State University" />

                <ProjectLine title="Communications Exhibit at Addleston Library" location="College of Charleston, SC" />

                <ProjectLine title="RAGBRAI State Historical Society Museum of Iowa" location="Des Moines, IA" />

                <div>
                    <p style={{color: 'white', textAlign: 'center', marginTop: '1rem', marginBottom: '4rem'}}>above projects completed as part of HealyKohler Design</p>
                </div>

               <div style={{ height: '6rem'}}></div>


            </div>
        </div>
    )
}

export default Projects