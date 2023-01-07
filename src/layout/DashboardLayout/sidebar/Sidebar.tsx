import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiNotepad, BiUser } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";

type Props = {
  isHide: boolean;
  setIsHide: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isHide, setIsHide }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div>
      <div className="sidebar-header flex items-center justify-between font-roboto">
        <h3 className="sidebar__title">Admin Panel</h3>
        <span
          className="sidebar__left_arrow z-10 cursor-pointer"
          onClick={() => setIsHide((prev: boolean) => !prev)}
        >
          {isHide ? <BsArrowRightShort /> : <BsArrowLeftShort />}
        </span>
      </div>
      <ul className="p-6 sidebar-menus">
        <li className="flex items-center justify-between cursor-pointer">
          <Link href={"/dashboard"}>
            <span className="icon">
              <AiOutlineDashboard />
            </span>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenSubMenu((prev) => !prev)}
          >
            <Link href={"/dashboard/users"}>
              <span className="icon">
                <BiNotepad />
              </span>
              <span className="text">All Users</span>
            </Link>
            <span>{openSubMenu ? <BiChevronUp /> : <BiChevronDown />}</span>
          </div>
          <ul className={`bg-gray-50 ${openSubMenu ? " h-60 " : " hidden "}`}>
            <li className="flex items-center justify-between cursor-pointer">
              <Link href={"/dashboard/users"}>
                <span className="icon">
                  <BiNotepad />
                </span>
                <span className="text">Sub Users</span>
              </Link>
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              <Link href={"/dashboard/users"}>
                <span className="icon">
                  <BiNotepad />
                </span>
                <span className="text">Sub Users</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex items-center justify-between cursor-pointer">
          <Link href={"/dashboard/products"}>
            <span className="icon">
              <BiUser />
            </span>
            <span className="text">Add User</span>
          </Link>
        </li>
        <li className="flex items-center justify-between cursor-pointer">
          <Link href={"/dashboard/products"}>
            <span className="icon">
              <MdContentCopy />
            </span>
            <span className="text">Add Product</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
