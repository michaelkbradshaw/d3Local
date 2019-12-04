if (typeof fetch !== 'function') {
    global.fetch = require('node-fetch-polyfill');
}
let csv = require('d3-fetch').csv;


var d3 = require("d3");
var fs = require("fs");


//will not allow relative paths for this....
var csvPromise = csv("https://michaelkbradshaw.github.io/d3Local/example.csv")

csvPromise.then(function(input)
{
    console.log("input",input);
    var converted = convertData(input);
    console.log("converted",converted);
    
    
    var output = convertToCSV(converted,input.columns);
    console.log("output",output);
    fs.writeFile("converted.csv",output,function(err)
    {
        if(err)
        {
            console.log(err);             
        }
    })
})




var convertData = function(input)
{
    
    return input.map(function(row)
    {
        row.name = row.name.toUpperCase();
        return row;
    })
    
    
    
}

//the second paramter is optional and is used to indicate which columns will be placed in the CSV file.
//If no second paramter sis offered it assumes that csvData has a columns object that it can use,
var convertToCSV = function(csvData,columns)
{
    if(columns)
    {
   
    }
    else
    {
        columns = csvData.columns;    
    }
    
    var lines = csvData.map(function(row)
    {
        var fields = []
        
        columns.forEach(function(col)
        {
            fields.push(row[col]);    
        })
        return fields.join(",");
        
    })
    
    console.log("lines",lines);
    
    var fileData = columns.join(",")+"\n"+
    lines.join("\n");
    
    return fileData;
}