import React, { useState } from 'react';

function AccessibilitySettings({ onFontSizeChange }) {
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setFontSize(newSize);
    onFontSizeChange(newSize);
  };

  return (
    <div>
      <label htmlFor="font-size">Font Size:</label>
      <input
        id="font-size"
        type="range"
        min="12"
        max="24"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}

export default AccessibilitySettings;
