import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {message:"Enter your Destination", name:"Destination"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    var dest = answers.Destination;
    console.log(dest);
    URL(dest);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  function URL(dest){
  inquirer
  .prompt([
    {message:"Enter your Destination' URL", name:"URL"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    var url=answers.URL;
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream(dest+'-qr.png'));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });}