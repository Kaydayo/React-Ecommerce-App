import React from "react";
import ReactDom from 'react-dom';
//CSS
import './index.css'

//books
import { books } from './books'

import Book from "./Book";




function BookList() {
  return (
    <section className="booklist">
      {books.map((book, i) => { return (<Book key={i} {...book} />) })}
    </section>
  );
}





ReactDom.render(< BookList />, document.getElementById('root'))