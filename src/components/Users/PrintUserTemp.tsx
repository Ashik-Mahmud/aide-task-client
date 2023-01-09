import Image from "next/image";
import { MutableRefObject } from "react";
import { BiDesktop, BiPen, BiUser, BiUserCheck } from "react-icons/bi";

type Props = {
  printRef: MutableRefObject<null>;
  data: any;
};

const PrintUserTemp = ({ printRef, data }: Props) => {
  return (
    <div ref={printRef} className="hidden print:block p-10">
      <h2 className="text-3xl font-medium text-violet-500">All Users</h2>
      <div className="my-5">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-5 ">
                USER
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-5 ">
                EMAIL
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-5 ">
                ROLE
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-5 ">
                PLAN
              </th>
              <th className="text-gray-500 font-roboto font-medium border-r text-sm p-3 py-4 border-spacing-5 pl-5 ">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any) => (
              <>
                <tr className="border-b" key={item?._id + item?.username}>
                  <td className="p-2">
                    <div className="text-gray-500 text-sm flex flex-col items-start">
                      <span className="text-gray-700 font-medium">
                        {item?.name}
                      </span>
                      <small className="text-gray-500 font-thin">
                        @ {item?.username}
                      </small>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-gray-500 text-sm">{item?.email}</div>
                  </td>
                  <td className="p-2">
                    {item?.role === "admin" && (
                      <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
                        <Image
                          src={"/Vector.png"}
                          width={20}
                          height={20}
                          alt="Admin"
                        />
                        Admin
                      </div>
                    )}
                    {item?.role === "editor" && (
                      <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
                        <BiPen size={20} />
                        Editor
                      </div>
                    )}
                    {item?.role === "maintainer" && (
                      <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
                        <BiDesktop size={20} />
                        Maintainer
                      </div>
                    )}
                    {item?.role === "subscriber" && (
                      <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
                        <BiUser size={20} className="text-indigo-500" />
                        Subscriber
                      </div>
                    )}
                    {item?.role === "author" && (
                      <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
                        <BiUserCheck size={20} />
                        Author
                      </div>
                    )}
                  </td>

                  <td className="text-center ">
                    <div className="font-roboto text-gray-700 text-sm capitalize">
                      {item?.plan}
                    </div>
                  </td>
                  <td className="text-center ">
                    <div>
                      <span
                        className={`inline-block px-5 p-1 rounded-full text-sm w-auto capitalize ${
                          (item?.status === "active" &&
                            " bg-green-50 text-green-400 ") ||
                          (item?.status === "inactive" &&
                            " bg-gray-100 text-gray-400 ") ||
                          (item?.status === "pending" &&
                            " bg-orange-50 text-orange-400 ")
                        }`}
                      >
                        {item?.status}
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintUserTemp;
