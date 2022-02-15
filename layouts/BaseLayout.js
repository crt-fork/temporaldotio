import React from 'react'
import NavBar from '@/components/Nav';
import Footer from '@/components/Footer';

// TODO: determine where container breaking element is and remove overflow-x-hidden
export default function BaseLayout({ children, data = {} }) {
  return (
    <>
      <NavBar nav={ data.nav || {} }/>
        <main className='overflow-x-hidden'>{ children }</main>
      <Footer footer={ data.footer || {} }/>
    </>
  )
}
