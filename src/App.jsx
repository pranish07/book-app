import React, { useState } from "react";
import { ProductListing } from "./components/ProductListing";
import { Routes, Route, NavLink } from "react-router-dom";
import { Search } from "./components/Search";
import { bookData } from "./data";

export const App = () => {
  const [books, setBooks] = useState(bookData);

  const handleChangeCategory = (e, title) => {
    const selectedCategory = e.target.value;

    // Update the books array by finding the book with the matching title
    // and updating its "category" property
    const updatedBooks = books.map((book) => {
      if (book.title === title) {
        return { ...book, category: selectedCategory };
      }
      return book;
    });

    setBooks(updatedBooks);
  };
  return (
    <div>
      <h1>Book app</h1>
      <div style={{ textAlign: "center" }}>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/search">Search</NavLink>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ProductListing
              books={books}
              handleChangeCategory={handleChangeCategory}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search books={books} handleChangeCategory={handleChangeCategory} />
          }
        />
      </Routes>
    </div>
  );
};
