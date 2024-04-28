import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className={`bg-no-repeat bg-gradient-to-b from-white to-blue-100 duration-300 w-full`}
    >
      <Outlet />
    </div>
  );
};
export default Layout;