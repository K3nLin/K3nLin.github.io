import React from 'react'

const TimelineItem = ({
  duration,
  title,
  company,
  description,
  bullets,
  skills,
  ...props
}) => {
  return (
    // <div className="mx-5 inline-block size-55 shrink-0 overflow-hidden rounded-full sm:size-50 md:size-65 lg:mx-10 lg:size-90 xl:mx-15"></div>
    <div className="flex flex-col py-5 text-lg sm:text-xl md:flex-row">
      <div id="duration" className="flex-1/2 py-5">
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
            {bullets.map((bullet) => (
              <li>&bull; {bullet}</li>
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
