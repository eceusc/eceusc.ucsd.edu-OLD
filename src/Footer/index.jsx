import * as React from "react";
import {Image} from "semantic-ui-react";
import "./footer.css"

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: "fixed",
      bottom: "0px",
      width:"100%",
      padding: "0.5rem",
      backgroundColor: "#1a1a1a",
      display: "flex",
      justifyContent: "space-between"
    };
    const textStyle = {
      color: "#e2e2e2"
    };
    return (

      <div style={footerStyle}>
        <div>
        <Image src="/facebook_icon.svg" href="https://www.facebook.com/ECEUSC/"/>
        <Image src="/github_icon.svg" href="https://github.com/eceusc"/>
        <Image src="/instagram_icon.svg" href="https://www.instagram.com/eceusc_ucsd/"/>
        <Image src="/discord_icon.svg" href="https://discord.gg/cWUQpVA2j8"/>
        <Image src="/reddit_icon.svg" href="https://www.reddit.com/user/eceusc_ucsd"/>
        </div>
        <div style={textStyle}>
          Have any questions?<br></br>
          Contact us <br></br>
          at eceusc@eng.ucsd.edu

        </div>
      </div>
    );
  }
}
