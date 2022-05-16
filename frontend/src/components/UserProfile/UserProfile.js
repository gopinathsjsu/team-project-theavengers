import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import "./UserProfile.css";
import homeImage from './homeImage7.jpg';
import ProfileEditName from './ProfileEditName'
import ProfileEditPassword from './ProfileEditPassword'
import { BACKEND_URL } from '../Configuration/config';

import {
	Card, CardText,
	Button, CardHeader,
	Container, Row, Col
} from 'reactstrap';
<<<<<<< HEAD
import { parse } from 'dotenv';
=======
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52

var topSectionStyle = {
	width: "100%",
	height: "100vh",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center center",
	backgroundImage: `url(${homeImage})`,

};

class UserProfile extends React.Component {
	
	state = {
		name: "",
		email: "",
<<<<<<< HEAD
		reward: 0,
=======
		reward: "",
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
		currentDates: "",
		futureDates: "",
		rewardsEarned: "",
		transaction: "",
		currentRewardsHistory: [],
		futureRewardsHistory: [],
		user: []

	}

	RewardHistory(event) {
		event.preventDefault()
		this.props.history.push('/RewardHistory')
	}

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {//able to se values once submitted
		e.preventDefault();
		this.props.onSubmit(this.state)//possibly delete this.state
		// console.log(this.state);
	};
	fileSelectedHandler = event => {
		// console.log(event.target.files[0]);
	}


	componentDidMount() {
		// const url = BACKEND_URL+"/profile"
		// // console.log(url);
		// const userDetails = {
		// 	userEmail:localStorage.getItem('accesstoken').email
		// }
		// axios.post(url,userDetails)
		// 	.then(res =>{
		// 		console.log(res.data);
		// 		this.setState({
		// 			name: res.data.name,
		// 			email: res.data.email,
		// 			reward: res.data.reward
		// 		})
		// 	})
<<<<<<< HEAD
		const userID = JSON.parse(localStorage.getItem("accesstoken")).id
		axios.get(BACKEND_URL+"/rewardPoints/"+userID)
			.then((res)=>{
				this.setState({
						name: res.data.firstName+" "+res.data.lastName,
						email: res.data.email,
						reward: res.data.rewardPoints
					})
			})

		
=======
		this.setState({
						name: localStorage.getItem('userName'),
						email: localStorage.getItem('email'),
						reward: localStorage.getItem('rewardPoints')
					})
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
	}

	redirectToHome() {
		this.props.history.push('/')
	}

<<<<<<< HEAD
	refreshPage = (name) => {
		this.setState({name : name});
	}
=======
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
	render() {
		const profilePage = (
			<div className="profile-form-container col-lg-12 dark-tint" >
				<div>
					<Container className="profile-form-card-container">
						<Row>
							<Col sm="12" md={{ size: 6, offset: 3 }}>
								<div className="profile-card">
<<<<<<< HEAD
									<div className="profile-center-title"> Hello {this.state.name}!! </div>
=======
									<div className="profile-center-title"> Hello {this.state.name}! </div>
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
									<br />
									<div className="profile-card-body profile-inner-card">
										<Col>
											<Card>
												<CardHeader className="profile-inner-cardheader" tag="h4"> ABOUT </CardHeader>
												<div className="profile-inner-cardbody">
													<Row>
														<Col xs="6" sm="4">
															<br />
															<br />
															<img className="profile-human-pic" src="https://png.pngtree.com/svg/20160308/_user_profile_icon_1108089.png" alt="profile" width="115" />
														</Col>
														<Col>
															<CardText className="profile-text-row">
																<br />
																<b> Email: </b> {this.state.email}
																<br />
																<b> Name: </b> {this.state.name}
																<br />
<<<<<<< HEAD
																{/* <b> Password: </b> ******** */}
=======
																<b> Password: </b> ********
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
							         							</CardText>
														</Col>
													</Row>
													<Row>
														<Col xs="4"></Col>
														<Col xs="8">
<<<<<<< HEAD
															<ProfileEditName email={this.state.email} refresh={this.refreshPage} name={this.state.name}/>
															{/* <ProfileEditPassword email={this.state.email}/> */}
=======
															<ProfileEditName />
															<ProfileEditPassword />
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
															<br />
														</Col>
													</Row>
												</div>
											</Card>
										</Col>
									</div>
									<div className="profile-card-body profile-inner-card">
										<Col>
											<Card>
												<CardHeader className="profile-inner-cardheader" tag="h4"> REWARDS </CardHeader>
												<div className="profile-inner-cardbody">
													<CardText>
														<br />
<<<<<<< HEAD
														Total Points: {this.state.reward.toFixed(0)}
														<br />
														<br />
														{/* <Button onClick={this.RewardHistory.bind(this)} color="info"> See my reward history  </Button> */}
=======
														Total Points: {this.state.reward}
														<br />
														<br />
														<Button onClick={this.RewardHistory.bind(this)} color="info"> See my reward history > </Button>
>>>>>>> 39658d5bb078469e60dd10c8a88fbe0399d3ab52
														<br />
														<br />
													</CardText>
												</div>
											</Card>
										</Col>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)

		return (
			<div className="col-lg-12 profile-container col-auto" style={topSectionStyle}>
				{localStorage.accesstoken ? profilePage : this.redirectToHome()}
			</div>
		);
	}
}

export default withRouter(UserProfile);