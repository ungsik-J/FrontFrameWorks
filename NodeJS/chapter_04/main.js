console.clear();
console.log(`FileObject------------------------------->>`)

const os = require('os');
console.log('os.version==>' + ((os.version).toString()).indexOf('window') ); 

var testFolder = '/';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})