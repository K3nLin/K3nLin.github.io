import { useState } from 'react'
import React from 'react'

const StylishButton = ({ children, hoverText, href, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  return (
    <a
      href={href}
      class="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-white px-6 py-3 font-medium transition-all hover:bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span class="bg-darkOrange absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        {isHovered ? hoverText : children}
      </span>
    </a>
  )
}

export default StylishButton
