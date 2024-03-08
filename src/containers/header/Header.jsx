import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Lets Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita enim voluptates ex, dignissimos accusamus exercitationem esse, voluptatem officiis numquam quaerat, eaque temporibus. Ex nemo dolorem, similique unde deserunt eum! Facilis!</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={ people } alt=''/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ ai } alt="ai" />
      </div>
    </div>
  )
}

export default Header
