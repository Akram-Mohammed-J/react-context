import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((val) => {
          return (
            <li key={val.id} style={{ background: theme.ui }}>
              {val.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
