const fs = require('fs')
const resolve = require('path').resolve
const final = resolve('./FinalText.txt')

var envelope = {
    pieces: [{}]
}


fs.readFile(final, 'utf8', function (err, data) {
    // var arrFirst = data.split('&')

    // Split into overall pieces
    var prePiece = []
    var str = ""
    for (var i = 0; i < data.length; i++) {
        if (data[i] == "&") {
            //str += "data[i]"
            prePiece.push(str)
            str = "&"
            continue;
        }
        else if (i == data.length - 1) {
            prePiece.push(str)
        }
        else {
            str += data[i]
        }
    }

    console.log(prePiece[1])
    envelope.pieces[0].title = "Intro"
    envelope.pieces[0].text = prePiece[0]
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
            
            //Titles
            for (var k = 0; k < item.length; k++) {
                if (item[k] == "&") {
                    // indHold.push(k)
                    str+=item[k]
                }
                else if (prePiece[j].search("\r\n\r\n") === k ) {
                    // want to add to string all at once, then skip to end of line
                    // -> just splice it in, and keep going. TODO: trim returns off end of beginning of each text item later
                    console.log(k)
                    
                    if (j < 1) {
                        miniObj.title = str
                        // console.log("STRING", str)
                        str = ""
                    }
                    




                } else {
                    str += prePiece[j]
                }
            }

            envelope.pieces.push(miniObj)

            //append now to pieces ( beginning pieces' objects)

        
        }

    }



})


/*

fs.writeFileSync()

*/
