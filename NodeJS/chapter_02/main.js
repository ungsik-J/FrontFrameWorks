/**
 * 콘솔에서의 입력값
 * https://opentutorials.org/module/3549/21062
 * 
 * node main.js args
 *  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\devHome\\★gItRepository\\FrontFrameWorks\\NodeJS\\chapter_02\\main.js',
    'args'
    ]
 */
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});