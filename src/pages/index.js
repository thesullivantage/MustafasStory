import React, { Component } from "react";
import "./styling/index.css"

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


    constructor(props) {
        super(props)
        this.state = {
            birthday: null
        };
    }

    state = {
        // no objects needed here
        objInd: 0,
        textInd: 0,
    };


    componentDidMount = () => {

        
        // this.setState({
        //     triggerObj: ""
        // });
    }

    handleLink = () => {
        // change state of triggerObj 
    }
 
    render() {

        return (
            <div className="container">
                <div className="child red">Hello</div>
                <div className="child blue">World</div>
            </div>

        );
    }
}

export default Index;
