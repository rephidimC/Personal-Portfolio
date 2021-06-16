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
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="font-semibold text-xl md:text-3xl">Victor</a>
        </Link>
      </div>
      <div onClick={release} className="block">
        <button className="flex items-center px-3 py-2 md:py-3 md:px-4 border rounded border-white-400 hover:text-white hover:border-red">
          <svg
            className="fill-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
          >
            <title>Menu</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={desire ? "block w-full flex-grow" : "hidden" }>
        <div className="text-sm md:text-xl">
        <Link href="/background">
          <a className="block mt-4 text-white hover:text-red mr-4">Background</a>
        </Link>

        <Link href="/projects">
          <a className="block mt-4 text-white hover:text-red mr-4">Projects</a>
        </Link>
        
        <Link href="#footer">
          <a className="block mt-4 text-white hover:text-red mr-4">Contact me</a>
        </Link>
        </div>
      </div>
    </nav>
    <div className="h-px w-80 bg-gray-500 mt-8 md:w-4/5 mx-auto" />
    </div>
  );
}

export default Header;
