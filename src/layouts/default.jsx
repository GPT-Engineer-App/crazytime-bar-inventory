import { Outlet } from "react-router-dom";
import { Home } from "lucide-react";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <header className="flex items-center justify-between w-full p-4 bg-blue-900 text-white shadow-lg">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">Crazytime Restobar</span>
        </div>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;