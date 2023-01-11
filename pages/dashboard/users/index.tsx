import { PDFDownloadLink } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiExport } from "react-icons/bi";
import ReactToPrint from "react-to-print";
import swal from "sweetalert";
import * as XLSX from "xlsx";
import { useGetUsersQuery } from "../../../api/UserApi";
import Loader from "../../../src/components/Loader";
import PdfTemplate from "../../../src/components/Users/PdfTemplate";
import PrintUserTemp from "../../../src/components/Users/PrintUserTemp";
import UserRow from "../../../src/components/Users/UserRow";
import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";
type Props = {};

const UsersManage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exportData, setExportData] = useState([]);
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
  const printRef = useRef<HTMLElement | any>(null);
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

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const handleExportExcel = async (exportData: any) => {
    const filename = await swal({
      title: "Are you sure?",
      text: "You want to export this users data? Put the file name here at least 3 characters",
      content: {
        element: "input",
        attributes: {
          placeholder: "Put the file name here",
          type: "text",
        },
      },
    });
    if (!filename) {
      swal("Cancelled", "Your did't put any name :)", "error");
      return;
    }
    if (filename?.length < 3) {
      swal("Error", "File name must be at least 3 characters", "error");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Index",
          "User",
          "Username",
          "Email",
          "Role",
          "Plan",
          "Status",
          "Date",
        ],
      ],
      {
        origin: "A1",
      }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
    swal("Success", "Your file has been exported", "success");
  };

  useEffect(() => {
    const exportData = data?.users.map((user: any, index: number) => {
      return {
        Index: index + 1,
        User: user?.name,
        Username: user?.username,
        Email: user?.email,
        Role: user?.role,
        Plan: user?.plan,
        status: user?.status,
        Date: user?.createdAt,
      };
    });

    setExportData(exportData);
  }, [data]);

  return (
    <>
      {!isLoading && (
        <PrintUserTemp
          printRef={printRef}
          data={data?.users}
          showColumn={showColumn}
        />
      )}

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
                  <PDFDownloadLink
                    document={<PdfTemplate data={data?.users} />}
                    fileName="users.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Loading document..."
                      ) : (
                        <button className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500">
                          <BiExport /> PDF
                        </button>
                      )
                    }
                  </PDFDownloadLink>

                  <button
                    className="btn p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500"
                    onClick={() => handleExportExcel(exportData)}
                  >
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
                  <div className="dropdown relative">
                    <button
                      className="btn btn-primary p-2 flex items-center gap-2 bg-transparent border px-5 rounded text-sm text-gray-500"
                      onClick={() => setIsCheckboxShow((prev) => !prev)}
                    >
                      SHOW/HIDE COLUMN
                    </button>
                    {/* dropdown column  */}
                    <ul
                      className={`absolute bg-white p-2 z-10 max-w-md w-full shadow font-poppins transition-all ${
                        isCheckboxShow
                          ? " scale-100 origin-top opacity-100 "
                          : " scale-0 origin-top opacity-0 "
                      }`}
                    >
                      <li className="flex items-center gap-1 select-none cursor-pointer p-2 hover:bg-gray-50">
                        <input
                          type={"checkbox"}
                          defaultChecked
                          className={`checked:bg-indigo-600 `}
                          id="user"
                          onClick={() =>
                            setShowColumn({
                              ...showColumn,
                              user: !showColumn.user,
                            })
                          }
                        />
                        <label
                          htmlFor="user"
                          className="cursor-pointer uppercase font-poppins text-sm"
                        >
                          User
                        </label>
                      </li>
                      <li className="flex items-center gap-1 select-none cursor-pointer p-2 hover:bg-gray-50 border-t">
                        <input
                          type={"checkbox"}
                          defaultChecked
                          className={`checked:bg-indigo-600 `}
                          id="email"
                          onClick={() =>
                            setShowColumn({
                              ...showColumn,
                              email: !showColumn.email,
                            })
                          }
                        />
                        <label
                          htmlFor="email"
                          className="cursor-pointer uppercase font-poppins text-sm"
                        >
                          email
                        </label>
                      </li>
                      <li className="flex items-center gap-1 select-none cursor-pointer p-2 hover:bg-gray-50 border-t">
                        <input
                          type={"checkbox"}
                          defaultChecked
                          className={`checked:bg-indigo-600 `}
                          onClick={() =>
                            setShowColumn({
                              ...showColumn,
                              role: !showColumn.role,
                            })
                          }
                          id="role"
                        />
                        <label
                          htmlFor="role"
                          className="cursor-pointer uppercase font-poppins text-sm"
                        >
                          role
                        </label>
                      </li>
                      <li className="flex items-center gap-1 select-none cursor-pointer p-2 hover:bg-gray-50 border-t">
                        <input
                          type={"checkbox"}
                          defaultChecked
                          onClick={() =>
                            setShowColumn({
                              ...showColumn,
                              plan: !showColumn.plan,
                            })
                          }
                          className={`checked:bg-indigo-600 `}
                          id="PLAN"
                        />
                        <label
                          htmlFor="PLAN"
                          className="cursor-pointer uppercase font-poppins text-sm"
                        >
                          PLAN
                        </label>
                      </li>
                      <li className="flex items-center gap-1 select-none cursor-pointer p-2 hover:bg-gray-50 border-t">
                        <input
                          type={"checkbox"}
                          defaultChecked
                          className={`checked:bg-indigo-600 `}
                          id="status"
                          onClick={() =>
                            setShowColumn({
                              ...showColumn,
                              status: !showColumn.status,
                            })
                          }
                        />
                        <label
                          htmlFor="status"
                          className="cursor-pointer uppercase font-poppins text-sm"
                        >
                          status
                        </label>
                      </li>
                    </ul>
                    {/* end dropdown */}
                  </div>
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
                            <div className="flex items-center gap-2">USER</div>
                          </th>
                        )}
                        {!showColumn?.email && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">EMAIL</div>
                          </th>
                        )}
                        {!showColumn?.role && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">ROLE</div>
                          </th>
                        )}
                        {!showColumn?.plan && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16  text-center">
                            <div className="flex items-center gap-2">PLAN</div>
                          </th>
                        )}
                        {!showColumn?.status && (
                          <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-16 ">
                            <div className="flex items-center gap-2">
                              STATUS
                            </div>
                          </th>
                        )}

                        <th className="text-gray-500 font-roboto font-medium border-r pl-14 text-sm p-3 py-4 border-spacing-5 text-center">
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
