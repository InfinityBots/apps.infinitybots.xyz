import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../css/custom.tachyons.css';


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'white' }}>Hello Everyone!</h1>
        <p style={{ color: 'white' }}>
          If you're interested in Aplying to be a member of our team, Reporting a bug or anything else you're in the right place, Please choose from one of the Forms Below
        </p>
        <ul>
          <li style={{ color: 'white' }}><Link to="/bugs/" style={{ color: '#00B0E1' }}>Bug Reports</Link></li>
          <li style={{ color: 'white' }}><Link to="/application/" style={{ color: '#00B0E1' }}>Staff/Team Applications</Link></li>
          <li style={{ color: 'white' }}><Link to="/request/" style={{ color: '#00B0E1' }}>Feature Request</Link></li>
        </ul>
      </div>
    );
  }
}
