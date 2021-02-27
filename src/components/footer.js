import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ToxicFX</h5>
            <p>
              Providing FiveM Server Owners with all the tools they need for a Better, More realistic Roleplay Experience.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Community</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://toxicfx.org/discord">Discord</a>
              </li>
              <li className="list-unstyled">
                <a href="https://toxicfx.org/github">Github</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://toxicfx.org"> ToxicFX </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
