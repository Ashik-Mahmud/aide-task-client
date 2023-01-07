import DashboardLayout from "../../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const UsersManage = (props: Props) => {
  return <div>UsersManage</div>;
};

UsersManage.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default UsersManage;
