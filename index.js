//for file system
const fs = require('fs');

//for creating Server
const http = require('http')

//creates port with value :
const PORT = 5555

//creates hostname with value :
const hostname = 'localhost'

//read the file synchronously by using readFileSync 
const File = fs.readFileSync('./index.html')

//for creating server and if got resp from 
//server then it will print the data in file
const server = http.createServer((req, res) => {
    return res.end(File)
})

//
server.listen(PORT, hostname, () => {
    console.log(`http://${hostname}:${PORT})`);
})