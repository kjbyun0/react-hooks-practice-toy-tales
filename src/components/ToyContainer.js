import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDeleteToy, onUpdateToy }) {
  const dispToyList = toyList.map(toy => 
    <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy} />);
  // console.log('in ToyContainer, dispToyList: ', dispToyList);

  return (
    <div id="toy-collection">{dispToyList}</div>
  );
}

export default ToyContainer;
