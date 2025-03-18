import React from 'react'

// React Components
import NavButton from './components/NavButton'
import LinkButton from './components/LinkButton'
import TimelineItem from './components/TimelineItem'

// Images
import emailIcon from './assets/envelope-solid.svg'
import githubIcon from './assets/github-brands.svg'
import linkedInIcon from './assets/linkedin-brands.svg'
import profilePicture from './assets/profilepic.jpg'

// Data
import * as DATA from './data.js'

const App = () => {
  return (
    <div className="flex">
      <div
        id="nav-bar"
        className="sticky top-0 left-0 z-10 ml-5 flex h-screen flex-col items-center justify-between py-5 lg:w-1/6 xl:w-5/12"
      >
        <p className="block justify-center text-2xl font-bold text-nowrap text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Ken Lin
        </p>
        <nav
          id="nav-items"
          className="flex h-1/3 w-full flex-col content-center space-y-5 pr-10 pl-5 text-xs sm:h-1/3 sm:space-y-10 sm:pl-10 sm:text-sm md:pl-15 md:text-base lg:pl-20 lg:text-xl xl:pl-30"
        >
          <a className="block">About Me</a>
          <a className="block">Projects</a>
          <a className="block">Work Experience</a>
          <a className="block">Contact Me</a>
        </nav>
        <nav
          id="links-container"
          className="flex w-20 flex-col justify-between space-y-2 space-x-3 sm:h-7 sm:w-25 sm:flex-row md:h-15 md:w-40 lg:h-20 lg:w-50 xl:w-60"
        >
          <LinkButton
            href={'mailto:kenlinahs@gmail.com'}
            icon={emailIcon}
            id={'email-icon'}
            alt={'Email Icon'}
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
          className="flex h-screen flex-col items-center justify-center space-y-5 sm:space-x-5 md:flex-row"
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
            <button>View Resume</button>
          </div>
        </section>
        <section id="projects" className="pb-10">
          {DATA.PROJECTS.map((proj) => (
            <TimelineItem
              duration={proj.duration}
              title={proj.title}
              description={proj.description}
              skills={proj.skills}
            />
          ))}
        </section>
        <section id="work-experiences">
          {DATA.WORK_EXPERIENCES.map((experience) => (
            <TimelineItem
              duration={experience.duration}
              title={experience.title}
              company={experience.company}
              bullets={experience.bullets}
            />
          ))}
        </section>
        <section></section>
      </div>
    </div>
  )
}

export default App
