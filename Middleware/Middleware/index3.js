import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
function logger(req,res,next){
  console.log("awd ="+req.method)
  console.log("ffff ="+req.url)
  next();
}
app.use(logger);
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  res.send("Hello");
  console.log(req.body)})
app.get("/submit", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
