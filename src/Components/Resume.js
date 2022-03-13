import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="gpa">{education.gpa}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills1 = this.props.data.skills.slice(0, 5).map(function(skills){
        var className = skills.name.toLowerCase();
        var image = "images/skills"+skills.image;
       
        return <img src={image}></img>

      })
      var skills2 = this.props.data.skills.slice(5, 10).map(function(skills){
        var className = skills.name.toLowerCase();
        var image = "images/skills"+skills.image;
       
        return <img src={image}></img>

      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>  
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				  <ul className="skills">
            <div className="frame">
					    {skills1}
            </div>
            <div className="frame">
					    {skills2}
            </div>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
