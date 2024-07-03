import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center shadow-lg p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl mb-4">Welcome to Crazytime Restobar Inventory System</h1>
      <p className="mb-4">Manage your inventory efficiently and effectively.</p>
      <div className="flex flex-col items-center space-y-4">
        <Link to="/inventory" className="w-1/2">
          <Button className="btn-blue shadow-lg w-full rounded-md">Inventory Data</Button>
        </Link>
        <Link to="/settings" className="w-1/2">
          <Button className="btn-blue shadow-lg w-full rounded-md">Settings</Button>
        </Link>
        <Link to="/login" className="w-1/2">
          <Button className="btn-blue shadow-lg w-full rounded-md">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;