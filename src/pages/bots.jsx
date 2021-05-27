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
        <h1 style={{ color: 'white' }}>Staff Bot Application</h1>
        <form
          name="bots"
          method="post"
          action="/success"
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
              Your Bots Name and ID | Ex: Infinity#0001 (123456789102):<br />
              <input type="text" name="Bot Name" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What does your bot do, How many servers is it in etc:<br />
              <textarea name="Description" style={{ width: '75%' }} onChange={this.handleChange} required />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why should your bot be added as a Staff Bot?:<br />
              <textarea name="Reason" style={{ width: '75%' }} onChange={this.handleChange} required />
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
