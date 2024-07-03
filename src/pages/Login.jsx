import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Login</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="btn-blue shadow-lg" onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;