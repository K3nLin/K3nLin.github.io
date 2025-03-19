import React from 'react'

const LinkButton = ({ icon, href, clickHandler, ...props }) => {
  return (
    <a href={href} target="_blank" onClick={clickHandler}>
      <img
        src={icon}
        {...props}
        className="z-20 h-8 w-8 hover:animate-bounce md:h-14 md:w-14"
      />
    </a>
  )
}

export default LinkButton
