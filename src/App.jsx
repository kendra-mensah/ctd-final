import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header.jsx";
import Home from "./pages/Home.jsx";
import AddEntry from "./pages/AddEntry.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [entries, setEntries] = useState([]);

  // Add entry
  const addEntry = (newEntry) => {
    setEntries((prev) => [
      ...prev,
      { ...newEntry, id: Date.now().toString() },
    ]);
  };

  // Delete entry
  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <Header title="My Digital Diary" />
      <Routes>
        <Route
          path="/"
          element={<Home entries={entries} deleteEntry={deleteEntry} />}
        />
        <Route path="/add" element={<AddEntry addEntry={addEntry} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;