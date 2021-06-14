import Head from 'next/head'
import Image from 'next/image'

export default function Home2() {
  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-900">
      <Head>
        <title>Victor's Portfolio</title>
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
                Docs
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red mr-4">
                Examples
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
      
      <Image
      src="/images/image.png"
      height={360}
      width={360}
      alt="My Picture"
      />

      <div className="text-white text-center">
          <h1 className="text-5xl text-yellow-500"><span className="block text-5xl text-yellow-500">Hello, {' '}</span>I am Victor</h1>
          <p className="my-2">I'm a web developer</p>
      </div>

      <footer className="flex justify-center absolute bottom-0 w-full">
      <div className="mr-4">
      <Image
      src="/images/gmail.png"
      height={18}
      width={18}
      alt="Email"
      />
     </div>
<div className="mx-4">
<Image
      src="/images/github.png"
      height={18}
      width={18}
      alt="Github"
      
      />
</div>
<div className="mx-4">
<Image
      src="/images/twitter-sign.png"
      height={18}
      width={18}
      alt="Twitter"
      />
</div>
<div className="ml-4">
<Image
      src="/images/linkedin.png"
      height={18}
      width={18}
      alt="LinkedIn"
      />
      </div>
      </footer>
    </div>
  )
}
