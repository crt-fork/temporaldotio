import React, { cloneElement } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ContextLink({ href, activeClass, className = '', children }) {
  const router = useRouter()

  let classes = className || ''
  if (router.pathname === href && activeClass) {
    classes = `${className} ${activeClass}`
  }

  return <Link href={href}>{React.cloneElement(children, { classes })}</Link>;
}

