import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Image } from "semantic-ui-react";

export default class Technical extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Technical Events"
          subheader=""
          content={
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  lineHeight: "1.75rem"                  
                }}
              >
              The technical committee works to ensure ECE students have relevant technical skills for industry. 
              While ECE classes may cover academic and theoretical topics, ECE USC’s technical committee emphasizes hands-on learning through fun workshops and quarter long projects. 
              With topics on Arduino and basic circuit building, as well as Python and machine learning, these workshops cover the foundations of what it takes to be an industry-relevant engineer.
              </div>
          }
          content2={
            <div style={{textAlign: "center", margin: "10px"}}>
                <img src='/pics/TechnicalPic2.JPG' style={{width: "45%", margin: "10px"}}/>    
                <img src='/pics/projectTeamPic.jpg' style={{width: "45%", margin: "10px"}}/>
            </div>
          }
          
          contacts={[members[12]]}
        />
      </div>
    );
  }
}
