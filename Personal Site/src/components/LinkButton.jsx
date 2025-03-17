import React from 'react'

const LinkButton = ({ icon, id, alt, href }) => {
  return (
    <a href={href} target="_blank">
      <img src={icon} id={id} alt={alt} className="z-20 h-14 w-14" />
    </a>
  )
}

export default LinkButton
