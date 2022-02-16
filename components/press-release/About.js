import React from 'react';
import lineBreak from '../../utilities/lineBreak'

export default function About({ copy = {}, contacts = [], className}) {
  return (
    <div className={`${className}`}>  
      <div className='max-w-[900px] mx-auto px-10'>
        <h2 className='font-bold text-4xl	mb-4'>{copy.headline}</h2>
        <p className='linebreak-space text-lg	md:text-2xl	' >{lineBreak(copy.body)} </p>

        <div className='sm:flex sm:justify-between pb-20 lg:pb-48'>
          {contacts.map(contact => (
            <div className='pb-6 sm:pb-0 xl:w-6/12' key={contact.email}>
              <h3 className='font-bold text-lg md:text-2xl'>{contact.title}</h3>
              <p className='text-lg	md:text-2xl' >{contact.name} </p>
              <p className='text-lg md:text-2xl' >{contact.company} </p>
              <a href={`mailto:${contact.email}`} className='underline text-lg md:text-2xl'>{contact.email}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

