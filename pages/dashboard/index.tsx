import Head from "next/head";
import Image from "next/image";
import { useAppSelector } from "../../app/hooks";
import DashboardLayout from "../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const Dashboard = (props: Props) => {
  const state = useAppSelector((state) => state.auth);
  console.log(state);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <h1 className="text-2xl font-bold text-violet-500">Dashboard</h1>

        {/* overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h1 className="text-xl font-bold text-violet-500">Overview</h1>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Total Products
                </p>
                <p className="text-sm font-medium text-gray-500">10</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Total Orders
                </p>
                <p className="text-sm font-medium text-gray-500">10</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-sm font-medium text-gray-500">10</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Total Revenue
                </p>
                <p className="text-sm font-medium text-gray-500">10</p>
              </div>
            </div>
          </div>
          {/* end overview */}

          {/* recent added product */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h1 className="text-xl font-bold text-violet-500">
              Recent Added Products
            </h1>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Product Name
                </p>
                <p className="text-sm font-medium text-gray-500">Price</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Product Name
                </p>
                <p className="text-sm font-medium text-gray-500">Price</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Product Name
                </p>
                <p className="text-sm font-medium text-gray-500">Price</p>
              </div>

              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Product Name
                </p>
                <p className="text-sm font-medium text-gray-500">Price</p>
              </div>
            </div>
          </div>
        </div>

        {/* end recent added product */}

        {/* recent added users */}
        <div className="bg-white p-4 rounded-md shadow-md mt-5">
          <h1 className="text-xl font-bold text-violet-500">
            Recent Added Users
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 my-6">
            {/* card */}
            <div className="card bg-white shadow p-6 rounded text-center flex items-center justify-center flex-col">
              <Image src="/Avatar.png" width={50} height={50} alt="avatar" />
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">John Doe</h2>
                <p className="card-text">Admin</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Dashboard;
