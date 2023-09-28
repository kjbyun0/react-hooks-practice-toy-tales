import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyList([...toyList, newToy]);
  }

  function handleDeleteToy(deletedToy) {
    setToyList(toyList.filter(toy => toy.id !== deletedToy.id));
  }

  function handleUpdateToy(updatedToy) {
    setToyList(toyList.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      }
      return toy;
    }));
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(toys => setToyList([...toys]));
  }, []);

  return (
    <>
      <Header />
      {showForm ? <ToyForm OnAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={handleDeleteToy} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
