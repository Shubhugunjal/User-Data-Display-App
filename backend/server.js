const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
PORT = 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3001" }));

// app.use("/", (req, res) => {
//   res.send("hello shubhu");
// });

//Route for fetching data
app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

//listen to the port
app.listen(PORT, () => {
  console.log(`Server is listen to port ${PORT}`);
});
