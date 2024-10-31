import React, { useState } from 'react';

function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rfidTag, setRfidTag] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, location, rfidTag };

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      
      if (response.ok) {
        const item = await response.json();
        onAdd(item); // Updates the item list in the parent component
        setName('');
        setLocation('');
        setRfidTag('');
      } else {
        console.error('Failed to add item');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <input type="text" placeholder="RFID Tag" value={rfidTag} onChange={(e) => setRfidTag(e.target.value)} required />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
