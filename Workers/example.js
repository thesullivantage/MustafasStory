// Require the core not modules.
var chalk = require( "chalk" );

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Let's use a string that contains two sets of delimiters: "=" and "&".
var input = "hello=world&submitted=true";

// Create the Regular Expression pattern oh which we're going to split the input.
// --
// NOTE: When we use a capturing group (ie, the parenthesis) in the RegEx pattern, the
// .split() method will return the matched delimiter as part of the returned tokens.
// --
// CAUTION: Using MULTIPLE capturing groups will returns multiple delimiters for each
// match. This may or may not be what you are expecting.
var delimiterPattern = /([&=])/g;

console.log( chalk.bold( "Input:" ), input );
console.log( chalk.bold( "Split:" ), delimiterPattern.source );
console.log( chalk.dim( "--------------------------" ) );

// Loop over the segments, including the delimiters.
for ( var token of input.split( delimiterPattern ) ) {

    var outputs = [
        chalk.dim( ">" ),
        chalk.cyan.bold( token ),
        chalk.dim( "-->" )
    ];

    // Since our capturing group will cause all matched delimiters to be returned as
    // part of the split() tokens, we can test to see which token is a delimiter and
    // which is a segment.
    if ( delimiterPattern.test( token ) ) {

        outputs.push( chalk.red( "delimiter" ) );

    } else {

        outputs.push( chalk.green( "token" ) );

    }

    console.log( ...outputs );

}