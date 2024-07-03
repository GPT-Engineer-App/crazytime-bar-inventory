import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("webhookUrl", webhookUrl);
    alert("Webhook URL saved!");
  };

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="shadow-lg p-6 rounded-lg border border-gray-300">
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="webhookUrl">Webhook URL</Label>
          <Input id="webhookUrl" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="theme">Theme</Label>
          <select id="theme" value={theme} onChange={handleThemeChange} className="w-full p-2 border rounded">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <Button className="btn-blue shadow-lg" onClick={handleSave}>Save Webhook URL</Button>
      </div>
    </div>
  );
};

export default SettingsPage;