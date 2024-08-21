import React from "react";
import Widget from "../widget/Widget";
import AddWidget from "../addwidget/Addwidget";


function Dashboard({ data, addWidget, removeWidget }) {
  return (
    <div>
      {data.categories.map(category => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.length > 0 ? (
              category.widgets.map(widget => (
                <Widget
                  key={widget.id}
                  widget={widget}
                  categoryId={category.id}
                  removeWidget={removeWidget}
                />
              ))
            ) : (
              <p>No widgets found</p>
            )}
          </div>
          <AddWidget categoryId={category.id} addWidget={addWidget} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;