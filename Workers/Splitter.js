const fs = require('fs')
const resolve = require('path').resolve
const final = resolve('./FinalText.txt')

var envelope = {
    pieces: []
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
    console.log(prePiece)

    if (prePiece.length > 0) {
        str = ""
        //title thing
        for (var j = 0; j < prePiece; j++) {
            // need break right after 
            // different "for" loops (doesn't change)
            /* 
            
            */
            const item = prePiece[j]
            
            //Titles
            for (var k = 0; k < item.length; k++) {
                var indHold = []
                if (item[k] == "*") {
                    // indHold.push(k)
                    // 
                }

                //problem here: hit all line breaks; TODO: Hit only linebreaks after push

                else if (prePiece[j] == "\r\n\r\n" & str.toLowerCase().indexOf("\r\n\r\n") === -1) {
                    indHold.push(k)
                    str = ""
                    continue;
                } else {
                    str += prePiece[j]
                }
            }

            //append now to pieces ( beginning pieces' objects)
        }

    }
    console.log(prePiece)



})


/*

fs.writeFileSync()

*/
