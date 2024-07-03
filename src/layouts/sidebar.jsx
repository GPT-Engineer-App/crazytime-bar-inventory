import { useState } from "react";
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
import { CircleUser, Menu, Package2, Home, BarChart, PieChart, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: <Package2 className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Purchase Request",
    to: "/purchase-request",
    icon: <Package2 className="h-4 w-4" />,
  },
];

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 shadow-lg mb-4">
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

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`hidden border-r bg-muted/40 md:block shadow-lg ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            {isExpanded && <span>Crazytime Restobar</span>}
          </NavLink>
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
            {navItems.map((item) => (
              <SidebarNavLink key={item.to} to={item.to} isExpanded={isExpanded}>
                {item.icon}
                {isExpanded && item.title}
              </SidebarNavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden shadow-lg">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col shadow-lg">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span>Crazytime Restobar</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full shadow-lg">
        <CircleUser className="h-5 w-5" />
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

const SidebarNavLink = ({ to, children, isExpanded }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground shadow-lg",
        isActive && "text-primary bg-muted",
        !isExpanded && "justify-center"
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="flex justify-around items-center h-16 bg-muted/40 border-t shadow-lg">
    <NavLink to="/" className="flex flex-col items-center">
      <Home className="h-6 w-6" />
      <span className="text-xs">Home</span>
    </NavLink>
    <NavLink to="/reports" className="flex flex-col items-center">
      <BarChart className="h-6 w-6" />
      <span className="text-xs">Reports</span>
    </NavLink>
    <NavLink to="/analytics" className="flex flex-col items-center">
      <PieChart className="h-6 w-6" />
      <span className="text-xs">Analytics</span>
    </NavLink>
    <NavLink to="/inventory" className="flex flex-col items-center">
      <Settings className="h-6 w-6" />
      <span className="text-xs">Manage</span>
    </NavLink>
  </footer>
);

export default Layout;