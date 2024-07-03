import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center shadow-lg p-6 rounded-lg glowing-shadow">
      <h1 className="text-3xl mb-4">Welcome to the Ultimate Inventory Management System</h1>
      <p className="mb-4">Manage your inventory efficiently and effectively.</p>
      <div className="space-x-4">
        <Link to="/inventory">
          <Button className="btn-blue glowing-shadow">Inventory Data</Button>
        </Link>
        <Link to="/settings">
          <Button className="btn-blue glowing-shadow">Settings</Button>
        </Link>
        <Link to="/login">
          <Button className="btn-blue glowing-shadow">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;