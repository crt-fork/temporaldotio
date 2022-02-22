import React, { cloneElement } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

ContextLink.propTypes = {
  href: PropTypes.string,
  activeClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.elementType
}

export default function ContextLink({ href, activeClass, className = '', children }) {
  const router = useRouter()

  let classes = className;
  if (router.pathname === href && activeClass) {
    classes = `${className} ${activeClass}`
  }

  return <Link href={href} passHref={true}>{cloneElement(children, { classes })}</Link>;
}

