if (typeof fetch !== 'function') {
    global.fetch = require('node-fetch-polyfill');
}
const csv = require('d3-fetch').csv;


var d3 = require("d3")


var csvPromise = csv("example.csv")

csvPromise.then(function(input)
{
    console.log("input",input);
    
    
    
})

