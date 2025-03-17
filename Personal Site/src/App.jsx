import React from 'react'
import NavButton from './components/NavButton'
import LinkButton from './components/LinkButton'
import emailIcon from './assets/envelope-solid.svg'
import githubIcon from './assets/github-brands.svg'
import linkedInIcon from './assets/linkedin-brands.svg'

const App = () => {
  return (
    <div className="flex flex-row space-x-5">
      <div
        id="nav-bar"
        className="sticky z-10 flex h-screen w-1/6 flex-col items-center justify-between space-y-10 sm:w-3/12"
      >
        <p className="block text-2xl text-nowrap text-white sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          Ken Lin
        </p>
        <nav
          id="nav-items"
          className="flex h-1/3 w-full flex-col content-center space-y-7 pr-10 pl-5 text-xs sm:h-1/3 sm:space-y-10 sm:pl-10 sm:text-sm md:pl-15 md:text-base lg:pl-25 lg:text-xl xl:pl-40"
        >
          <a className="block">About Me</a>
          <a className="block">Projects</a>
          <a className="block">Work Experience</a>
          <a className="block">Contact Me</a>
        </nav>
        <nav
          id="links-container"
          className="flex flex-shrink-0 flex-col justify-between space-y-2 space-x-3 sm:h-7 sm:w-25 sm:flex-row md:h-15 md:w-50 lg:h-20 lg:w-70"
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
      <div id="section-cont" className="flex items-center">
        <section id="about-me">
          <div>
            <h1>A Little About Me!</h1>
            <p>
              My name is Ken Lin, I am currently a senior at Stony Brook
              University majoring in Computer Engineering. I am an aspiring
              Full-Stack developer who loves to learn new technologies and
              leverage them to solve real-world problems.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
