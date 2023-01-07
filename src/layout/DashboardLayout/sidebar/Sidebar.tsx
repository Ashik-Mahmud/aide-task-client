import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <ul className="p-6">
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/dashboard/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/dashboard/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/dashboard/orders"}>Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
