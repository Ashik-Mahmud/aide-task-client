import Head from "next/head";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";
type Props = {};

const AddUser = (props: Props) => {
  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>

      <div>
        <h1 className="text-2xl font-bold text-violet-500">Add User</h1>
        <form action="" className="bg-white p-10 rounded mt-4 font-poppins">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-500"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-500"
              >
                Role
              </label>
              <select
                name="role"
                id="role"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="editor">Editor</option>
                <option value="author">Author</option>
                <option value="maintainer">Maintainer</option>
                <option value="subscriber">Subscriber</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="plan"
                className="text-sm font-medium text-gray-500"
              >
                Plan
              </label>
              <select
                name="plan"
                id="plan"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="basic">Basic</option>
                <option value="team">Team</option>
                <option value="company">Company</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-500"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="avatar"
                className="text-sm font-medium text-gray-500"
              >
                Upload Avatar
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          <button className="bg-violet-500 text-white rounded-md px-5 py-3  mt-5 font-poppins">
            Save User
          </button>
        </form>
      </div>
    </>
  );
};

AddUser.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default AddUser;
