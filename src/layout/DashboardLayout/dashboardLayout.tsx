import { useState } from "react";
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
        <div className="dashboard-header">
          <h1 className="font-bold text-2xl">header</h1>
        </div>
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
