import express from "express";
const ok=express();
const port=1234;
ok.get("/",(req,res)=>{
    res.send("<h1>")
})
ok.get("/",(req,res)=>{
    res.send("<h1>Hello world<h1>")
})

ok.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

ok.get("/contact",(req,res)=>{
    res.send("<h1>78928939<h1>")
})
ok.get("/about",(req,res)=>{
    res.send("<h1>hello i am aryan tanna<h1>")
})
ok.put("/user/angela", (req, res) => {
  res.sendStatus(404);
});

ok.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

ok.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});
ok.listen(port,()=>{
    console.log("Server running on port "+port);
})