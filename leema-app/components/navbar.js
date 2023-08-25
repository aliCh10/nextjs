'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './footer.module.css';


export default function Navbar() {
  const [menuopen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    setMenuOpen(!menuopen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 600;

  return (
    <div className={"navbar navbar-expand-lg bg-blue-950 "}>
      <div className="container-fluid ">
        <Image 
          src="/images/leema.svg"
          width={200}
          height={200}
          alt='picture of logo'
        /> 
        {isMobile ? (
          <div className="mobile-menu-button">
            <AiOutlineMenu onClick={handleMenu} />
          </div>
        ) : (
          <ul className={`${styles.texthover} flex justify-center items-center mt-6 text-center`}>
            <li className=" nav text-xl text-white mb-4 mr-4">
              <Link href="/">Home</Link>
            </li>
            <li className=' nav text-xl text-white mb-4  mr-4' >
              <Link href="/about">About</Link>
            </li>
            <li className=' nav text-xl text-white mb-4  mr-4'>
              <Link href="/contact">Contact</Link>
            </li>
            <li className=' nav text-xl text-white mb-4  mr-4'>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        )}
        <nav className="navbar navbar-dark" aria-label="First navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button 
              onClick={handleMenu} 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarsExample01" 
              aria-controls="navbarsExample01" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className={menuopen ? 'left-0 top-0 w-[70%] h-screen relative bg-white ease-in duration-500 flex flex-col justify-start z-50 ' : 'hidden'}>
          <div className='flex absolute top-6 right-6 w-full justify-end items-center'>
            <AiOutlineClose onClick={handleMenu}  />
          </div>   
          <ul className='flex flex-col justify-center items-center mt-20'>
            <li className="text-2xl text-black mb-4">
              <Link href="/">Home</Link>
            </li>
            <li className='text-2xl text-black mb-4'>
              <Link href="/about">About</Link>
            </li>
            <li className='text-2xl text-black mb-4'>
              <Link href="/contact">Contact</Link>
            </li>
            <li className='text-2xl text-black mb-4'>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div> 
      </div>
    </div>
  );
}
