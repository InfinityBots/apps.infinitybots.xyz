import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import Navbar from 'react-bootstrap/Navbar'

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="ToxicFX Forms"
          meta={[
            { name: "description", content: "Interested in Apllying for the Team, Reporting a bug or anything else of that nature? You can do so here." },
            { name: "keywords", content: "sample, something" },
            { property: "og:image", href: "https://toxicfx.org/images/TFX-Transparent.png" },
          ]}
        />   
        <div
          style={{
            background: `#0A122A`,
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
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ToxicFX Forms
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
