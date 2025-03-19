import React from 'react'

const NavLink = ({ children, isActive, ...props }) => {
  return (
    <a
      className={`${isActive ? 'before:w-[60%] after:w-[60%]' : ''} relative w-max cursor-pointer text-white ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-700 after:ease-in-out hover:text-white hover:before:w-[60%] hover:after:w-[60%]`}
      {...props}
    >
      {children}
    </a>
  )
}

export default NavLink
