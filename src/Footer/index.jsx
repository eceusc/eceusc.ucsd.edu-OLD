import * as React from "react";
import {Image} from "semantic-ui-react";
import "./footer.css"

export default class Footer extends React.Component {
  render() {
    return (

      <div className="footer fixed">
        <div>
        <Image src="/instagram_icon.svg" href="https://www.instagram.com/eceusc_ucsd/"/>
        <Image src="/discord_icon.svg" href="https://discord.gg/cWUQpVA2j8"/>
        {/* <Image src="/linkedin_icon.svg" href="https://www.linkedin.com/company/ece-usc-ucsd/"/> */}
        <Image src="/email_icon.svg" href="mailto:eceusc@eng.ucsd.edu"/>
        </div>
        
      </div>
    );
  }
}
