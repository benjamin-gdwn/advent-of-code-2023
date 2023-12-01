const fs = require('fs');
const readline = require('readline');

// Input and output files
const filePath = './assets/01/input.txt';
const outputFilePath = './assets/01/output.js';

// Create a read stream for the file
const fileStream = fs.createReadStream(filePath);
// write stream for the output
const outputStream = fs.createWriteStream(outputFilePath);

// Create an interface to read the file line by line
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

// Process each line
rl.on('line', (line) => {
  const stringWithComma = `'${line}', \n`; 
  // Adding a comma and a newline character
  outputStream.write(stringWithComma); 
  // Writing to the output file
});

rl.on('close', () => {
  console.log('File reading completed.');
    outputStream.close(); // Close the write stream
});
