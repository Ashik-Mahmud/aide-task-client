import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiExport } from "react-icons/bi";
import ReactToPrint from "react-to-print";
import { useGetUsersQuery } from "../../../api/UserApi";
import Loader from "../../../src/components/Loader";
import PrintUserTemp from "../../../src/components/Users/PrintUserTemp";
import UserRow from "../../../src/components/Users/UserRow";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";
type Props = {};

const UsersManage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showColumn, setShowColumn] = useState({
    user: false,
    email: false,
    plan: false,
    role: false,
    status: false,
  });
  const [isCheckboxShow, setIsCheckboxShow] = useState(false);
  const [limit, setLimit] = useState(3);
  const [keyword, setKeyword] = useState("");
  const printRef = useRef(null);
  const { data, isLoading } = useGetUsersQuery({
    page: currentPage,
    limit,
    q: keyword,
  });
  const pages = Math.ceil(data?.total / limit);

  // handle next
  const handleNext = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  // handle prev
  const handlePrev = () => {
    if (pages === currentPage) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      {!isLoading && <PrintUserTemp printRef={printRef} data={data?.users} />}

      <Head>
        <title>Users Manage</title>
      </Head>
      <div id="user-manage">
        <h2 className="text-3xl font-medium text-violet-500">All Users</h2>

        {/* table area */}
        <div className="table-area overflow-x-auto bg-white pb-5 my-4 rounded-md shadow font-poppins w-full">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="action-btns flex items-center justify-between my-3 p-2 px-5 ">
                <div className="flex items-center gap-3">
                  <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
                    <BiExport /> PDF
                  </button>
                  <button className="btn p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
                    <BiExport />
                    Excel
                  </button>

                  <ReactToPrint
                    trigger={() => {
                      return (
                        <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
                          <BiExport />
                          PRINT
                        </button>
                      );
                    }}
                    content={() => printRef.current}
                  />
                  <button
                    className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500"
                    onClick={() => setIsCheckboxShow((prev) => !prev)}
                  >
                    SHOW/HIDE COLUMN
                  </button>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="search">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md px-3 py-2 w-80"
                      placeholder="Search Invoice"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                  <Link
                    href={"/dashboard/add-user"}
                    className="btn btn-primary py-2 px-5 bg-violet-500 text-white rounded shadow"
                  >
                    Add User
                  </Link>
                </div>
              </div>
              {data?.users?.length > 0 ? (
                <>
                  <table className="sm:w-full text-left p-4">
                    <thead className="bg-gray-50">
                      <tr className="border-b">
                        {!showColumn?.user && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">
                              <input
                                type={"checkbox"}
                                defaultChecked
                                className={`checked:bg-indigo-600  ${
                                  isCheckboxShow ? " block " : " hidden "
                                }`}
                                onClick={() =>
                                  setShowColumn({ ...showColumn, user: true })
                                }
                              />
                              USER
                            </div>
                          </th>
                        )}
                        {!showColumn?.email && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">
                              <input
                                type={"checkbox"}
                                defaultChecked
                                className={`checked:bg-indigo-600  ${
                                  isCheckboxShow ? " block " : " hidden "
                                }`}
                                onClick={() =>
                                  setShowColumn({ ...showColumn, email: true })
                                }
                              />
                              EMAIL
                            </div>
                          </th>
                        )}
                        {!showColumn?.role && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">
                              <input
                                type={"checkbox"}
                                defaultChecked
                                className={`checked:bg-indigo-600  ${
                                  isCheckboxShow ? " block " : " hidden "
                                }`}
                                onClick={() =>
                                  setShowColumn({ ...showColumn, role: true })
                                }
                              />
                              ROLE
                            </div>
                          </th>
                        )}
                        {!showColumn?.plan && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16  text-center">
                            <div className="flex items-center gap-2">
                              <input
                                type={"checkbox"}
                                defaultChecked
                                className={`checked:bg-indigo-600  ${
                                  isCheckboxShow ? " block " : " hidden "
                                }`}
                                onClick={() =>
                                  setShowColumn({ ...showColumn, plan: true })
                                }
                              />
                              PLAN
                            </div>
                          </th>
                        )}
                        {!showColumn?.status && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">
                              <input
                                type={"checkbox"}
                                defaultChecked
                                className={`checked:bg-indigo-600  ${
                                  isCheckboxShow ? " block " : " hidden "
                                }`}
                                onClick={() =>
                                  setShowColumn({ ...showColumn, status: true })
                                }
                              />
                              STATUS
                            </div>
                          </th>
                        )}

                        <th className="text-gray-500 font-roboto font-medium border-r pl-20 text-sm p-3 py-4 border-spacing-5 text-center">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.users?.map((item: any) => (
                        <UserRow
                          key={item?._id}
                          item={item}
                          showColumn={showColumn}
                        />
                      ))}
                    </tbody>
                  </table>

                  {/* pagination */}
                  {limit < data?.total && (
                    <div className="pagination-area flex justify-end items-center p-4">
                      <div className="pagination flex items-center gap-4">
                        <div className="per-page text-sm text-gray-500">
                          <span>Rows per page: </span>
                          <select
                            name=""
                            id=""
                            onChange={(e) => setLimit(Number(e.target.value))}
                          >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                          </select>
                        </div>
                        <div className="page-numbers flex items-center gap-2 text-sm text-gray-500">
                          {currentPage}-{limit} of {data?.total}
                        </div>
                        <div className="page-numbers flex items-center gap-2">
                          <button
                            className={`text-2xl ${
                              currentPage === 1 && "text-gray-400"
                            }`}
                            onClick={handleNext}
                          >
                            <BiChevronLeft />
                          </button>
                          <button
                            className={`text-2xl ${
                              currentPage === pages && "text-gray-400"
                            }`}
                            onClick={handlePrev}
                          >
                            <BiChevronRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center capitalize py-10">
                  no data found
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

UsersManage.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default UsersManage;
