import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Header from "../components/Header";

const backgrounds = {
  "/projects": "bg-growth bg-fixed bg-cover h-full w-full",
  "/background": "bg-experience bg-fixed bg-cover h-full w-full",
  "/": "bg-gray-900 bg-fixed bg-cover h-full",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // console.log(router.pathname);
  // console.log(backgrounds[router.pathname]);

  return (
    <div className={backgrounds[router.pathname]}>
      <div className="flex flex-col bg-black bg-opacity-50 h-full w-full">
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

export default MyApp;
