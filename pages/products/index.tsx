import Head from "next/head";
import Card from "../../src/components/Card";

type Props = {};

const Products = (props: Props) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="bg-gray-100 py-36 pt-16">
        <div className="container mx-auto px-6 pb-8">
          <div className="flex justify-center items-center flex-col   mx-auto sm:w-[60rem] mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center text-gray-800 font-black leading-7 md:leading-5">
              Our Products
            </h1>
            <p className="mt-0 sm:mt-1 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              A professonal website drives sales. Create a beautiful website to
              impress and engage new customers and establish your business
              online
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
