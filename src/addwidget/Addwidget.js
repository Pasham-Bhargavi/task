import React, { useState } from 'react';


function AddWidget({ categoryId, addWidget }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };
    addWidget(categoryId, newWidget);
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="About"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
}

export default AddWidget;