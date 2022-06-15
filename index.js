const generator = require('generate-password');

	length: 32,
	numbers: true,
	symbols: true,
	strict: true,
	excludeSimilarCharacters: true
let _count = 1;
if (process.argv.length === 2) {
	let _count = process.argv[2];
}

const passwords = generator.generateMultiple(_count, {
});

passwords.forEach(password=>{
    console.log(password);
});
