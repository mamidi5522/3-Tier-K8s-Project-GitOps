import React, { useState } from "react";

export default function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc) return;
    onAddItem({ name, description: desc });
    setName("");
    setDesc("");
  };

  return (
    <div className="form-section">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required />
        </div>
        <button type="submit">Add Item →</button>
      </form>
    </div>
  );
}
