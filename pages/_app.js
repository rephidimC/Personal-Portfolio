import "tailwindcss/tailwind.css";
import Head from "next/head";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import Header from "../components/Header";

const backgrounds = {
  "/specialization": "bg-growth bg-fixed bg-cover",
  "/experience": "bg-experience bg-fixed bg-cover"
}


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.pathname);
  console.log(backgrounds[router.pathname]);
  

  return (
    <div className={backgrounds[router.pathname]} >
    <div className="bg-black bg-opacity-50 h-full">
    <Head>
        <title>Specialization-Victor's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </div>
  );
}


// bg-experience 
export default MyApp;
