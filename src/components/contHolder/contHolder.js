import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import NextBtn from "../NextBtn"
import BackBtn from "../BackBtn"
import ContSpace from "../contSpace"

import "./contHolder.css";


class ContHolder extends React.Component {


	state = {
		data: this.props.data
	}


	render() {
		return (
			<Container>
				<Row>
					<Col className="backHold" xs="12" sm="12" md="2" lg="2" xl="2"><BackBtn /></Col>
					<Col className="contSpace" xs="12" sm="12" md="8" lg="8" xl="8"><ContSpace/></Col>
					<Col className="nBtn" xs="12" sm="12" md="2" lg="2" xl="2"><NextBtn/></Col>
				</Row>
			</Container>
		)

		// REMINDERS; TODO: DELETE LATER
		// if (this.props.type === "invitation" && this.props.data) {
		// 	return (
		// 		<Collection>
		// 			{/* changed from this.props.data */}
		// 			<Invitation data={this.props.data} />
		// 		</Collection>
		// 	);

		// } else if (this.props.type === "myEvents" && this.props.data) {
		// 	return (
		// 		<Collection>
		// 			<MyEvent data={this.props.data} />
		// 		</Collection>
		// 	);

		// } else if (this.props.type === "publicEvents") {
		// 	return (
		// 		<PublicEvent markerObj={this.props.markerObj} />
		// 	)

		// } else if (!this.props.data) {
		// 	return null;

		// } else {
		// 	return (
		// 		<h1>Teeest</h1>
		// 	)
		// }


		// } else if (type == "myEvent") {
		//   return <MyEvent data={passdata} />
		// } else {
		//   return <PublicEvent data={passdata} />
		// }
	}
}

export default ContHolder;
