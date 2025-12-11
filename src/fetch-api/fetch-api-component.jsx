import React, { useState } from "react";
import axios from "axios";

const FetchApiComponent = () => {
  const [data, setData] = useState([]);

  const fun1 = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const response2 = await axios("https://dummyjson.com/products");
    const response3 = await axios("https://dummyjson.com/todos");

    // Combine all API results
    const allData = [
      ...response.data,             // users
      ...response2.data.products,   // products
      ...response3.data.todos       // todos
    ];

    setData(allData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Fetch</h1>

      {data.length === 0 ? (
        <>
          <h1>No data is existing</h1>
          <button
            onClick={fun1}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Fetch Data
          </button>
        </>
      ) : (
        data.map((item, index) => (
          <div
            key={index}

          >
            <h3>{item.name || item.title || item.todo}</h3>

            {/* optional: show more details */}
            {item.email && <p>Email: {item.email}</p>}
            {item.price && <p>Price: ₹{item.price}</p>}
            {item.completed !== undefined && (
              <p>Status: {item.completed ? "Completed" : "Not Completed"}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FetchApiComponent;
