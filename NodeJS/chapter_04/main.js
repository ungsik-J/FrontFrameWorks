console.clear();
console.log(`FileObject------------------------------->>`)

var testFolder = 'c:\\devHome';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})