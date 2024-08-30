import './App.css'
import Navbar from './components/Navbar'
import WorkCard from './components/WorkCard'
import xGreen from './assets/x-green.svg'
import linkedinGreen from './assets/linkedin-green.svg'
import githubGreen from './assets/github-green.svg'
import whatsappBlack from './assets/whatsapp-black.svg'
import arrowIconWhite from './assets/arrow-diagonal-white.svg'
import arrowDiagonal from './assets/arrow-diagonal.svg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


function App() {

  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)

  return (
  <>
    <div className='center-div'>
      <div className='background-blur-green'></div>
    </div>

    <Navbar />

    <section className='hero-section'>
      <div className='greeter-div'>
        <p className='greeter gravitas'>Hola!</p>
      </div>
      <p className='gravitas hero-text'>I am Destiny</p>
      <p className='gideon-roman'>A full stack software engineer and designer.</p>
      <div className='button-group flex-col mt-4'>
        <button className='button button-filled'><Link>chat me <img src={whatsappBlack}></img></Link></button>
        <button className='button button-outlined button-link'><Link>View resume <img src={arrowIconWhite}></img></Link></button>
      </div>
      <div className='socials'>
        <p>connect with me</p>
        <div className='button-group'>
          <Link className='cursor-pointer' to={'https://x.com/DEst'}><img src={xGreen}></img></Link>
          <Link className='cursor-pointer' to={'https://linkedin.com/in/DestinyKevogo'}><img src={linkedinGreen}></img></Link>
          <Link className='cursor-pointer' to={'https://github.com'}><img src={githubGreen}></img></Link>
        </div>
      </div>
    </section>

    <section id='about' ref={aboutRef}>
      <h1 className='gravitas header'>About</h1>
      <div className='about-cont'>
        <img src={arrowDiagonal}></img>
        <p className='gideon-roman width-740'>I have horned my development skills over the years through working in small startups and building custom tech tools for people and small businesses. Throughout this experience I have gotten to understand various ways of solving tech related problems and come up with patterns that help achieve this. Ever since I was young I loved tweaking and playing around with electronic gadgets, this curiosity lead me into realizing and understanding the physics that lies in the operation of these gadgets which later led me into the tech industry.</p>
      </div>
    </section>

    <section id='work' ref={workRef}>
      <h1 className='gravitas header'>work</h1>
      <WorkCard name={'veri doctor'} position={'Full stack software engineer'} timeline={'March 2024 - Present'}/>
      <WorkCard name={'nanesoft labs'} position={'Full stack software engineer'} timeline={'March 2024 - Present'}/>
      <WorkCard name={'SOMO'} position={'contract software engineer'} timeline={'March 2024 - Present'}/>
    </section>

    <section id='contact' ref={contactRef}>
      <h1 className='gravitas header'>contact</h1>
    </section>
  </>
  )
}

export default App
