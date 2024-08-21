import "./App.css"
import Dashboard from "./dashboard/Dashboard";
import { useState } from "react";

const initialData = {
  categories: [
    {
      id: 1,
      name: "Dashboard1",
      widgets: [
        { id: 1, name: "YouTube", text: "YouTube is an American online video sharing platform owned by Google. Accessible worldwide, YouTube was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal." },
        { id: 2, name: "Twitter", text: "Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for its flagship social media network prior to its rebrand as X. In addition to Twitter, the company previously operated the Vine short video app and Periscope livestreaming service" }
      ]
    },
    {
      id: 2,
      name: "Another Dashboard",
      widgets: [
        { id: 3, name: "Instagram", text: "Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. They can also view, comment and like posts shared by their friends on Instagram." }
      ]
    }
  ]
};

function App() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const addWidget = (categoryId, widget) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, widget]
          };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId)
          };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredCategories = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery)
    )
  }));

  return (
    <div className="App">
      <h1> Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={() => setSearchQuery('')}>Clear</button>
      </div>
      <Dashboard data={{ categories: filteredCategories }} addWidget={addWidget} removeWidget={removeWidget} />
    </div>
  );
}

export default App;