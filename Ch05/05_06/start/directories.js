const fs = require('fs');

// fs.renameSync('./assets/logs', './logs');

// console.log("Directory moved.");

// fs.rmdir('./assets', (err) => {
//   if(err){
//     throw err;
//   }

//   console.log("Assets Directory removed");
// });

fs.readdirSync('./logs').forEach( (fileName) => {
  fs.unlinkSync('./logs/' + fileName);
})

fs.rmdir('./logs', (err) => {
  if (err) {
    throw err;
  }
  console.log("Logs directory removed");
})

