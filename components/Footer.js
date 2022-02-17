import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailForm from '@/components/base/EmailForm';
import PropTypes from 'prop-types';

Footer.propTypes = {
  footer: PropTypes.shape({
    signUp: PropTypes.object,
    socials: PropTypes.array,
    linkColumns: PropTypes.array.isRequired,
    legalItems: PropTypes.array.isRequired,
    partners: PropTypes.array
  })
}

export default function Footer({ footer }) {
  const {
    signUp,
    socials,
    linkColumns,
    legalItems,
    partners
  } = footer;

  return (
    <footer className='pt-24 pb-48 bg-black text-white overflow-x-hidden'>
      <h3 className="text-center text-2xl font-bold mb-5">{signUp.label?.copy || ''}</h3>
      <EmailForm data={signUp}/>
      <div className="container max-w-screen-xl w-full mx-auto flex flex-row justify-center text-white py-6 md:hidden">
        {socials.map((item, i) => (
          <Link key={`footer-socials-${i}`}
            href={item.href}
            target='_blank'>
            <a aria-label={item.alt}>
              <FontAwesomeIcon
                title={item.alt}
                className='h-6 white px-2.5'
                icon={["fab", item.icon]} />
            </a>
          </Link>
        ))}
      </div>
      <div className="container max-w-screen-xl w-full mx-auto pt-[2.25rem] md:pt-[3.5rem] px-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-5 capitalize">
        {linkColumns.map((col, index) => (
          <div key={`footer-col-${index}`}>
            <h4 className='text-xl font-bold mb-4'>
              {col.heading.href ? (
                <Link
                  href={col.heading.href}
                  passHref={true}>
                  <a className='hover:text-blue-200 focus:text-blue-200'
                    target={col.heading.target || '_self'}>
                    {col.heading.copy}
                  </a>
                </Link>
              ) : (
                <span>{col.heading.copy}</span>
              )}
            </h4>
            <ul>
              {col.links.map((link, i) => (
                <li className='text-left' key={`footer-col-link-${index}-${i}`}>
                  <Link
                    href={link.href || ''}
                    >
                    <a className='text-left font-sans font-thin hover:text-blue-200 focus:text-blue-200' target={link.target}>
                      {link.copy}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='hidden md:flex justify-center'>
          {socials.map((item, i) => (
            <Link key={`footer-socials-${i}`}
              passHref={true}
              href={item.href}
              target='_blank'>
              <a>
                <FontAwesomeIcon
                  title={item.alt}
                  className='h-6 white px-2.5'
                  icon={["fab", item.icon]} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className='container max-w-screen-xl w-full mx-auto px-10 flex flex-wrap gap-x-6 xl:flex-nowrap justify-between mt-5 capitalize'>
          <div className='flex basis-full grow-0 shrink-0 xl:basis-auto xl:order-2 flex-wrap justify-center'>
            <p className='w-full pb-5 lg:text-center xl:text-left'>Backed by</p>
            {partners.map((item, i) => (
              <div
                key={`footer-partners-${i}`}
                className='px-5'>
                <Link passHref={true}
                  href={item.href}>
                  <a>
                    <img src={item.image.src} alt={item.image.alt} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className='mt-20 xl:mt-0 flex basis-full shrink-0 grow-0 flex-wrap gap-8 xl:basis-auto xl:gap-4 justify-center xl:order-1 xl:justify-left' style={{fontSize:12}}>
            {legalItems.map((item, i) => {
              if (item.href) {
                return (
                  <div key={`footer-legal-items-${i}`}
                    className='flex items-end'>
                    <Link
                      href={item.href || ''}>
                      <a className='text-left font-sans font-thin hover:text-blue-200' target={item.target}>
                        {item.copy}
                      </a>
                    </Link>
                  </div>
                )
              }
              return (
                <div key={`footer-legal-items-${i}`}
                  className='flex items-end'>
                  <p className='text-left font-sans font-thin'
                    key={`footer-legal-item-${i}`}>
                    {item.copy}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
    </footer>
  )
}
