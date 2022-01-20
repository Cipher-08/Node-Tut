//Modules

/////every file in node is 
const {saksham,friends} = require('./module-a')
const {say} = require('./module-b')

say(saksham)


///////alternatives can be easily find in this manner





/////////////////////////////////////////names on other file

///local
const secret ="SUPER SECRET"


//global
const saksham ="saksham"
const friends = null

module.exports ={saksham, friends}
// console.log(module); 

// Module {
//     id: '.',
//     path: 'c:\\Users\\saksh\\Desktop\\node',
//     exports: {},
//     filename: 'c:\\Users\\saksh\\Desktop\\node\\module-a.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'c:\\Users\\saksh\\Desktop\\node\\node_modules',
//       'c:\\Users\\saksh\\Desktop\\node_modules',
//       'c:\\Users\\saksh\\node_modules',
//       'c:\\Users\\node_modules', 
//       'c:\\node_modules'
//     ]
//   }





//////////////////////////////////function on other file

const names = require('./module-a')

const say =(name)=>{
    console.log(`Hello there ${name}`)
}

module.exports={say}

