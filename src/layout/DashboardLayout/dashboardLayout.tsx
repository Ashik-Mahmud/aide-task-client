import Sidebar from "./sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      {/* sidebar */}
      <div className="sidebar w-[400px] bg-gray-500">
        <Sidebar />
      </div>
      {/* main content area */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="font-bold text-2xl">header</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
