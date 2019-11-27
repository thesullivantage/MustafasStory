const fs = require('fs')
const resolve = require('path').resolve
const final = resolve('./FinalText.txt')

var envelope = {
    pieces: [{
        "title": "Intro",
        "prompt": false,
        "text": "",
        "links": []
    }]
}


fs.readFile(final, 'utf8', function (err, data) {
    var prelimArr = data.split('%')
    counter = 0
    console.log(prelimArr)

    // envelope.pieces[1] = {}
    // envelope.pieces[1].name = "test"

    //TODO: extract method : capture line with substring & regex
    // link value = title value

    //FOR A PARTICULAR COUNTER: 

    // 1 GOES NOWHERE ALWAYS
    // if ampersand, link for current; next: title, next: prompt: true; increment counter up; clear offset counter
        // extract method
    
    // else if (*) :: beginning character is a start of index item

        // need to capture line (title/link) & text
        // computer process: hit item, create object

        // increment offset counter
        // create object at (counter + offset) index of pieces  
        // extract first line as title of working object, extract rest of string as text, pack up links to "parent" ampersand object
            // ** difference of acting index and offset counter and counter is how to get title -> link of ampersand object (counter)
            // "i" - offset = counter
        // repeat until ampersand again, clear offset counter

    // if (&) {...} else if (*) { ... continue}

    // as long as objects all get made, who cares exactly what order? still need above system
            
    for (var i = 0; i < prelimArr.length; i++) {
        let item = prelimArr[i]
        if (item[0] === "&" & counter > 0) {
            counter++;

        }
    }
    













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

    if (prePiece.length > 0) {
        str = ""
        //title thing
        for (var j = 0; j < prePiece.length; j++) {           
            // need break right after 
            // different "for" loops (doesn't change)
            /* 
            
            */
            const miniObj = {}
            const item = prePiece[j]
            
            item.split("")





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

        
        }

    }



})


/*

fs.writeFileSync()

*/
