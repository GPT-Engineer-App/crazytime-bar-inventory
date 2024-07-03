import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center border border-gray-300">
      <Outlet />
    </main>
  );
};

export default Layout;
