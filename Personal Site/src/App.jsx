import React from 'react'
import NavBar from './components/NavBar'
import NavButton from './components/NavButton'
import LinkButton from './components/LinkButton'
import emailIcon from './assets/envelope-solid.svg'
import githubIcon from './assets/github-brands.svg'
import linkedInIcon from './assets/linkedin-brands.svg'

const App = () => {
  return (
    <>
      <NavBar>
        <p className="block text-8xl text-white">Ken Lin</p>
        <nav id="nav-items">
          <a className="block">About Me</a>
          <a className="block">Projects</a>
          <a className="block">Work Experience</a>
          <a className="block">Contact Me</a>
        </nav>
        <nav
          id="links-container"
          className="flex h-20 w-full flex-row justify-between"
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
            icon={emailIcon}
            id={'email-icon'}
            alt={'Email Icon'}
          />
        </nav>
      </NavBar>
    </>
  )
}

export default App
