import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';
import crest from '../../assets/Delta_Upsilon_Coat_of_Arms.png';



const featuresData = [
  {
    title: 'The Promotion of Friendship',
    text: 'We believe that the friendships you make during your time at college can be as valuable as the degree that you earn. Delta Upsilon encourages its members to strive for social excellence by developing friendships with a variety of people and learning the social skills necessary to carry-on meaningful conversations with strangers. These skills are integral to a successful and healthy life. ',
  },
  {
    title: 'The Development of Character',
    text: 'A man’s character is defined by his values and his ability to act in accordance with those values. Every man who joins our fraternity takes a non-secret oath that commits him to a clearly defined set of values. It is the job of every member in the fraternity to then hold himself and his brothers accountable to that oath. Also, because Delta Upsilon is the only non-secret fraternity, we encourage everybody to hold us accountable to our oath.',
  },
  {
    title: 'The Diffusion of Liberal Culture',
    text: 'The Diffusion of Liberal Culture is every member’s duty to experience and learn about the world around him, and then share those experiences with others. We encourage our members to be renaissance men, well-versed in the sciences and the arts alike. Men become more culturally liberal by engaging in and learning about the many experiences the world has to offer them. College is a great time to start, if you have not already, exploring those opportunities and the fraternity should help you in developing your thinking and discovering new interests.',
  },
  {
    title: 'The Advancement of Justice',
    text: 'It was the mission of our founders, in forming the first and only non-secret and social fraternity, to start an organization that combated the injustices of secret organizations on the campus of Williams College. Today, 175 years later, our focus has shifted, but we are as committed as ever to the advancement of justice. Our men are dedicated to service and philanthropy and are engaged in the many issues facing our society and world.',
  },
];

const Features = () => (
  <div className="du__features section__padding" id="features">
    <div className="du__features-heading">ß
      <h1>Behind Building Better Men</h1>
      <p>Our Four Founding Principles</p>

      <div className='du__feat-image'>
      
         <img src={crest} />
        </div>

      <div className='du__secondary'>

      <p>No Secrets. Today, being the only non-secret fraternity means that our principles and ideals are open to public scrutiny and inspection, allowing others to judge whether we are living up to our own expectations. We pride ourselves on being called "The Gentlemen's Fraternity". In short DU is about balance. We strive to get the most out of the college experience through academics, professional connections, philanthropy while leaving enough time to relax. You will learn things about yourself you have never known, you will try things you have never tried, and have some of the best years of your life doing it.</p>
      </div>   
    </div>
    <div className="du__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;