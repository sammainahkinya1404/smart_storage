import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import './ItemList.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [fontSize, setFontSize] = useState('medium'); // State for font size

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = async (id) => {
    try {
      await fetch(`/api/items/${id}`, { method: 'DELETE' });
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className={`item-list-container ${fontSize}`}>
      <h2>Stored Items</h2>

      {/* Font size adjustment dropdown */}
      <label>
        Text Size:
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <AddItemForm onAdd={handleAddItem} />
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.location}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
