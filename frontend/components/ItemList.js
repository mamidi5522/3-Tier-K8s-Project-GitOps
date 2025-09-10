import React from "react";

export default function ItemList({ items, loading, onRetry }) {
  if (loading) {
    return <div className="loading"><p>Loading items...</p></div>;
  }

  if (!items.length) {
    return (
      <div className="empty-state">
        <div>📝</div>
        <h3>No items yet</h3>
        <p>Add your first item using the form</p>
      </div>
    );
  }

  return (
    <div className="items-section">
      <h2>Items from MongoDB</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div className="item-card" key={item._id}>
            <div className="item-header">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-date">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
