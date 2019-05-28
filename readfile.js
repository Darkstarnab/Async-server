const fs = require('fs')
const path = require('path')

fs.readFile(
    path.join(__dirname, 'package.json'),
    'utf-8', function (err, result){
        if (err) {
           return console.error(err) 
        }

        try {
            const object = JSON.parse(result)
        } 
        catch (ex){
            return console.error(ex)
        }


        console.log(object.name)
    })