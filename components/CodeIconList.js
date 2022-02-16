import clsx from 'clsx'
import React from 'react'

export default function CodeIconList({ icons = [], className = '' }) {
  return (
    <ul className={clsx('flex flex-wrap items-center justify-center', className)}>
      {icons.map((icon, i) => (
        <li key={`code-icon-item-${i}`}
          className='px-4'>
          <img src={`${icon.src}`} alt={`${icon.alt}`} className='grayscale' />
        </li>
        ))
      }
    </ul>
  )
}
