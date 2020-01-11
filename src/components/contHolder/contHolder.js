import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import NextBtn from "../NextBtn"
import BackBtn from "../BackBtn"
import TextSpace from "../textSpace"

import "./contHolder.css";


class ContHolder extends React.Component {


	state = {
		objInd: 0,
		textInd: 0,
		arrow: "show",
	}


	// object index control everything

	// Comp did mount b/c will change every time text ind changes
	// IF textInd+1 of current object index DNE THEN:

	// don't increment -> it stays 
	// change show (binary) state to true 
	// change back to false in "handleLink"

	// pass in state based prop to hide next arrow
	// display link in box (state)
	// RESULTS IN (obj index) prompt true/false, render one or the 
	// Cond render down below

	// next & return need to come & go with state changes at top of tree
	// 	next
	// above if statement can do "show" in component did mount
	// object index increments 

	// pass last index into next arrow 
	// return
	// NEED REDUX
	// 


	// COND RENDER

	// if prompt = "false" then render contholder thing
	// else render prompt space 
	// all handling go at top so that changes can cause conditional rendering to happen

	// within handle next (needa be on top level)
	// pass index number down as prop
	// if last of textInd then:  go to prompt via search & & hide next arrow
	// condiitonally hide and next with passed props


	// beginning (objInd changes): show/hide
	// next, next, next ... IF next doesnt exist, THEN hide & show link 

	// componentDidMount = () => {
	// 	// console.log(this.props.data[this.state.objInd].text[this.state.textInd])
	// 	// let txtLength = this.state.data[this.state.objInd].text.length
	// 	// if (txtLength === 1) {

	// 	// }




	handleNext = event => {
		let current = this.props.data[this.state.objInd]
		console.log(this.state.textInd, current.text.length)

		if (this.state.textInd === current.text.length - 1) {
			let data = this.props.data


			for (var j = 0; j < data.length; j++) {
				// console.log(data[i].title)
				// console.log(data[j].title)
				if (data[j].title === current.links[0]) {
					console.log(j)
					this.setState({
						objInd: j,
						textInd: 0
					})
					break;
				}
			}


		}
		// ELSE IF last text item -2, last object (do by length) THEN hide arrow & TODO: fade out
		else if (this.state.objInd === this.props.data.length - 1 & this.state.textInd === current.text.length - 2) {
			this.setState({
				arrow: "hide",
				textInd: this.state.textInd +1
			})
		}
		else {
			console.log("happening")
			this.setState({
				textInd: this.state.textInd + 1
			})
		}

	}



	handleLink = (event) => {
		let name = event.currentTarget.textContent
		let data = this.props.data
		console.log("NAME ", name)
		for (var i = 0; i < data.length; i++) {
			if (data[i].title === name) {
				if (data[i].text.length === 1) {
					console.log("HEEEET", data[i])
					this.setState({
						objInd: i,
						arrow: "hide"
					})
				}
				else {
					this.setState({
						objInd: i,
						arrow: "show"
					})
				}
			}
		}
	}
	// the triggering one lives at the back slides
	handleBack = event => {
		let data = this.props.data
		let current = this.props.data[this.state.objInd]
		for (var k = 0; k < data.length; k++) {
			if (current.return === data[k].title) {
				console.log("TEXT ", data[k].text)
				this.setState({
					objInd: k
				}, () => {
					console.log("STATE ", this.state)
				})
			}
		}
	}

	// unmount if last objInd, last textInd -- really really slowly 

	render() {
		let current = this.props.data[this.state.objInd]
		let text = this.props.data[this.state.objInd].text[this.state.textInd]
		if (current.prompt === true) {
			return (
				<Container className="prompt-p">
					<Row>
						<Col className="Prompt" xs="12" sm="12" md="2" lg="2" xl="2"><TextSpace text={current.title} /></Col>

					</Row>
					<Row className="promptLink">
						<Col className="link1" xs={6} sm={6} md={6} lg={6} xl={6}><div onClick={this.handleLink}>{current.links[0]}</div></Col>
						<Col className="link2" xs={6} sm={6} md={6} lg={6} xl={6}><div onClick={this.handleLink}>{current.links[1]}</div></Col>
					</Row>
				</Container>

			);
		}

		return (
			<Container className="cont-p">
				<Row>
					{/* CR */}
					<Col className="backHold" xs="2" sm="2" md="2" lg="2" xl="2"><BackBtn return={this.handleBack} link={current.return} /></Col>
					<Col className="textSpace" xs="8" sm="8" md="8" lg="8" xl="8"><TextSpace text={text} /></Col>
					{/* CR */}
					<Col className="nBtn" xs="2" sm="2" md="2" lg="2" xl="2"><NextBtn arrow={this.state.arrow} next={this.handleNext} /></Col>
				</Row>
				<Row className="promptLink">
					<Col className="nBtn" xs="12" sm="12" md="2" lg="2" xl="2"></Col>
				</Row>
			</Container>
		);
	}
}

export default ContHolder;
