import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

// Components
import BookTable from "./BookTable";

//Route
import { Redirect, useParams } from "react-router-dom";

const AuthorDetail = (props) => {
  const { authorID } = useParams();

  const author = props.authors.find((author) => author.id === +authorID);

  if (!author) return <Redirect to="/authors" />;

  const books = author.books.map((bookID) =>
    props.books.find((book) => book.id === bookID)
  );

  const authorName = `${author.first_name} ${author.last_name}`;

  return (
    <div className="author">
      <div>
        <h3>{authorName}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail img-fluid"
          alt={authorName}
        />
      </div>
      <BookTable books={books} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authors: state.authorsState.authors,
    books: state.booksState.books,
  };
};

export default connect(mapStateToProps)(AuthorDetail);
