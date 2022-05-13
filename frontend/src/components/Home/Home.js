import React from 'react';
import { withRouter } from 'react-router-dom'

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './CSS/react_dates_overrides.css'; //NEEDED in order to OVERRIDE css styling of _datepicker.css

import { HotelSearchFunction, extractFromAddress } from '../Utility/HotelSearchFunction'
import Autocomplete from "../Utility/Autocomplete";

import homeImage from './Images/homeImage14.jpeg';
import {
	Form, CustomInput, FormGroup
} from 'reactstrap'
import { homeFilterData } from '../Utility/DataForMenu'


var topSectionStyle = {
	width: "100%",
	height: "100vh",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center center",
	backgroundImage: `url(${homeImage})`,
};

class Home extends React.Component {

	constructor() {
		super();
		this.state = {
			fullAddress: '',
			streetAddress: '',
			city: '',
			state: '',
			latitude: '',
			longitude: '',
			date_in: null,
			date_out: null,
			adult: 0,
			children: 0,
			focusedInput: null,
			guest_number: 0,
			place: {},
			checkbox: {
			}
		};
	}

	componentDidMount() {
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleCheckBox = (event) => {
		const name = event.target.name
		this.setState(prevState => ({
			checkbox: {
				...prevState.checkbox,
				[name]: !prevState.checkbox[name]
			}
		}))
	}

	adultIncrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('adult').value, 10);

		value++;
		// console.log(value);

		document.getElementById('adult').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			adult: value,
			guest_number: guest_number

		})

	}

	adultDecrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('adult').value, 10);

		if (value !== 0) {
			value--;
		}
		// console.log(value);

		document.getElementById('adult').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			adult: value,
			guest_number: guest_number
		})

	}

	childrenIncrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('children').value, 10);

		value++;
		// console.log(value);

		document.getElementById('children').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			children: value,
			guest_number: guest_number

		})

	}


	render() {

		const homeHeader = (

				<div className="col-lg-12 home-container col-auto" style={topSectionStyle}>
					<div className="home-form-container col-lg-12">
						<Form className="home-form col-lg-12" onSubmit={this.search}>
							<FormGroup>
								<div className="col-lg-12 custom-row">
									<div className="col-lg-6 top-header ml-lg-5 ">
										<div className="subheading-sm">Welcome</div>
										<div>Spartan Hotels</div>
					  				</div>
				  				</div>

				  				<div className="row mb-5 mr-lg-5 ml-lg-5">
				  				  	<div className="col-md-12 home-inputs-container">

				  				    <div className="block-32">
				  				        <div className="row">
				  				          <div className="col-md-6 mb-3 mb-lg-0 col-lg-4" >
				  				            <label className="input-labels">Location</label>
				  				            <div className="field-icon-wrap">
				  				              <div className="icon"><i className="fa fa-search"></i></div>
				  				            		<Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)}/>
				  				            </div>
				  				          </div>
				  				          <div className="col-md-6 mb-3 mb-lg-0 col-lg-4">
				  				            <label className="input-labels">Check In &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Check Out</label>
				  				            <div className="field-icon-wrap check-wrap">
				  				              <div className="icon"><i className="fa fa-calendar"></i></div>
				  				              <DateRangePicker
				  				              	startDatePlaceholderText="mm/dd/yyyy"
				  				              	startDate={this.state.date_in} // momentPropTypes.momentObj or null,
				  				              	startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
				  				              	endDatePlaceholderText="mm/dd/yyyy"
				  				              	endDate={this.state.date_out} // momentPropTypes.momentObj or null,
				  				              	endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
				  				              	onDatesChange={({ startDate, endDate }) => this.setState({ date_in: startDate, date_out: endDate })} // PropTypes.func.isRequired,
				  				              	focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				  				              	onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
				  				              />
				  				            </div>
				  				          </div>
				  				          <div className="col-md-6 mb-3 mb-md-0 col-lg-2">
				  				            <div className="row">
				  				                <label className="input-labels">Guests</label>
				  				                  	<div className="icon"><span className="ion-ios-arrow-down"></span></div>
				  				                  	<div className={this.state.guest_number === 0 ? "home-guest-dropdown col-lg-12 menu-box menu-item" : "home-guest-dropdown-filled col-lg-12 menu-box menu-item" }> {this.state.guest_number === 0 ? null : this.state.guest_number}&nbsp;guests
															<ul className="home-guest-dropdown-list-style">
																<li>
																	<div className="form-inline home-adults-container">
																		<div className="home-adults">
																			Adults
												                		</div>

																		<div className="home-increments">
																			<i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.adultDecrement}></i>
																			<input readOnly className="home-guest-input" name="adult" type="text" id="adult" value={this.state.adult} onChange={this.handleChange} />
																			<i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.adultIncrement} />
																		</div>
																	</div>

																	<div className="form-inline home-children-container">
																		<div className="home-children">
																			Children
												                		</div>

																		<div className="home-increments">
																			<i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.childrenDecrement}></i>
																			<input readOnly className="home-guest-input" name="children" type="text" id="children" value={this.state.children} onChange={this.handleChange} />
																			<i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.childrenIncrement} />
																		</div>
																	</div>
																</li>
															</ul>
														</div>
				  				            </div>
				  				          </div>
				  				          <div className="col-md-6 mb-3 mb-md-0 col-lg-2 ">
				  				          		  				                <label htmlFor="checkin">&nbsp;</label>

				  				          	<div className="">
				  				            <button disabled={!this.state.city || !this.state.date_in || !this.state.date_out || this.state.guest_number === 0} className="home-submit-button btn btn-primary py-3 px-4" type="submit">Search</button>
				  				            </div>

				  				          </div>
				  				        </div>
													<div className="input-labels-guide">Try "Las Vegas" or "New Orleans"</div>
				  				    </div>
				  				    <div className="col-lg-12">
										<div className="form-checkboxes row home-checkboxes text-center">
											{homeFilterData.map((each, key) => {
												return <CustomInput className="col-lg-3 input-labels" type="checkbox" key={key} id={key + 123} name={each.name} label={each.label} value={each.value} onChange={this.handleCheckBox} />
											})}
										</div>
									</div>
				  				  </div>
				  				</div>
			  				</FormGroup>
						</Form>
					</div>
				</div >
		);


		return (
			<div>
				{homeHeader}

			</div>
		);
	}
}

export default withRouter(Home);
