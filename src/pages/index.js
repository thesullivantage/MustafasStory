import React, { Component } from "react";
import ContHolder from "../components/contHolder"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styling/index.css"
import data from "../data.json"
const pieces = data.pieces


class Index extends Component {

    // import json file
    // Declare initial state of object as the intro object

    // no need to iterate from there, only use links
    // use alias object again to more quickly access pieces
    //handle:
    // link
    // simple search for index, then change state to correct index of result object (obj imported)

    // start text on first index of 
    // return 
    // same as link, search for index, and change state to found index
    // "paginate"
    // only go forward
    // conditionals: 
    // if current obj has return ( render that in place of next button)
    // TODO: next button has cond. rendering that hides/ shows arrow or back graphic, need sub component
    // else if *not (go forward until you get to the last when next clicked, then go to prompt
    // setState: objInd + 1 (if not the end)
    // cond. rendering will take care of the rest 
    // )



    // cond renedering for prompt/no prompt

    // ANIMATIONS/GRAPHIC STUFF:
    // TODO: Use css to hide or other method?
    // easy mobile responsiveness now 
    // Button hover effect: easy css
    // ditch 2 div type of thing



    state = {
        // no objects needed here

    };





    // top level: cont Holder, above that put transition group in index.js






    render() {
        return (
            <div className="container-m">
                <div className="child top title">Russian Blues</div>
                <div className="child main-p"><ContHolder data={pieces} /></div>
            </div>

        );
    };
};

export default Index;
