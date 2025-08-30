const fs = require("fs");

fs.readFile("./ok.txt",(err, data) => {
  if (err) throw err;
  console.log(data);
}); 