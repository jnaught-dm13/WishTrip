import React, { Component } from "react";
import "./Profile.css";
import "w3-css/w3.css";

import { connect } from "react-redux";
import { userLogin } from "../../ducks/userReducer";
import { auth } from "../../firebase";

class Profile extends Component {
  state = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    userID: (auth.currentUser ? auth.currentUser.uid : "")
  };

  handleUserInput = (state, e) => {
    this.setState({ [state]: e.target.value });
  };

  render() {
    const { username, email, firstName, lastName, userID } = this.state;

    return (
      <div className="profile-container">
        <div className="profile-wrapper">
          Profile
          <form>
            <input
              value={this.state.username}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "135px" }}
              placeholder="Username"
              onChange={e => this.handleUserInput("username", e)}
            />
            <input
              value={this.state.email}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "135px" }}
              placeholder="Email"
              onChange={e => this.handleUserInput("email", e)}
            />
            <input
              value={this.state.firstName}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "135px" }}
              placeholder="First Name"
              onChange={e => this.handleUserInput("firstName", e)}
            />
            <input
              value={this.state.lastName}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "135px" }}
              placeholder="Last Name"
              onChange={e => this.handleUserInput("lastName", e)}
            />
            <button
              onClick={() => {
                this.props.userLogin(username, email, firstName, lastName, userID);
                this.setState({
                  username: "",
                  email: "",
                  firstName: "",
                  lastName: "",
                  userID: auth.currentUser.uid || ""
                });
              }}
            >
              Submit Profile
            </button>
          </form>
          <div className="profile-trip-codes">
            <div> Trip Codes </div>
            <div className="profile-tripname-code">
              <div>Trip Name</div>
              <div>Code</div>
            </div>
          </div>
          Previous Trips
          <div className="profile-previous-trips">
            <div>Trip Name</div>
            <div>Trip duration</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.userReducer };
};

export default connect(mapStateToProps, { userLogin })(Profile);
