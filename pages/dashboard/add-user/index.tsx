import cogoToast from "cogo-toast";
import Head from "next/head";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../../api/UserApi";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";
type Props = {};

const AddUser = (props: Props) => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addUser, { data, isLoading, error }] = useCreateUserMutation<any>();

  // handle form submit
  const handleFormSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    const { avatar, ...others } = data;
    formData.append("avatar", avatar[0]);
    formData.append("data", JSON.stringify(others));
    await addUser(formData);
  });

  // handle error/success
  useEffect(() => {
    if (data) {
      console.log(data);
      cogoToast.success("User added successfully");
    }
    if (error) {
      console.log(error);
      cogoToast.error("Something went wrong");
    }
  }, [data, error]);

  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>

      <div>
        <h1 className="text-2xl font-bold text-violet-500">Add User</h1>
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="bg-white p-10 rounded mt-4 font-poppins"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-500"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-500"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-500"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
                id="username"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-500"
              >
                Role <span className="text-red-500">*</span>
              </label>
              <select
                {...register("role", {
                  required: "Role is required",
                })}
                id="role"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="editor">Editor</option>
                <option value="author">Author</option>
                <option value="maintainer">Maintainer</option>
                <option value="subscriber">Subscriber</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.role.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="plan"
                className="text-sm font-medium text-gray-500"
              >
                Plan <span className="text-red-500">*</span>
              </label>
              <select
                {...register("plan", {
                  required: "Plan is required",
                })}
                id="plan"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="basic">Basic</option>
                <option value="team">Team</option>
                <option value="company">Company</option>
                <option value="enterprise">Enterprise</option>
              </select>
              {errors.plan && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.plan.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-500"
              >
                Status <span className="text-red-500">*</span>
              </label>
              <select
                {...register("status", {
                  required: "Status is required",
                })}
                id="status"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.status.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="avatar"
                className="text-sm font-medium text-gray-500"
              >
                Upload Avatar <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                {...register("avatar", {
                  required: "Avatar is required",
                })}
                id="avatar"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">
                  {(errors as any)?.avatar.message}
                </p>
              )}
            </div>
          </div>
          {isLoading ? (
            <button className="bg-violet-500 text-white rounded-md px-5 py-3  mt-5 font-poppins opacity-50 cursor-not-allowed">
              Loading...
            </button>
          ) : (
            <button className="bg-violet-500 text-white rounded-md px-5 py-3  mt-5 font-poppins">
              Save User
            </button>
          )}
        </form>
      </div>
    </>
  );
};

AddUser.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default AddUser;
