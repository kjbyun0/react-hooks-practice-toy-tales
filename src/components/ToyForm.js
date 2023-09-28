import React, { useState } from "react";

function ToyForm({ OnAddToy }) {
  const [newToy, setNewToy] = useState({
    name: '',
    image: '',
  });

  function handleOnChange(e) {
    switch (e.target.name) {
      case 'name':
        setNewToy({...newToy, name: e.target.value});
        break;
      case 'image':
        setNewToy({...newToy, image: e.target.value});
        break;
    }
  }

  // {
  //   "id": 1,
  //   "name": "Woody",
  //   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
  //   "likes": 8
  // },

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newToy,
        likes: 0,
      }),
    })
    .then(resp => resp.json())
    .then(newToy => OnAddToy(newToy));

    
    setNewToy({
      name: '',
      image: '',
    });
  }

  // console.log('in ToyForm, newToy: ', newToy);

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
