'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { navLinks } from '@/const/navLinks';

export default function MobileNav() {
  const [navShow, setNavShow] = useState<boolean>(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return (
    <>
      <button
        type='button'
        aria-label='Toggle Menu'
        className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-orange-500 hover:bg-orange-100 hover:text-orange-600'
        onClick={onToggleNav}
      >
        <AiOutlineMenu />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end'>
          <button
            className='mr-10 mt-10 h-10 w-10 rounded-lg p-2 text-2xl text-orange-500 hover:bg-orange-100 hover:text-orange-600'
            aria-label='Toggle Menu'
            onClick={onToggleNav}
          >
            <AiOutlineClose />
          </button>
        </div>
        <nav className='fixed mt-8 h-full'>
          {navLinks.map((link) => (
            <div key={link.name} className='px-12 py-4'>
              <Link
                href={link.path}
                className='text-2xl font-bold uppercase tracking-widest text-orange-500 hover:underline'
                onClick={onToggleNav}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
