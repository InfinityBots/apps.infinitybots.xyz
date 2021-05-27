import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../css/custom.tachyons.css';


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <p style={{ color: 'white' }}>
          If you're interested in Aplying to be a member of our team, Appeal a ban or anything else you're in the right place, Please choose from one of the Forms Below
        </p>
        <ul>
          <li style={{ color: '#8A6AFD' }}><Link href="https://appeals.botlist.site" style={{ color: '#00B0E1' }}>Ban Appeals</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/staff/" style={{ color: '#00B0E1' }}>Staff Applications</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/devs/" style={{ color: '#00B0E1' }}>Dev Applications</Link></li>
        </ul>
      </div>
    );
  }
}
