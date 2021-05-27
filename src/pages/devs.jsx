import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'white' }}>Dev Team Application</h1>
        <form
          name="devs"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Application" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Discord Username | Ex: ToxicDev#0001:<br />
              <input type="text" name="Discord Username" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What Coding Languages do you know Best (Javascript, Python etc):<br />
              <textarea name="Preffered Coding Langs" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do you have any Development Experience?:<br />
              <textarea name="Development Experience" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do you have any Experience using a Mongoose (Mongo) Database?:<br />
              <textarea name="Experience with Mongo" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do you have any Experience using Express and Node?:<br />
              <textarea name="Experience with Express and Node" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Are you Comfortable with being apart of Multiple GC or Voice Calls regarding the Develolment Progress?:<br />
              <textarea name="Agree to Voice Call Meetings" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Have you Read and Understand our <a href="https://infinitybotlist.com/legal">T.O.S</a> and Privacy Policy?:<br />
              <textarea name="Agree to our Terms and Privacy" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Are you Willing and Ready to sign a NDA (Non-Disclosure Agreement):<br />
              <textarea name="Agree to Sign NDA" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
