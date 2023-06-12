import React, { useState } from "react";

function ListingCard({ description, image, location, item, onDelete }) {
  const [button, setButton] = useState("true");

  function buttonChange() {
    setButton((button) => !button);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(item));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {button ? (
          <button
            onClick={buttonChange}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={buttonChange} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
