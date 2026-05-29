import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="home">
            <div className="home-content">
                <div className="home-badge">E-Learning Platform</div>
                <h1>Welcome to <span>EduHub!</span></h1>
                <h2>Unlock your potential, one course at a time.</h2>
                <p>Learn from expert instructors, grow your skills, and excel in your career — all at your own pace.</p>
                <button onClick={()=>{navigate("/courses")}} className='common-btn'>Get Started</button>
            </div>
        </div>
        <Testimonials />
    </div>
  )
}

export default Home