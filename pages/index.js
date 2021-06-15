import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-900">
      <div className="flex justify-center">
      <Image
      src="/images/image.png"
      height={240}
      width={240}
      alt="My Picture"
      />
      </div>
      

      <div className="text-white text-center">
          <h1 className="text-5xl text-yellow-500"><span className="block text-5xl text-yellow-500">Hello, {' '}</span>I am Victor</h1>
          <p className="my-2">I'm a web developer.</p>
      </div>
    </div>
  )
}
