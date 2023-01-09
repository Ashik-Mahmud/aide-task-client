import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BiDesktop,
  BiDotsVertical,
  BiPen,
  BiPlus,
  BiUser,
  BiUserCheck,
} from "react-icons/bi";
import swal from "sweetalert";
import { useDeleteUserMutation } from "../../../api/UserApi";

type Props = {
  item: any;
};

const UserRow = ({ item }: Props) => {
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [DeleteUser, { data, isLoading, error }] = useDeleteUserMutation();

  // handle delete
  const handleDelete = async (id: string) => {
    try {
      const isConfirm = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: ["cancel", "ok, delete it"],
        dangerMode: true,
      });

      if (isConfirm) {
        await DeleteUser(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle error
  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <tr className="p-4 border-b">
      <td className="p-2 px-10">
        <div className="flex items-center gap-3 px-6">
          <div className="avatar w-12 h-12 overflow-hidden border-2 rounded-full">
            <Image
              src={item?.avatar?.url || "/Avatar.png"}
              width={35}
              height={35}
              alt="Avatar"
              className="overflow-hidden w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="details flex flex-col gap-0">
            <h3 className="name font-medium text-gray-700">{item?.name}</h3>
            <small className="username text-gray-500">@{item?.username}</small>
          </div>
        </div>
      </td>
      <td className="text-left p-2">
        <div className="text-gray-500 text-sm">{item?.email}</div>
      </td>
      <td className="text-left  p-2 text-sm font-roboto">
        {item?.role === "admin" && (
          <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
            <Image src={"/Vector.png"} width={20} height={20} alt="Admin" />
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
      <td className="text-center  p-2">
        <div className="font-roboto text-gray-700 text-sm capitalize">
          {item?.plan}
        </div>
      </td>
      <td className="text-center  p-2">
        <div>
          <span
            className={`inline-block px-5 p-1 rounded-full text-sm w-auto capitalize ${
              (item?.status === "active" && " bg-green-50 text-green-400 ") ||
              (item?.status === "inactive" && " bg-gray-100 text-gray-400 ") ||
              (item?.status === "pending" && " bg-orange-50 text-orange-400 ")
            }`}
          >
            {item?.status}
          </span>
        </div>
      </td>
      <td className="text-center  p-2">
        <div className="flex items-center justify-center cursor-pointer relative">
          <span onClick={() => setIsOpenAction((prev) => !prev)}>
            {isOpenAction ? <BiPlus /> : <BiDotsVertical />}
          </span>
          {isOpenAction && (
            <ul className="text-sm w-16 text-left bg-gray-50 p-2 absolute right-[1rem] top-1 shadow">
              <li className="text-xs border-b py-1">
                <Link href={`/dashboard/users/${item?._id}`}>Edit</Link>
              </li>
              <li
                className="text-xs border-b py-1 text-red-400 cursor-pointer"
                onClick={() => handleDelete(item?._id)}
              >
                {isLoading ? "deleting.." : " Delete "}
              </li>
            </ul>
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
