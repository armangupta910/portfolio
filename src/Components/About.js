import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inline CSS */}
        <style jsx>{`
          .profile-pic {
            width: 250px !important; /* Force width */
            height: auto !important; /* Maintain aspect ratio */
            border-radius: 50%; /* Optional: Keeps it circular */
            border: 3px solid #ddd; /* Optional: Adds a border for styling */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Adds shadow */
          }

          .three.columns {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </section>
    );
  }
}

export default About;
