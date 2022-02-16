import React from 'react'
import NavBar from '@/components/Nav';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/base/AnnouncementBar';

// TODO: determine where container breaking element is and remove overflow-x-hidden
function BaseLayout({ children, data = {} }) {
  return (
    <>
      <NavBar nav={ data.nav || {} }/>
        <main className='overflow-x-hidden'>{ children }</main>
      <Footer footer={ data.footer || {} }/>
    </>
  )
}

BaseLayout.AlertBar = ({isShowAlert, closeFn, children}) => {
  return isShowAlert && (
    <AnnouncementBar closeFn={closeFn}>
      {children}
    </AnnouncementBar>
  )
}

export default BaseLayout;
