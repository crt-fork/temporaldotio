import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
// import { Banner } from './Banner';

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* <Banner />  temporarily comment out, no workshop */}
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
