import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import StatusBar from "./components/StatusBar";
import "./App.css";

function App() {
  const backendUrl = "/api"; // same as before (nginx proxy)
  const [status, setStatus] = useState({ message: "", type: "" });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Health Check
  useEffect(() => {
    const checkHealth = async () => {
      try {
        setStatus({ message: "Checking backend health...", type: "healthy" });
        const res = await fetch(`${backendUrl}/health`);
        if (res.ok) {
          const data = await res.json();
          setStatus({ message: `Backend healthy: ${data.message || "OK"}`, type: "healthy" });
        } else {
          setStatus({ message: "Backend not reachable", type: "error" });
        }
      } catch (err) {
        setStatus({ message: `Error: ${err.message}`, type: "error" });
      }
    };
    checkHealth();
  }, []);

  // ✅ Fetch Items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/items`);
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      setStatus({ message: `Failed to load items: ${err.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ Add Item
  const addItem = async (item) => {
    try {
      setStatus({ message: "Adding item...", type: "healthy" });
      const res = await fetch(`${backendUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      await res.json();
      setStatus({ message: "Item added successfully!", type: "healthy" });
      fetchItems();
    } catch (err) {
      setStatus({ message: `Error adding item: ${err.message}`, type: "error" });
    }
  };

  return (
    <div className="container">
      <Header />
      <StatusBar status={status} />
      <div className="main-content">
        <ItemForm onAddItem={addItem} />
        <ItemList items={items} loading={loading} onRetry={fetchItems} />
      </div>
      <footer>
        <p>Built with React | Backend: Node.js + Express + MongoDB</p>
      </footer>
    </div>
  );
}

export default App;
