import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PurchaseRequest = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Purchase request submitted!");
    sendToZapier(formData);
    setFormData({ itemName: "", quantity: "", reason: "" });
  };

  const sendToZapier = (data) => {
    const zapierWebhookUrl = "YOUR_ZAPIER_WEBHOOK_URL"; // Replace with your Zapier webhook URL
    fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="shadow-lg p-6 rounded-lg bg-background">
      <h1 className="text-2xl mb-4">Purchase Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="itemName">Item Name</Label>
          <Input
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="reason">Reason for Purchase</Label>
          <Textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="btn-blue shadow-lg">
          Submit Request
        </Button>
      </form>
    </div>
  );
};

export default PurchaseRequest;