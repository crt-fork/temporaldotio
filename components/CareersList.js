import React from 'react';
import PropTypes from 'prop-types';

CareersList.proptypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    hostedUrl: PropTypes.string,
    text: PropTypes.string,
    location: PropTypes.string
  })),
  showTeam: PropTypes.bool,
  team: PropTypes.string
}

export default function CareersList({ jobs = [], team = '', showTeam = false }) {
  return (
    <div>
      <div className="space-y-3">
        {jobs.map((job, i) => (
          <CareersList.CareerLink
            key={`${job.hostedUrl}-${i}`}
            team={team}
            showTeam={showTeam}
            hostedUrl={job.hostedUrl}
            text={job.text}
            location={job.location}
          />
        ))}
      </div>
    </div>
  )
}

CareersList.CareerLink = ({ hostedUrl, text, location, team = '', showTeam = false }) => (
  <a
    href={hostedUrl}
    className="p-5 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-3 hover:bg-gray-100 border border-gray-100 card-shadow"
  >
    <p className="col-span-3 text-xl mr-5">{(showTeam && team.length) && `${team} - `}{text}</p>
    <p className="col-span-1 flex items-center text-md space-x-2">
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{location}</span>
    </p>
  </a>
)
