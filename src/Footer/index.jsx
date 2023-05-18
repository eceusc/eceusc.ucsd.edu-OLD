import * as React from "react";
import {Image} from "semantic-ui-react";
import "./footer.css"

export default class Footer extends React.Component {
  render() {
    return (

      <div className="footer fixed">
        <div>
        <Image src="/facebook_icon.svg" href="https://www.facebook.com/ECEUSC/"/>
        <Image src="/github_icon.svg" href="https://github.com/eceusc"/>
        <Image src="/instagram_icon.svg" href="https://www.instagram.com/eceusc_ucsd/"/>
        <Image src="/discord_icon.svg" href="https://discord.gg/cWUQpVA2j8"/>
        <Image src="/reddit_icon.svg" href="https://www.reddit.com/user/eceusc_ucsd"/>
        <Image src="/email_icon.svg" href="mailto:eceusc@eng.ucsd.edu"/>
        </div>
        
      </div>
    );
  }
}
