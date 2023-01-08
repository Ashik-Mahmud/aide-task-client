import cogoToast from "cogo-toast";
import Head from "next/head";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../api/UserApi";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const AddProduct = (props: Props) => {
  const [AddProduct, { data, isLoading, error }] = useAddProductMutation({});
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  const handleAddProduct = handleSubmit(async (data) => {
    const formData = new FormData();
    const { product, ...others } = data;
    formData.append("product", product[0]);
    formData.append("data", JSON.stringify(others));
    await AddProduct(formData);
  });

  // error/success handler
  useEffect(() => {
    if (data) {
      cogoToast.success(`Product added successfully done.`);
      reset();
    }
    if (error) {
      console.log(error);
      cogoToast.error(`Something went wrong`);
    }
  }, [data, error, reset]);

  return (
    <>
      <Head>
        <title>Add Product</title>
      </Head>
      <div>
        <h1 className="text-2xl font-bold text-violet-500">Add Product</h1>
        <form
          action=""
          className="bg-white p-10 rounded mt-4 font-poppins"
          onSubmit={handleAddProduct}
        >
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
                {...register("name", { required: true })}
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.name && (
                <small className="text-red-400 my-0">Required Name field</small>
              )}
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
                {...register("price", { required: true })}
                id="price"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.price && (
                <small className="text-red-500 my-0">Price is required</small>
              )}
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
                {...register("countInStock", { required: true })}
                id="countInStock"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.countInStock && (
                <small className="text-red-500 my-0">
                  count In Stock is required
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-500"
              >
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                id="description"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.description && (
                <small className="text-red-500 my-0">
                  description is required
                </small>
              )}
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
                {...register("product", { required: true })}
                id="image"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.product && (
                <small className="text-red-500 my-0">image is required</small>
              )}
            </div>
          </div>
          <div className="text-right mt-4">
            {isLoading ? (
              <button
                className="bg-violet-500 text-white px-4 py-2 rounded mt-4 text-right opacity-50 cursor-not-allowed"
                type="button"
              >
                Loading...
              </button>
            ) : (
              <button className="bg-violet-500 text-white px-4 py-2 rounded mt-4 text-right">
                Add Product
              </button>
            )}
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
