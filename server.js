const { request, response } = require("express");
const express = require("express");
const server = express();
const answers = [
  "setup",
  "house",
  "pizza",
  "about",
  "above",
  "abuse",
  "actor",
  "acute",
];
let randomIndex = Math.floor(Math.random() * answers.length);
const theAnswer = answers[randomIndex];
console.log(theAnswer);
server.get("/guess/:word", (request, response) => {
  const userWord = request.params.word;

  let answer = [];
  for (let i = 0; i < userWord.length; i++) {
    const ch = userWord[i];
    if (ch == theAnswer[i]) {
      answer.push(1);
    } else if (theAnswer.includes(ch)) {
      answer.push(0);
    } else {
      answer.push(-1);
    }
  }
  response.json(answer);
});

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("sever is running on port 3000");
});
