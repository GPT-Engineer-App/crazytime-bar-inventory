import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  const [webhookUrl, setWebhookUrl] = useState("");

  const handleSave = () => {
    localStorage.setItem("webhookUrl", webhookUrl);
    alert("Webhook URL saved!");
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="webhookUrl">Webhook URL</Label>
          <Input id="webhookUrl" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
        </div>
        <Button onClick={handleSave}>Save Webhook URL</Button>
      </div>
    </div>
  );
};

export default SettingsPage;