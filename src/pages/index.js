import React, { Component } from "react";
import ContHolder from "../components/contHolder"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styling/index.css"
import data from "../data.json"



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
        objInd: 0,
        textInd: 0
    };


    componentDidMount = () => {
        console.log(data)
    };

    handleNext = () => {
        // increment textInd by 1 
    }

    handleLink = () => {
        // change state of triggerObj 
    }

    handleBack = () => {
        
    }

    // COND RENDER
        // within index
            // if prompt = "false" then render contholder thing
            // else render prompt space 
        // all handling go at top so that changes can cause conditional rendering to happen
            // within handle next (needa be on top level)
            // pass index number down as prop
                // if last of textInd then:  go to prompt via search & & hide next arrow
        // condiitonally hide and next with passed props


    

    render() {
        return (
            <div className="container-m">
                {/* <div className="child top title"><ContHolder /></div> */}
                <div className="child title"><ContHolder /></div>
            </div>

        );
    };
};

export default Index;
