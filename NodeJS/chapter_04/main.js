console.clear();
console.log(`FileObject------------------------------->>`)

var fs = require('fs');

fs.readFile('fileReader.txt', 'utf8', function(err, data){
  console.log(data);
});