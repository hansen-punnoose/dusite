import React from 'react'
import './what.css';
import Feature from '../../components/feature/Feature';




const What = () => {
  return (
    <div className="du__whatdu section__margin" id="what">
    <div className="du__whatdu-feature">
      
    </div>
    <div className="du__whatdu-heading">
      <h1>Why rush DU?</h1>
      <p>Interest Form</p>
    </div>
    <div className="du__whatdu-container">
      <Feature title="Service" text="At Delta Upsilon, we offer a number of service events throughout the year, including philanthropy fairs and hands-on projects in Jamaica through the Global Service Initiative " />
      <Feature title="Network" text="We maintain an active alumni network spanning across almost every field. Every associate member receives a mentor at no cost in their field of interest. The potential internship, research, and shadowing experience is invaluable. " />
      <Feature title="Brotherhood" text="Our brotherhood is our second family. We work to make each other’s dreams and aspirations come true. We will be there to celebrate the highest points of our lives, and we will be there to lift each other up from the lowest of lows. " />
    </div>
  </div>
  )
}

export default What