import React from 'react';
import { FaTimes } from 'react-icons/fa';


function Widget({ widget, categoryId, removeWidget }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <FaTimes
        className="remove-icon"
        onClick={() => removeWidget(categoryId, widget.id)}
      />
    </div>
  );
}

export default Widget;
