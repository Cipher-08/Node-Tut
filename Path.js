const path =  require('path')

////path where the code is presented
console.log(path.sep);


///takes a path of a file
const filePath = path.join('./content','subfolder','test.txt')
console.log(filePath)


/////the last file or the base file
const base = path.basename(filePath)
console.log(base);

/////full path or absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);

