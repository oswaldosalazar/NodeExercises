const fs = require('fs');

let files = fs.readdir('./lib', (err, files) => {
  if(err){
    throw err;
  } 
  console.log(files);
});

console.log("Reading Files...");