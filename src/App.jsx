import React from 'react'
import { useState, useEffect } from 'react'

// React Components
import NavLink from './components/NavLink.jsx'
import LinkButton from './components/LinkButton'
import StylishButton from './components/StylishButton.jsx'
import TimelineItem from './components/TimelineItem'
import SectionHeader from './components/SectionHeader.jsx'
import ContactLink from './components/ContactLink.jsx'

// Images
import emailIcon from './assets/envelope-solid.svg'
import githubIcon from './assets/github-brands.svg'
import linkedInIcon from './assets/linkedin-brands.svg'
import profilePicture from './assets/profilepic.jpg'

// Data
import * as DATA from './data.js'
import resume from './assets/Resume.docx.pdf'

const App = () => {
  function emailClickHandler(e) {
    window.location.href =
      'https://mail.google.com/mail/?view=cm&to=kenlinahs@gmail.com'
    e.preventDefault()
  }

  const [isActive, setIsActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting)
          if (!entry.isIntersecting) return
          setIsActive(entry.target.id)
        })
      },
      {
        threshold: 0.4,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="flex">
      <div
        id="nav-bar"
        className="sticky top-0 left-0 z-10 ml-5 hidden h-screen flex-col items-center justify-between py-5 sm:flex lg:w-1/6 xl:w-5/12"
      >
        <p className="block justify-center text-2xl font-bold text-nowrap text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Ken Lin
        </p>
        <nav
          id="nav-items"
          className="flex h-1/3 w-full flex-col content-center space-y-5 pr-10 pl-5 text-xs sm:h-1/3 sm:space-y-10 sm:pl-10 sm:text-sm md:pl-15 md:text-base lg:pl-20 lg:text-xl xl:pl-30"
        >
          <NavLink href={'#about-me'} isActive={isActive === 'about-me'}>
            About Me
          </NavLink>
          <NavLink href={'#projects'} isActive={isActive === 'projects'}>
            Projects
          </NavLink>
          <NavLink
            href={'#work-experience'}
            isActive={isActive === 'work-experience'}
          >
            Work Experience
          </NavLink>
          <NavLink href={'#contact-me'} isActive={isActive === 'contact-me'}>
            Contact Me
          </NavLink>
        </nav>
        <nav
          id="links-container"
          className="flex w-20 flex-col justify-between space-y-2 space-x-3 sm:h-7 sm:w-25 sm:flex-row md:h-15 md:w-40 lg:h-20 lg:w-50 xl:w-60"
        >
          <LinkButton
            icon={emailIcon}
            id={'email-icon'}
            alt={'Email Icon'}
            clickHandler={emailClickHandler}
          />
          <LinkButton
            href={'https://github.com/K3nLin'}
            icon={githubIcon}
            id={'github-icon'}
            alt={'Github Icon'}
          />
          <LinkButton
            href={'https://www.linkedin.com/in/ken-j-lin'}
            icon={linkedInIcon}
            id={'email-icon'}
            alt={'Email Icon'}
          />
        </nav>
      </div>
      <div id="section-cont" className="flex flex-col pl-5 sm:pl-8 xl:mr-96">
        <section
          id="about-me"
          className="flex h-screen flex-col items-center justify-center space-y-5 pt-50 sm:space-x-5 md:flex-row md:pt-0"
        >
          <div className="mx-5 inline-block size-55 shrink-0 overflow-hidden rounded-full sm:size-50 md:size-65 lg:mx-10 lg:size-90 xl:mx-15">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="scale-130 object-cover object-center"
            ></img>
          </div>
          <div id="about-me-right" className="flex-2/3 space-y-10">
            <h1 className="text-xl font-bold text-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              A Little About Me!
            </h1>
            <p className="xl:text-xl">
              My name is Ken Lin, I am currently a senior at Stony Brook
              University majoring in Computer Engineering. I am an aspiring
              Full-Stack developer who loves to learn new technologies and
              leverage them to solve real-world problems.
            </p>
            <StylishButton
              hoverText={'Download Now'}
              href={resume}
              target={'_blank'}
            >
              View Resume
            </StylishButton>
          </div>
        </section>
        <section id="projects" className="border-y-1">
          {DATA.PROJECTS.map((proj, i) => (
            <TimelineItem
              duration={proj.duration}
              title={proj.title}
              description={proj.description}
              skills={proj.skills}
              key={`project${i}`}
            />
          ))}
        </section>
        <section id="work-experience" className="border-b-1">
          {DATA.WORK_EXPERIENCES.map((experience, i) => (
            <TimelineItem
              duration={experience.duration}
              title={experience.title}
              company={experience.company}
              bullets={experience.bullets}
              key={`experience${i}`}
            />
          ))}
        </section>
        <section id="contact-me" className="flex flex-col py-5 sm:flex-row">
          <div className="flex flex-1/2 flex-col items-center space-y-5 border-b-1 align-middle sm:border-b-0">
            <SectionHeader title={'My Links'} fontSize="md:text-5xl" />
            <ContactLink
              href={'https://www.linkedin.com/in/ken-j-lin'}
              target={'_blank'}
            >
              LinkedIn
            </ContactLink>
            <ContactLink href={'https://github.com/K3nLin'} target={'_blank'}>
              Github
            </ContactLink>
          </div>
          <div className="flex-1/2">
            <SectionHeader title={'Contact Me'} fontSize="md:text-5xl" />
            <SectionHeader title={'KenLinAHS@gmail.com'} />
            <SectionHeader title={'Flushing / New York'} />
            <SectionHeader title={'929-293-6186'} />
          </div>
        </section>
        <h3 className="py-3 text-center">
          © Copyright by{' '}
          <a href="https://github.com/K3nLin" target="_blank">
            Ken Lin
          </a>
          . Use for your portfolio. Don't claim as your own.
        </h3>
      </div>
    </div>
  )
}

export default App
