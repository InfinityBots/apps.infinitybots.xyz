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
         <h1 style={{ color: 'white' }}>Staff Application</h1>
         <form
           name="staff"
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
           <div class="staff_apps_card">
            <h2> Application Status:</h2>
           <hr />
           <div class="alert">
            <strong>Staff Applications are Currently Closed, Thank you everyone who applied!</strong>.
           </div>
           <br />
           <p style={{ color: 'white' }}>
             <label>
               Your Discord Username | Ex: ToxicDev#0001:<br />
               <input type="text" name="Discord Username" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               Your Discord ID (For the Panel):<br />
               <textarea name="Discord ID" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               Do you have any experience in Moderation / Testing Bots? If so please explain:<br />
               <textarea name="Do you have any experience in Moderating or Testing Bots?" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               How would you handle someone Nuking or Raiding the server:<br />
               <textarea name="How would you handle a Nuke or Raid" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               How would you handle someone Targetting or Harassing Members?:<br />
               <textarea name="How would you handle Harrasment" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               Do you agree to Sign and be Bound to our NDA (Non-Disclosure Agreement)?:<br />
               <textarea name="Do you agree to Sign a NDA?" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               What are you more interested in Approving Bots or just Moderating the Server?:<br />
               <textarea name="Approver or Mod?" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p style={{ color: 'white' }}>
             <label>
               Have you read and understand our Rules and Guidelines?:<br />
               <textarea name="Agree to our Rules?" style={{ width: '75%' }} onChange={this.handleChange} disabled />
             </label>
           </p>
           <p>
             <button type="submit" disabled>Send</button>
           </p>
         </form>
       </div>
     );
   }
 }
