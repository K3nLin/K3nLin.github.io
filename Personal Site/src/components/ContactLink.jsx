import React from 'react'

const ContactLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text relative block w-max cursor-pointer text-center text-2xl text-white ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-700 after:ease-in-out hover:text-white hover:before:w-[60%] hover:after:w-[60%] md:text-4xl"
    >
      {children}
    </a>
  )
}

export default ContactLink
