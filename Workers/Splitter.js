const fs = require('fs')
const resolve = require('path').resolve
const final = resolve('./FinalText.txt')

var envelope = {
    pieces: [{
        "title": "Intro",
        "prompt": false,
        "text": "",
        "links": [],
        "return": ""
    }]
}


console.log(final)
/*
{
    "pieces": [
        {
            "title": "",
            "prompt": true,
            "text": "",
            "links": [],
            "return": "link"
            
        }
        
    ]
}
 */

fs.readFile(final, 'utf8', function (err, data) {
    var prelimArr = data.split('%')

    //FOR A PARTICULAR COUNTER: 
    // 1 GOES NOWHERE ALWAYS
    // if (ampersand) {
        //counter = counter + offset, clear offset counter, make object {extract title from first line; no text; next: true;}
        // extract method }
    
    // else if (*) :: beginning character is a start of index item

        // increment offset counter, create object at (counter + offset) index of pieces  
        // extract first line as title of working object, extract rest of string as text, pack up links to "parent" ampersand object
            // ** difference of acting index and offset counter and counter is how to get title -> link of ampersand object (counter)
            // "i" - offset = counter
            // but is still just counter
        //UNTIL:
            // if beginning character of next item in prelimArr is a star, need to add return address as that of the counter
            // if it's an ampersand, no return address needed
        // repeat until ampersand again, clear offset countera 

    // if (&) {...} else if (*) { ... continue}

    // as long as objects all get made, who cares exactly what order? still need above system
        
    
    //counter and offset need to be independent of main loop
    var counter = 0
    var offset = 0

    var alias = envelope.pieces
    for (var i = 0; i < prelimArr.length; i++) {
        let item = prelimArr[i]
        
        // no need to throw counter in for the first one
        if (i === 0) {
            alias[0].text = prelimArr[i];
            counter++;
        } else if (item[0] === "&" & counter > 0) {

            // if counter is one, and alias.length === 1: do not increment (this line moot)
            // else if counter is one, and length is greater than 1: increment with thing
            // else: increment up by thing 

            if (alias.length > 1) {
                counter = counter + 1 + offset
            }
            offset = 0
            
            // CALIBRATION
            // console.log( "& ", i, " ", counter)


            const title = item.substring(item.search("&") + 1, item.search("\r\n\r\n")).trim()

            alias[counter - 1].links.push(title)

            alias[counter] = { 
                "title": title,
                "prompt": true,
                "text": "",
                "links": [],
                "return": ""
            }
        
            // Console.log REMINDERS:
                // correct way for end of string
                // console.log(item[item.length-1])
                // console.log(alias[counter].title)
                // item.match(/&(.+)\r\n\r\n/g)

        } else if (item[0] === "*") {
            offset++;
            // console.log("* ", i, " ", offset+counter)
            const title = item.substring(item.search("&") + 1, item.search("\r\n\r\n")).trim()
            const text = item.substring(item.search("\r\n\r\n")+4, item.length-1).trim()
            const workingInd = offset + counter
            
            alias[workingInd] = {
                "title": title,
                "prompt": false,
                "text": text,
                "links": [],
                "return": ""
            }
            alias[counter].links.push(title)
            var off1= prelimArr[i+1]
            
            if (off1 && off1[0] === "*") {
                alias[workingInd].return = alias[counter].title
                // TODO: append horizontal line here as well (VISUAL)
            }
             
        }
    }

    for (var j = 0; j < alias.length; j++) {
        alias[j].text = alias[j].text.split("\r\n\r\n")
    }

    // maybe find all periods in each text item, count them up, and then split in the middle somewhere, or at even intervals

    // console.log(JSON.stringify(alias))

    // Ready?
    fs.writeFileSync('../src/data.json', JSON.stringify(envelope))


    
})






    //Later TODO: for each object: trim all white space from text, links, title & return



//later idea: measure space taken up and break up string like that 





    // Split into overall pieces
    // var prePiece = []
    // var str = ""
    // for (var i = 0; i < data.length; i++) {
    //     if (data[i] == "&") {
    //         //str += "data[i]"
    //         prePiece.push(str)
    //         str = "&"
    //         continue;
    //     }
    //     else if (i == data.length - 1) {
    //         prePiece.push(str)
    //     }
    //     else {
    //         str += data[i]
    //     }
    // }


    // Testing
    // envelope.pieces[0].title = "Intro"
    // envelope.pieces[0].text = prePiece[0]

    //need link from first slice

    // if (prePiece.length > 0) {
    //     str = ""
        //title thing
        // for (var j = 0; j < prePiece.length; j++) {           
            // need break right after 
            // different "for" loops (doesn't change)
            /* 
            
            */
            // const miniObj = {}
            // const item = prePiece[j]
            
            // item.split("")





            //Titles Pure JS Logic
            // for (var k = 0; k < item.length; k++) {
            //     if (item[k] == "&") {
            //         // indHold.push(k)

            //         str+=item[k]
            //     }
            //     else if ( item.toLowerCase().indexOf("\r\n\r\n") === k & str.indexOf("*") & str.toLowerCase().indexOf("\r\n\r\n") === -1 ) {
            //         // want to add to string all at once, then skip to end of line
            //         // -> just splice it in, and keep going. TODO: trim returns off end of beginning of each text item later
                    
            //         if (j < 1) {
            //             miniObj.title = str
            //             // console.log("STRING", str)
            //             str = ""
            //         }
                    




            //     } else {
            //         str += prePiece[j]
            //     }
            // }




            // envelope.pieces.push(miniObj)

            //append now to pieces ( beginning pieces' objects)

        
//         }

//     }



// })


/*

fs.writeFileSync()

*/
