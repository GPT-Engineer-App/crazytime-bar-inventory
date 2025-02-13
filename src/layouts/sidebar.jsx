import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Home, Package, Settings, ShoppingCart, BarChart, PieChart } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: <Package className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Purchase Request",
    to: "/purchase-request",
    icon: <ShoppingCart className="h-4 w-4 text-white/70" />,
  },
];

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-blue-900 px-4 lg:h-[60px] lg:px-6 shadow-lg mb-4">
          <MobileSidebar />
          <div className="w-full flex-1">{/* Add nav bar content here! */}</div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto shadow-lg">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-blue-900 md:block shadow-lg">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-white">
          <Home className="h-6 w-6 text-white/70" />
          <span>Crazytime Restobar</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => {
  const sheetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        document.querySelector('[data-state="open"]')?.click();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden p-2 m-2 shadow-lg flex flex-col items-center" data-state="closed">
          <Menu className="h-5 w-5 text-white" />
          <span className="text-xs text-white">Menu</span>
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col shadow-lg" ref={sheetRef}>
        <nav className="grid gap-2 text-lg font-medium">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-semibold mb-4 text-white"
          >
            <Home className="h-6 w-6 text-white/70" />
            <span>Crazytime Restobar</span>
          </NavLink>
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full p-2 m-2 shadow-lg flex flex-col items-center">
        <CircleUser className="h-5 w-5 text-white" />
        <span className="text-xs text-white">User</span>
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="shadow-lg">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-white shadow-lg",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="flex justify-around items-center h-16 bg-blue-900 border-t shadow-lg">
    <NavLink to="/" className="flex flex-col items-center text-white">
      <Home className="h-6 w-6 text-white/70" />
      <span className="text-xs">Home</span>
    </NavLink>
    <NavLink to="/reports" className="flex flex-col items-center text-white">
      <BarChart className="h-6 w-6 text-white/70" />
      <span className="text-xs">Reports</span>
    </NavLink>
    <NavLink to="/analytics" className="flex flex-col items-center text-white">
      <PieChart className="h-6 w-6 text-white/70" />
      <span className="text-xs">Analytics</span>
    </NavLink>
    <NavLink to="/inventory" className="flex flex-col items-center text-white">
      <Settings className="h-6 w-6 text-white/70" />
      <span className="text-xs">Manage</span>
    </NavLink>
  </footer>
);

export default Layout;