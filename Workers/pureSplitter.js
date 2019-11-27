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

    // SPLIT BY SINGLE CHAR AND THEN DO COUNTER FOR PUTTING OBJECT TOGETHER ("IF: ARR[0][0] = * | &")
    // 1 GOES NOWHERE ALWAYS
    // iF ARRAY OF SUBSTRINGS A CERTIAN LENGTH, MAKE A DOUBLE GO BACKSIES

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
