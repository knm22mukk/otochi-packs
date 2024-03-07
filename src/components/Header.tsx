import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@/const/navLinks';

export default function Header() {
  return (
    <header className='bg-white p-4'>
      <div className='container mx-auto flex h-32 items-center justify-between'>
        <Link href='/' aria-label='Home' className='flex items-center p-2'>
          <Image src='/images/logo.jpg' alt='otochi packs' width={150} height={150} />
        </Link>
        <ul className='hidden items-stretch space-x-3 lg:flex'>
          {navLinks.map((link) => (
            <li key={link.name} className='flex'>
              <Link
                href={link.path}
                className='mb-1 flex items-center px-4 text-lg font-bold uppercase text-orange-500 hover:scale-110 hover:underline'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden lg:block'>
          <button className='self-center rounded bg-orange-600 px-8 py-3 font-semibold text-gray-50'>
            Sign up
          </button>
        </div>
        <div className='flex items-center lg:hidden'>
          <button className='self-center rounded px-8 py-3'>menu</button>
          <button className='self-center rounded bg-orange-600 px-8 py-3 font-semibold text-gray-50'>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
