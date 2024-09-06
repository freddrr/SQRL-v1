const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/api", (req, res) => {
    console.log("GET request recieved from client");
    res.json({fruits: ["apple", "orange", "banana"]});
});

app.post("/loginInfo", (req, res) => {
    console.log("POST request recieved from client");
    console.log("User email is: " + req.body.email);
    res.json({returnString: "Email received"});
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});