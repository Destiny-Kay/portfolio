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
import '/veri-doctor-landing.png'
import '/magic-mailer.png'
import Footer from './components/Footer'
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


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
        <div
          onClick={() => window.open('https://wa.me/+254706917928')}
          className='z-10'>
          <button className='button button-filled'>chat me <img src={whatsappBlack}></img></button>
        </div>
        <div
          onClick={() => window.open('https://docs.google.com/document/d/1gmno1JZ_hsTgmIXlM2RXpUQ9uxxYH8D-Ma-OSLqph2E/edit?usp=sharing')}
          className='z-10'>
          <button className='button button-outlined button-link'>View resume <img src={arrowIconWhite}></img></button>
        </div>
      </div>
      <div className='socials'>
        <p>connect with me</p>
        <div className='button-group'>
          <Link className='cursor-pointer z-10' to={'https://x.com/Destinykevogo'}><img src={xGreen}></img></Link>
          <Link className='cursor-pointer z-10' to={'https://www.linkedin.com/in/destinykevogo/'}><img src={linkedinGreen}></img></Link>
          <Link className='cursor-pointer z-10' to={'https://github.com/Destiny-Kay'}><img src={githubGreen}></img></Link>
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
      <WorkCard name={'veri doctor'} position={'Full stack software engineer (part-time)'} timeline={'March 2024 - Present'}/>
      <WorkCard name={'nanesoft labs'} position={'Full stack software engineer'} timeline={'Jul 2023 - Jan 2024'}/>
      <WorkCard name={'SOMO'} position={'contract software engineer'} timeline={'Oct 2023 - Jan 2024'}/>
      <WorkCard name={'SOMO'} position={'Software engineerming internship'} timeline={'May 2022 - Apr 2023'}/>
    </section>

    <section id='projects' ref={contactRef}>
      <h1 className='gravitas header'>Projects</h1>
      <div className='projects-grid'>
        <div>
          <p className='project-title gravitas'>Veri doctor.</p>
          <p className='project-role'>Role: Full stack software developer</p>
          <p className='project-description'>
              A web application that enables patients to book and manage their appointments with specialised service providers.
              Provides doctors with an application to manage their schedule and check all appointments on their side.
          </p>
          <div className='project-more-info'>
            <TbWorldWww className='cursor-pointer' onClick={() => {window.open('https://www.veridoctor.com')}}/>
            <FaGithub />
          </div>
        </div>
        <img src='veri-doctor-landing.png' className='project-image'></img>
      </div>

      <div className='projects-grid'>
        <div className=''>
          <p className='project-title gravitas'>Magic Mailer.</p>
          <p className='project-role'>Role: Full stack software developer</p>
          <p className='project-description'>
            Automates mass email sending process. Provides users with a way to manage their contacts and email groups. Allows mass emails to be sent with 
            just one click
          </p>
          <div className='project-more-info'>
            <FaYoutube />
            <FaGithub />
          </div>
        </div>
        <img src='magic-mailer.png' className='project-image col-start-1'></img>
      </div>

    </section>

    {/* <section id='contact'>
      <h1 className='gravitas header'>Get in touch</h1>
    </section> */}
    <Footer/>
  </>
  )
}

export default App
