import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import Navbar from 'react-bootstrap/Navbar'

import logo from 'https://images-ext-1.discordapp.net/external/rw_Bu3MBfmLr5wy_mZjv0uRTXR-k1s-e5h9eQdAZA_4/https/cdn.discordapp.com/icons/758641373074423808/835e5251e11a32f8c0acd58287eb43da.webp'

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Infinity Bots Applications"
          meta={[
            { name: "description", content: "Interested in Apllying for the Team, Reporting a bug or anything else of that nature? You can do so here." },
            { name: "keywords", content: "infinitybots, top.gg" },
          ]}
        />   
        <div
          style={{
            background: `#16151D `,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
          <img src={logo} alt="Logo"/>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Infinity Bots
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
