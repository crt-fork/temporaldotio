import Link from 'next/link';
import Sidebar from '@/components/base/Sidebar';
import React, { useRef, createRef, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useRouter } from 'next/router';
import { useWindowSize } from '@/hooks/useWindowSize';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar({ nav = {} }) {
  const router = useRouter();
  const linksRef = nav.links.length ? useRef(nav.links.map(() => createRef())) : useRef([]);
  const [activeBarRect, setActiveBarRect] = useState({});
  const windowSize = useWindowSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const calcLinkUnderline = useCallback((rect) => {
    const coords = {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      left: Math.round(rect.left), // 40px = margin-right on nav
      right: Math.round(rect.right),
      top: Math.round(rect.top),
      bottom: 0 // needs to align with nav bottom
    };
    setActiveBarRect({ ...coords })
  });

  function toggleDrawer(val = false) {
    if (val) {
      setIsDrawerOpen(!isDrawerOpen);
    }
    setIsDrawerOpen(val);
  };

  useIsomorphicLayoutEffect(() => {
    linksRef.current.forEach(ref => {
      const linkAddress = ref.current.attributes['href'].value;
      if (linkAddress == router.asPath && (typeof window !== undefined)) {
        calcLinkUnderline(ref.current.getBoundingClientRect());
      }
    });
  }, [windowSize.width, router.asPath]);

  return (
    <header>
      <nav className="w-full py-[1.375rem] bg-white shadow-lg px-10 relative">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between capitalize">
          <a
            className="border-0 hover:shadow-none hover:no-underline bg-transparent"
            href={nav.icon.href}
            type="button">
            <img
              src={nav.icon.src || '/images/logos/logo-temporal-with-copy.svg'}
              alt={nav.icon.alt || ''}
              height={'40px'}
            />
          </a>
          <div
            className="hidden lg:flex flex-row"
            role="navigation">
            <ul id="drawer-nav-list"
              className="flex flex-row flex-initial list-style-none">
              {nav.links.map((link, i) => (
                <li
                  key={`nav-item-${i}`}
                  className="text-center px-2.5 text-lg flex align-item-center">
                  <Link
                    className="nav-link"
                    target={link.target}
                    passHref={true}
                    href={link.href}>
                    <a ref={linksRef.current[i]}>
                      {(link.icon && link.icon.length) ? (
                        <FontAwesomeIcon
                        title={link.copy}
                        className='h-[1em] white px-2.5 inline-block'
                        icon={["fab", link.icon]}/>
                      ) : (
                        <span>{link.copy}</span>
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex-initial ml-10'>
              <Link
                target={nav.cta.target}
                href={nav.cta.href}>
                  <a className="py-[5px] px-[16px] border rounded-md border-black text-sm hover:border-white hover:bg-black hover:text-white">
                    {nav.cta.copy}
                  </a>
              </Link>
            </div>
          </div>
          <button
            className='block py-[5px] px-[16px] lg:hidden border-0 hover:shadow-none hover:no-underline bg-transparent focus:no-underline'
            aria-label="open navigation"
            aria-expanded={isDrawerOpen}
            aria-controls='drawer-nav-list'
            onClick={toggleDrawer}>
            <img src={nav.mobileNavBtn.icon}
              alt={nav.mobileNavBtn.alt}
            />
          </button>
        </div>
        <Sidebar
          icon={nav.mobileNavIcon}
          isOpen={isDrawerOpen}
          toggleFn={toggleDrawer}>
          <div className='px-10 text-white text-center mt-[4.5rem] capitalize'>
            <Link
              target={nav.cta.target}
              href={nav.cta.href}>
              <a className="py-[5px] px-[16px] block border rounded-md border-black bg-white w-full text-black text-sm hover:border-white hover:bg-black hover:text-white">
                {nav.cta.copy}
              </a>
            </Link>
            <ul className='mt-8'>
              {nav.links.map((link, i) => (
                <li
                  key={`sidebar-nav-item-${i}`}
                  className="text-left pb-4 text-lg hover:text-blue-200 focus:text-blue-200">
                  <Link
                    className="nav-link"
                    target={link.target}
                    passHref={true}
                    href={link.href}>
                      <a onClick={() => toggleDrawer()}>{link.copy}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Sidebar>
        <div
          className={clsx('h-[2px] border-black bg-black absolute rounded-t-lg bottom-0 ease-in-out transition-all duration-300')}
          style={{
            width: activeBarRect.width,
            left: activeBarRect.left
          }}>
        </div>
      </nav>
    </header>
  )
}
