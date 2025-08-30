import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs"
  )
});

app.post("/submit", (req, res) => {
  var num = req.body["lName"]+req.body["fName"];
  console.log(req.body["lName"])
  res.render("index.ejs",{num : num})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
880