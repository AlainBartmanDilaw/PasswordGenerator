const generator = require('generate-password');

const passwords = generator.generateMultiple(process.argv[2], {
	length: 32,
	numbers: true,
	symbols: true,
	strict: true,
	excludeSimilarCharacters: true
});

passwords.forEach(password=>{
    console.log(password);
});
