import express from "express";
import ejs from "ejs";
const app = express();
var port=3000;
const d = new Date();
const day = d.getDay();
console.log(day)
var days;
var advice;
if(day===0||day===6){
  days="The Weekend"
  advice="its time to relax."
}
else{
   days="The Weekday"
  advice="its time to work hard."
}
app.get("/",(req,res)=>{
  

res.render("index.ejs",{type : days,adv : advice})
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    type: type,
    adv: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});*/
