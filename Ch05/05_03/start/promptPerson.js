const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

let realPerson = {
  name: '',
  sayings: []
};

rl.question("What is the name if a real person? ", (answer) => {

  realPerson.name = answer;

	fs.writeFileSync(realPerson.name + ".md", 
		`${realPerson.name}\n==========================\n\n`);

  rl.setPrompt(`What would ${realPerson.name} say? `)
  rl.prompt();
  rl.on('line', (saying) => {
    realPerson.sayings.push(saying.trim());

		fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

    if(saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `)
      rl.prompt();
    }
  });
});

rl.on('close', () => {
  console.log("%s is a real person says %j", realPerson.name, realPerson.sayings);
  process.exit();
});

