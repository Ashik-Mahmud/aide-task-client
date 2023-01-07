import { BiChevronLeft, BiChevronRight, BiExport } from "react-icons/bi";
import UserRow from "../../../src/components/Users/UserRow";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const UsersManage = (props: Props) => {
  return (
    <div id="user-manage">
      <h2 className="text-3xl font-medium text-violet-500">All Users</h2>

      {/* table area */}
      <div className="table-area overflow-x-auto bg-white pb-5 my-4 rounded-md shadow font-poppins">
        <div className="action-btns flex items-center justify-between my-3 p-2 px-5 ">
          <div className="flex items-center gap-3">
            <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
              <BiExport /> PDF
            </button>
            <button className="btn p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
              <BiExport />
              Excel
            </button>
            <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
              <BiExport />
              PRINT
            </button>
            <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
              SHOW/HIDE COLUMN
            </button>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="search">
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-80"
                placeholder="Search Invoice"
              />
            </div>
            <button className="btn btn-primary py-2 px-5 bg-violet-500 text-white rounded shadow">
              Add User
            </button>
          </div>
        </div>
        <table className="w-full text-left p-4">
          <thead className="bg-gray-50">
            <tr className="border-b">
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-8">
                USER
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5">
                EMAIL
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5">
                ROLE
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5">
                PLAN
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5">
                STATUS
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
          </tbody>
        </table>

        {/* pagination */}
        <div className="pagination-area flex justify-end items-center p-4">
          <div className="pagination flex items-center gap-4">
            <div className="per-page text-sm text-gray-500">
              <span>Rows per page: </span>{" "}
              <select name="" id="">
                <option value="10">10</option>
                <option value="10">20</option>
                <option value="10">30</option>
                <option value="10">40</option>
              </select>
            </div>
            <div className="page-numbers flex items-center gap-2 text-sm text-gray-500">
              1-5 of 13
            </div>
            <div className="page-numbers flex items-center gap-2">
              <button className="text-2xl text-gray-400">
                <BiChevronLeft />
              </button>
              <button className="text-2xl">
                <BiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UsersManage.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default UsersManage;
