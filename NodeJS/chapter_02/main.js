
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

console.clear()
console.log(`args.start--------------------->>`)
const { timeStamp } = require('node:console');
const { argv } = require('node:process');

console.log(`argv : ` + argv)

// print process.argv
argv.forEach((val, index) => {
  console.log(`index : ${index}: value : ${val}`);
});


console.log(`args.end----------------------->>`)
