const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
//
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// your code goes here
app.get("", (req, res) => {
  res.sendFile(__dirname + "/opreration.html");
});

app.post("/add", (req, res) => {
  const n1 = req.body.addnum1;
  const n2 = req.body.addnum2;
  let add = Number(n1) + Number(n2);
  let status;
  let msg;
  console.log(n1, n2);
  if (n1 < -1e6 || n1 < -1e6 || add < -1e6) {
    status = "failure";
    msg = "Underflow";
    add = "NA";
  } else if (n1 > 1e6 || n1 > 1e6 || add > 1e6) {
    status = "failure";
    msg = "Overflow";
    add = "NA";
  } else if (isNaN(n1) || isNaN(n2)) {
    status = "error";
    msg = "Invalid data types";
  } else {
    status = "success";
    msg = "the sum of given two numbers";
  }
  res.status(200).json({
    status: status,
    message: msg,
    sum: add,
  });
});
app.post("/sub", (req, res) => {
  const n1 = req.body.subnum1;
  const n2 = req.body.subnum2;
  let sub = Number(n1) - Number(n2);
  let status;
  let msg;
  console.log(n1, n2);
  if (n1 < -1e6 || n1 < -1e6 || sub < -1e6) {
    status = "failure";
    msg = "Underflow";
    sub = "NA";
  } else if (n1 > 1e6 || n1 > 1e6 || sub > 1e6) {
    status = "failure";
    msg = "Overflow";
    sub = "NA";
  } else if (isNaN(n1) || isNaN(n2)) {
    status = "error";
    msg = "Invalid data types";
  } else {
    status = "success";
    msg = "the difference of given two numbers";
  }
  res.status(200).json({
    status: status,
    message: msg,
    difference: sub,
  });
});
app.post("/div", (req, res) => {
  const n1 = req.body.divnum1;
  const n2 = req.body.divnum2;
  let div = Number(n1) / Number(n2);
  console.log(div);
  let status;
  let msg;
  console.log(n1, n2);
  if ((n1 < -1e6 || n1 < -1e6 || div < -1e6) && n2 != 0) {
    status = "failure";
    msg = "Underflow";
    div = "NA";
  } else if ((n1 > 1e6 || n1 > 1e6 || div > 1e6) && n2 != 0) {
    status = "failure";
    msg = "Overflow";
    div = "NA";
  } else if (isNaN(n1) || isNaN(n2)) {
    status = "error";
    msg = "Invalid data types";
  } else if (n2 == 0) {
    status = "error";
    msg = "Cannot divide by zero";
    div = "NA";
  } else {
    status = "success";
    msg = "The division of given numbers";
  }
  res.status(200).json({
    status: status,
    message: msg,
    result: div,
  });
});
app.post("/mul", (req, res) => {
  const n1 = req.body.mulnum1;
  const n2 = req.body.mulnum2;
  let mul = Number(n1) * Number(n2);
  let status;
  let msg;
  console.log(n1, n2);
  if (n1 < -1e6 || n1 < -1e6 || mul < -1e6) {
    status = "failure";
    msg = "Underflow";
    mul = "NA";
  } else if (n1 > 1e6 || n1 > 1e6 || mul > 1e6) {
    status = "failure";
    msg = "Overflow";
    mul = "NA";
  } else if (isNaN(n1) || isNaN(n2)) {
    status = "error";
    msg = "Invalid data types";
  } else {
    status = "success";
    msg = "The product of given number";
  }
  res.status(200).json({
    status: status,
    message: msg,
    result: mul,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
