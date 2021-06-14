import Head from 'next/head';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CgMail as Email, CgTwitter as Twitter } from "react-icons/cg";
import { AiFillLinkedin as LinkedIn, AiFillGithub as Github } from "react-icons/ai";


// import Email from '../public/Images/email.svg';
// import LinkedIn from '../public/Images/linkedin.svg';
// import Twitter from '../public/Images/twitter-sign.svg';
// import Github from '../public/Images/github.svg';

export default function Experience() {
  return (
    <div className="flex flex-col min-h-100 bg-experience bg-cover bg-opacity-100">
    <div className="bg-black bg-opacity-50 h-screen">

    
      <Head>
        <title>Specialization-Victor's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl">Victor</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded border-white-400 hover:text-white hover:border-red">
            <svg class="fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">
                Home
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">
                Specialization
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red">
                Blog
            </a>
            </div>
            <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
      </nav>
      

      <div className="flex flex-col justify-items-start self-center w-80 ml-6 mt-4">
      <div className="flex flex-row">
      <h1 className="text-4xl text-white font-medium mr-8 tracking-wider">Experience</h1>
      <div className="flex flex-row text-white">
      <FaChevronLeft 
        className="h-12 w-12"
      />
      <FaChevronRight className="h-12 w-12" />
      </div>
      </div>
      
  
      <ol className="text-white mt-10 list-disc list-inside">
      {/* <lh className="underline">Tech stack</lh> */}
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Node jS</li>
        <li>Express</li>
        <li>React jS</li>
        <li>Next jS</li>
        <li>React jS</li>
      </ol>
      </div>
      

      
      </div>
      <footer className="fixed bottom-0 w-full">
      <p className="flex justify-center text-white underline mb-2">Contact me</p>
      
      <div className="flex justify-center text-white py-2">
      <div className="mr-4">
      <Email />
     </div>
      <div className="mx-4">
      <Github />
      </div>
      <div className="mx-4">
      <Twitter />
      </div>
      <div className="ml-4">
      <LinkedIn />
      </div>
      </div>
      
      </footer>
    </div>
  )
}
