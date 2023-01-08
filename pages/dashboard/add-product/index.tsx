import Head from "next/head";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <>
      <Head>
        <title>Add Product</title>
      </Head>
      <div>
        <h1 className="text-2xl font-bold text-violet-500">Add Product</h1>
        <form action="" className="bg-white p-10 rounded mt-4 font-poppins">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-500"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="countInStock"
                className="text-sm font-medium text-gray-500"
              >
                Count In Stock
              </label>
              <input
                type="number"
                name="countInStock"
                id="countInStock"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-500"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-500"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="text-right mt-4">
            <button className="bg-violet-500 text-white px-4 py-2 rounded mt-4 text-right">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

AddProduct.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default AddProduct;
