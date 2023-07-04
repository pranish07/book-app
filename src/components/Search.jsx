import React, { useState } from "react";
import "./search.css";
export const Search = ({ books }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);

    const results = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleAddToLibrary = (book) => {
    const updatedBooks = books.map((b) => {
      if (b.title === book.title) {
        return { ...b, category: book.category };
      }
      return b;
    });

    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by book name..."
          value={query}
          className="search"
          onChange={handleSearch}
        />
      </div>
      <div>
      <div className="item-container">
        {searchResults.length === 0 ? (
          <p>Please Search Something</p>
        ):
        (
          searchResults.map(({ image, id,price, title, author, category }) => (
            <div key={id} className="item">
              <h3>{title}</h3>
              <p>Author: {author}</p>
              <img src={image} alt={title} />
              <p>{price}</p>
              <select
                value={category}
                onChange={(e) => handleAddToLibrary(e, title)}
              >
                <option value="currently reading">Currently Reading</option>
                <option value="want to read">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          ))
        )}
      
        </div>
      </div>
    </>
  );
};
