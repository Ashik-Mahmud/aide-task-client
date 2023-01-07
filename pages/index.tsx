import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import Card from "../src/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aide Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 pb-16  overflow-y-hidden">
        <div className="bg-gray-100">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-56">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                The Freedom to Create the{" "}
                <span className="text-indigo-700">Websites</span> You Want
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={"/login"}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
              >
                Get Started
              </Link>
              <Link
                href={"/products"}
                className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
        {/* products */}

        <div className="my-5 py-5">
          <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col   mx-auto sm:w-[60rem] mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center text-gray-800 font-black leading-7 md:leading-5">
                Our Products
              </h1>
              <p className="mt-0 sm:mt-1 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <div className="text-right">
              <Link href={"/products"} className="underline mt-5 inline-block">
                Get All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
