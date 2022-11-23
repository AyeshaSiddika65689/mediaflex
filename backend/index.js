const express = require("express");
const cors = require("cors");

const app = new express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//  res.send("testing");
//  });






app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running sucessfully on 3000`);
});