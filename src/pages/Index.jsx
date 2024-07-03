import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Crazytime Restobar Inventory System</h1>
      <p className="mb-4">Manage your inventory efficiently and effectively.</p>
      <div className="space-x-4">
        <Link to="/inventory">
          <Button className="btn-blue">Inventory Data</Button>
        </Link>
        <Link to="/settings">
          <Button className="btn-blue">Settings</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
