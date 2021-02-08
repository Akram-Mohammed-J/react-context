import React, { useState, createContext } from "react";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the  wind ", id: 0 },
    { title: "The way of kings ", id: 1 },
    { title: "The final empire  ", id: 2 },
    { title: "The hero of ages ", id: 3 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
