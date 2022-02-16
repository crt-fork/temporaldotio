import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Sidebar({ isOpen, toggleFn, icon = {}, children }) {
  function SidebarChildren() {
    return isOpen ? children : null;
  }

  function triggerToggle(val = false) {
    toggleFn(val);
  }

  return (
    <>
      <div onClick={() => triggerToggle()} className="z-10 fixed inset-0 transition-opacity" style={isOpen ? {} : { display: 'none' }}>
        <div tabIndex="0" className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <aside className={
        clsx(
          "transform top-0 left-0 max-w-screen-sm w-full bg-black text-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0",
          isOpen ? 'translate-x-0' : '-translate-x-full',
          isOpen ? 'visibile' : 'invisible',
        )}>
          <div className='w-full py-[1.375rem] px-10 flex justify-between'>
            {isOpen && (
              <>
                <Link
                  href={icon.href || '/'}
                  passHref={true}
                >
                  <a
                    className="border-0 hover:shadow-none hover:no-underline bg-transparent focus:outline-none focus:shadow-none focus:no-underline"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    onClick={() => toggleFn()}
                    aria-label="Toggle navigation">
                    <img
                      src={icon?.src || '/images/logos/logo-temporal-with-copy.svg'}
                      alt={icon?.alt || ''}
                      height={'40px'}
                    />
                  </a>
                </Link>
                <button className='white px-2.5'
                  type="button"
                  aria-label="close navigation"
                  onClick={() => triggerToggle(false)}>
                  <FontAwesomeIcon
                    className='h-8'
                    alt='close navigation icon'
                    icon={['fal', 'times']} />
                </button>
              </>
            )}
          </div>
        <SidebarChildren/>
      </aside>
    </>
  );
}
