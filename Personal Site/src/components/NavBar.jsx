const NavBar = ({ children }) => {
  return (
    <div
      id="nav-bar"
      className="fixed top-0 left-0 z-10 flex h-full w-3/12 flex-col items-center justify-between bg-black"
    >
      {children}
    </div>
  )
}

export default NavBar
