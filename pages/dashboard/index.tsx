import DashboardLayout from "../../src/layout/DashboardLayout/dashboardLayout";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <p>
        this is Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
        aperiam rem maiores officia tenetur sunt voluptatum alias, accusamus
        repudiandae corporis dolor sapiente eveniet veniam commodi praesentium
        iusto officiis quisquam voluptas! Error culpa saepe dolores dolor sint
        commodi incidunt omnis repellendus eligendi minus laborum, minima
        numquam consequuntur, accusamus deserunt. In cum excepturi qui
        dignissimos ipsa iste rem? Mollitia officiis animi dolore laudantium,
        eos nesciunt, aliquam perferendis cupiditate porro qui deleniti dolorem
        ab quos consectetur sequi ratione nihil reprehenderit quaerat repellat
        distinctio illum. Corporis, quam blanditiis dignissimos libero dolores
        illum repudiandae ipsum consequatur fugiat facilis dolor rerum delectus
        quae, qui maiores sunt.
      </p>
    </>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Dashboard;
