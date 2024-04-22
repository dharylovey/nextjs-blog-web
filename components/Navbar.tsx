
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggler'

export default function Navbar() {

  return (
    <nav className='w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-4'>
      <Link href='/' className='font-bold text-4xl'>
        Dharyl<span className='text-primary'>Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  )
}
