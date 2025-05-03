

const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;


const dataPath = path.join(__dirname, "qa.json");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Load QA data
let qaData = {};
if (fs.existsSync(dataPath)) {
  qaData = JSON.parse(fs.readFileSync(dataPath));
}

// Homepage
app.get("/", (req, res) => {
  res.render("index", { answer: null, question: null });
});



// Handle question
app.post("/ask", (req, res) => {
  const question = req.body.question.trim().toLowerCase();

  if (qaData[question]) {
    res.render("index", { question, answer: qaData[question] });
  } else {
    res.render("learn", { question });
  }
});

// Learn answer
app.post("/answer", (req, res) => {
  const question = req.body.question.trim().toLowerCase();
  const answer = req.body.answer.trim();

  qaData[question] = answer;

  fs.writeFileSync(dataPath, JSON.stringify(qaData, null, 2));

  res.render("index", { question, answer });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






