import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  //fetch the data from the api
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/data")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  //Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          fontFamily: "cursive",
        }}
      >
        User Information
      </h1>
      {currentItems.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          id={card.id}
          contact={card.phone}
          username={card.username}
          email={card.email}
          address={card.address}
          companyName={card.company.name}
        />
      ))}
      <div className="pagination">
        <button
          className={`pagination_button ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`pagination_button ${
            indexOfLastItem >= userData.length ? "active" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= userData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
