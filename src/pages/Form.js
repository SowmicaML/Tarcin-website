import React, { Component } from "react";
import "../styles/contact.css";
// import axios from "axios";
import * as emailjs from "emailjs-com";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //handle change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //submit form
  handleSubmit = (e) => {
    e.preventDefault();
    // const { name, email, message } = this.state;

    // let templateParams = {
    //   from_name: email,
    //   to_name: "sowmicaml34@gmail.com",
    //   name: name,
    //   message_html: message,
    // };
    emailjs
      .sendForm("gmail", "tarcin", ".contactform", "user_HuuyfenYoy5JRPzcZ4TJY")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="container-fluid">
        <h2 style={{ textAlign: "center" }}>Write to us!</h2>
        <form onSubmit={this.handleSubmit.bind(this)} className="contactform">
          <div className="row pb-3">
            <label for="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="row pb-3">
            <label for="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="row pb-3">
            <label for="Textarea">Message</label>
            <textarea
              placeholder="Message"
              value={message}
              name="message"
              className="form-control"
              id="message"
              rows="3"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
