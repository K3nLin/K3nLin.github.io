import React from 'react'

const SectionHeader = ({ title, fontSize = 'md:text-4xl' }) => {
  return <h2 className={`pb-5 text-center text-2xl ${fontSize}`}>{title}</h2>
}

export default SectionHeader
