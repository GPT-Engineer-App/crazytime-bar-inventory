import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Inventory = () => {
  const [nonAlcoholicItems, setNonAlcoholicItems] = useState([]);
  const [alcoholicItems, setAlcoholicItems] = useState([]);
  const [newItem, setNewItem] = useState({ category: "non-alcoholic", item: "", quantity: "", openingStock: "", closingStock: "", total: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.category === "non-alcoholic") {
      setNonAlcoholicItems([...nonAlcoholicItems, newItem]);
    } else {
      setAlcoholicItems([...alcoholicItems, newItem]);
    }
    setNewItem({ category: "non-alcoholic", item: "", quantity: "", openingStock: "", closingStock: "", total: "" });
  };

  return (
    <div className="shadow-lg p-6 rounded-lg glowing-shadow">
      <h1 className="text-2xl mb-4">Inventory Data</h1>
      <div className="mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-blue glowing-shadow">Add New Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Inventory Item</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <select id="category" name="category" value={newItem.category} onChange={handleInputChange} className="w-full p-2 border rounded">
                  <option value="non-alcoholic">Non-Alcoholic</option>
                  <option value="alcoholic">Alcoholic</option>
                </select>
              </div>
              <div>
                <Label htmlFor="item">Item</Label>
                <Input id="item" name="item" value={newItem.item} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" name="quantity" value={newItem.quantity} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="openingStock">Opening Stock</Label>
                <Input id="openingStock" name="openingStock" value={newItem.openingStock} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="closingStock">Closing Stock</Label>
                <Input id="closingStock" name="closingStock" value={newItem.closingStock} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="total">Total</Label>
                <Input id="total" name="total" value={newItem.total} onChange={handleInputChange} />
              </div>
              <Button className="btn-blue glowing-shadow" onClick={handleAddItem}>Add Item</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <h2 className="text-xl mb-2">Non-Alcoholic Beverages</h2>
      <Table className="shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Opening Stock</TableHead>
            <TableHead>Closing Stock</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nonAlcoholicItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.openingStock}</TableCell>
              <TableCell>{item.closingStock}</TableCell>
              <TableCell>{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-xl mt-4 mb-2">Alcohol Record</h2>
      <Table className="shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Opening Stock</TableHead>
            <TableHead>Closing Stock</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alcoholicItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.openingStock}</TableCell>
              <TableCell>{item.closingStock}</TableCell>
              <TableCell>{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inventory;