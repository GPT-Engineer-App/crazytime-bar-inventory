import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container text-center shadow-lg p-6 rounded-lg">
      <h1 className="text-4xl mb-4">Welcome to the Ultimate Inventory System</h1>
      <p className="mb-4">Manage your inventory with ease and precision.</p>
      <div className="space-x-4">
        <Link to="/inventory">
          <Button className="btn-green shadow-md">Inventory Data</Button>
        </Link>
        <Link to="/settings">
          <Button className="btn-blue shadow-lg">Settings</Button>
        </Link>
        <Link to="/login">
          <Button className="btn-blue shadow-lg">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;