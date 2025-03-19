import React from 'react'

const TimelineItem = ({
  duration,
  title,
  company,
  description,
  bullets,
  skills,
}) => {
  return (
    <div className="flex flex-col py-5 text-lg sm:text-xl md:flex-row">
      <div id="duration" className="d, flex-1/2 py-5 sm:py-0">
        <p className="text-center">{duration}</p>
      </div>
      <div id="description" className="flex-1/2 space-y-4">
        {company ? (
          <p className="text-2xl font-bold xl:text-4xl">{company}</p>
        ) : null}
        <p className="text-2xl font-bold xl:text-4xl">{title}</p>
        {description ? (
          <p>{description}</p>
        ) : (
          <ul className="space-y-2">
            {bullets.map((bullet, i) => (
              <li key={`${company}-${i}`}>&bull; {bullet}</li>
            ))}
          </ul>
        )}
        {skills ? (
          <div id="skills-container" className="w-full space-y-2 space-x-3">
            {skills.map((skill, i) => (
              <div
                className="bg-darkOrange text-mediumdOrange inline-block w-max rounded-full px-2 py-1 sm:px-4 sm:py-3"
                key={i}
              >
                {skill}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TimelineItem
