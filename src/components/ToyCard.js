import React from "react";

// {
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 8
// },

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => onDeleteToy(toy));
  }
  
  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      })
    })
    .then(resp => resp.json())
    .then(updatedToy => onUpdateToy(updatedToy));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
