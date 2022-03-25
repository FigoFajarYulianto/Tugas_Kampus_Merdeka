
// ini akan mengimportkan module bernama "os"
// const os = require('os');
// console.log('Free Memory:', os.freemem());
// console.log(os.cpus(), os.platform())

// console.log("Hi nama saya figo");


// ini akan mengimportkan module bernama "os"
//  const os = require('os');
//  const luasSegitiga = require('./segitiga.js')

//  console.log('Free Memory:', os.freemem())
//  console.log(luasSegitiga(3,4));


//ini akan mengimportkan module bernama "fs"
// const fs = require('fs')

// const isi = fs.readFileSync('./text.txt','utf-8')
// console.log(isi)

//ini akan mengimportkan module bernama "fs"
// const fs = require('fs')
// fs.writeFileSync('./text.txt', 'i love ')

// ini akan mengimportkan module bernama "fs"
let fs = require("fs");
const create = require('./create.js');
const person = require('./person.json');
create;
console.log(person)