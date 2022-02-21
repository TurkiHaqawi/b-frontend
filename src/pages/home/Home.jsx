import "./Home.css";
import Header from "../../components/header/Header";
import Books from "../../components/books/Books";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../../components/loading/Loading";
import { publicRequest } from "../../requstMethod";
// import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    const fetchingBooks = async () => {
      const res = await publicRequest.get("/books/" + search);
      setBooks(res.data);
      setLoading(true);
    };
    fetchingBooks();
  }, [search]);

  localStorage.removeItem("path");
  localStorage.removeItem("items");

  return (
    <React.Fragment>
      <Header />
      <div className="home">
        {loading ? <Books books={books} /> : <Loading />}
      </div>
    </React.Fragment>
  );
}

export default Home;
