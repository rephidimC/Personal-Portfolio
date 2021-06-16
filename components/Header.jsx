import Link from 'next/link'
import { useState } from 'react'

function Header() {
  // const isOpen = false;

  const [desire, setDesire] = useState(false);



  function release() {
    if (desire === false) {
      setDesire(true);
    } else {
      setDesire(false);
    }
  }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="font-semibold text-xl">Victor</a>
        </Link>
      </div>
      <div onClick={release} className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-white-400 hover:text-white hover:border-red">
          <svg
            className="fill-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
          >
            <title>Menu</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h16M4 18h16"></path>
            {/* <path stroke-linecap="round" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> */}
          </svg>
        </button>
      </div>
      <div className={desire ? "block w-full flex-grow lg:flex lg:items-center lg:w-auto" : "hidden" }>
        <div className="text-sm lg:flex-grow">
        <Link href="/background">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">Background</a>
        </Link>

        <Link href="/projects">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">Projects</a>
        </Link>
        
        <Link href="#footer">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">Contact me</a>
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
