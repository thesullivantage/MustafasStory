import React, { Component } from "react";
import "./styling/index.css"

class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            birthday: null
        };
    }

    // state = {
    //     userQr: ""
    // };


    componentDidMount = () => {
        this.setState({
            userQr: "hello"
        });
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
