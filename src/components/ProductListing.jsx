import React, { useState } from "react";
import { bookData } from "../data";
import "./productListing.css";

export const ProductListing = ({ books, handleChangeCategory }) => {
  return (
    <div>
      <h1>Book Product Listing</h1>

      <div className="category-class">
        <h2>Currently Reading</h2>
        <hr />
        <div className="item-container">
          {books
            .filter((book) => book.category === "currently reading")
            .map(({ id, title, author, category, image, price }) => (
              <div key={id} className="item">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <img src={image} alt={title} />
                <p>Price:{price}</p>
                <select
                  value={category}
                  onChange={(e) => handleChangeCategory(e, title)}
                >
                  <option value="currently reading">Currently Reading</option>
                  <option value="want to read">Want to Read</option>
                  <option value="read">Read</option>
                </select>
              </div>
            ))}
        </div>
      </div>

      <div className="category-class">
        <h2>Want to Read</h2>
        <hr />
        <div className="item-container">
          {books
            .filter((book) => book.category === "want to read")
            .map(({ id, title, author, category, image, price }) => (
              <div key={id} className="item">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <img src={image} alt={title} />
                <p>Price:{price}</p>
                <select
                  value={category}
                  onChange={(e) => handleChangeCategory(e, title)}
                >
                  <option value="want to read">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="currently reading">Currently Reading</option>
                </select>
              </div>
            ))}
        </div>
      </div>

      <div className="category-class">
        <h2>Read</h2>
        <hr />
        <div className="item-container">
          {books
            .filter((book) => book.category === "read")
            .map(({ id, title, author, category, image, price }) => (
              <div key={id} className="item">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <img src={image} alt={title} />
                <p>Price:{price}</p>
              
                <select
                  value={category}
                  onChange={(e) => handleChangeCategory(e, title)}
                >
                  <option value="currently reading">Currently Reading</option>
                  <option value="want to read">Want to Read</option>
                  <option value="read">Read</option>
                </select>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
