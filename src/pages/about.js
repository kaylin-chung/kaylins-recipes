import * as React from 'react'
import Header from '../components/header'
import "./about.css"
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='heading'>
          <h3>hey! i'm kaylin</h3>
          <ul className='bullets'>
            <li>👩🏻‍💻 i’m a college student</li>
            <li>📍 based in orange county/los angeles</li>
            <li>🍴 who loves to eat</li>
            <li>👩🏻‍🍳 and (occasionally) cook</li>
          </ul>
          <p className='blurb'>
            i wanted to make this website so that i could share my go-to, at-home meals that are <strong>easy</strong> and
            <strong> quick </strong> to make and <strong><i>delicious</i></strong> to eat! whether you’re a college student needing to whip something up in your dorm
            or in a pinch for a snack at home, this is the perfect site for you.
          </p>
        </div>
        <StaticImage className="image" src="../images/image3.jpeg"></StaticImage>
      </div>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>About</title>

// Step 3: Export your component
export default About
