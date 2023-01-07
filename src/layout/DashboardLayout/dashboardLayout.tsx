import { useState } from "react";
import { BsBell, BsMoon } from "react-icons/bs";
import Sidebar from "./sidebar/Sidebar";
type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isHide, setIsHide] = useState(false);
  return (
    <section className="dashboard ">
      {/* sidebar */}
      <aside className={`sidebar  ${isHide ? " active " : " "}`}>
        <Sidebar setIsHide={setIsHide} isHide={isHide} />
      </aside>
      {/* main content area */}
      <div className="dashboard-content ">
        <div className="dashboard-header flex items-center justify-between mb-10 px-6">
          <div></div>
          <div className="right-content flex items-center">
            <div className="theme-changer cursor-pointer">
              <BsMoon />
            </div>
            <div className="notification cursor-pointer">
              <BsBell />
            </div>
            <div className="avatar w-10 h-10 border rounded-full cursor-pointer">
              A
            </div>
          </div>
        </div>
        <div className="content mt-5">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;