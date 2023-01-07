import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";

type Props = {};

const UserRow = (props: Props) => {
  return (
    <tr className="p-4 border-b">
      <td className="p-2 px-8">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <Image src={"/Avatar.png"} width={35} height={35} alt="Avatar" />
          </div>
          <div className="details flex flex-col gap-0">
            <h3 className="name font-medium text-gray-700">Ashik Mahmud</h3>
            <small className="username text-gray-500">@ashikmahmud</small>
          </div>
        </div>
      </td>
      <td className="text-center p-2">
        <div className="text-gray-500 text-sm">ashikmahmud@gmail.com</div>
      </td>
      <td className="text-center  p-2 text-sm font-roboto">
        <div className="flex items-center gap-2 text-gray-500 font-thin justify-center">
          <Image src={"/Vector.png"} width={20} height={20} alt="Admin" />
          Admin
        </div>
      </td>
      <td className="text-center  p-2">
        <div className="font-roboto text-gray-700 text-sm">Enterprise</div>
      </td>
      <td className="text-center  p-2">
        <div>
          <span className="bg-orange-50 inline-block px-5 text-orange-300 p-1 rounded-full text-sm w-auto capitalize">
            pending
          </span>
        </div>
      </td>
      <td className="text-center  p-2">
        <div className="flex items-center justify-center cursor-pointer">
          <BiDotsVertical />
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
