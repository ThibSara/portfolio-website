"use client";
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XmarkIcon} from '@heroicons/react/24/solid'

const navLinks =[
    {href:"#about", title:"About"},
    {href:"#projects", title:"Projects"},
    {href:"#contact", title:"Contact"},
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
   <nav className="fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90">
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
    <Link href={"/"}   className = " text-2xl md:text-5xl text-white font-semibold">
        LOGO
    </Link>
    <div className="mobile-menu block md:hidden">
        {
            navbarOpen ?(
                <button className = "text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                    <Bars3Icon className="h-5 w-5"/>
                </button>
            ):(
                <button className = "text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                    <XmarkIcon className="h-5 w-5"/>
                </button>
            )
        }
    </div>
    <div className ="menu hidden md:block md:w-auto" id="navbar">
    <ul clasName ="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
        {navLinks.map((link,index) => (
            <li key={index} className="inline-block md:block">
                <NavLink href={link.href} title = {link.title}/>
            </li>
        ))}
    </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar