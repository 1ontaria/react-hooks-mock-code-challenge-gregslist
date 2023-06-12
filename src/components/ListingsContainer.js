import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  }, []);

  function deleteListing(listing) {
    const updatedListing = listings.filter((item) => item.id !== listing.id);
    setListings(updatedListing);
  }

  return (
    <main>
      <ul className="cards">
        {listings
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.description.includes(search);
          })
          .map((item) => (
            <ListingCard
              item={item}
              key={item.id}
              description={item.description}
              image={item.image}
              location={item.location}
              onDelete={deleteListing}
            />
          ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
