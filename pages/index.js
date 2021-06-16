import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex justify-center">
      <Image
      src="/images/image.png"
      height={240}
      width={240}
      alt="My Picture"
      />
      </div>
      
      <div className="text-white text-center">
          <h1 className="text-5xl text-yellow-500"><span className="block text-5xl text-yellow-500">Hello, {' '}</span>I am Victor.</h1>
          <p className="my-2">I'm a web developer.</p>
          <p className="mt-4 mx-4 mb-44">Please, feel free to go through my page and incase you need to {" "} 
          <Link href="#footer">
            <span className="text-blue-500 underline">contact me</span>
          </Link>
          , don't hesitate.</p>
      </div>
    </div>
  )
}
