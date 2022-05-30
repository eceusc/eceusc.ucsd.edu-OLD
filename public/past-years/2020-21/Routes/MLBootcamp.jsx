import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class ProjectTeam extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Winter 2021 ML Bootcamp"
          subheader=""
          
          content={
            <div 
              style={{
                fontSize: "1.0rem",
                textAlign: "center"
              }}
            >
              <p>
                The Project Program has revamped their plan this winter 21 quarter.
                Instead we'll be hosting a biweekly ML bootcamp! Join un on the odd
                weeks, Thursday, 2-3pm PST. This bootcamp is designed to be beginner-friendly
                so those without any ML experience are welcome.
              </p>
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                <div class="ui divider" />
                Previous Bootcamp Sessions
              </div>
              <div class="ui centered header" 
                style={{
                  fontSize: "1.0rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                January 21st, Introduction to ML
                <br></br>
                <a
                href="https://drive.google.com/file/d/1gMnFRSi0vj2ZgT1FXUsTjKPh2BKiXw8i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Video 
                </a><br></br>
                <a
                href="https://docs.google.com/presentation/d/1yso05WGkqqGNo2k8dD0srbm04j4uis2HZR7xpzDlZc0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                Slides  
                </a><br></br>
                <a
                href="https://forms.gle/iKpChzU8LaY1UR2P6"
                target="_blank"
                rel="noopener noreferrer"
                >
                Quiz
                </a>
                
                <br></br>
                <br></br>
                February 4th, Linear Regression
                <br></br>
                <a
                href="https://drive.google.com/file/d/1kLJovQItkE5Iqni6KlN2crZ2oGP6dBv8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Video 
                </a><br></br>
                <a
                href="https://docs.google.com/presentation/d/1ufB8eFELNOFpPT7Y6wD28_24dtvUcZptO8W3Xxnrq6Q/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                Slides  
                </a><br></br>
                <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfu2x0UoWJ0XjX2lbdpbH-pMsXiId37M3FQaOIQbAvRQHzTUQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                >
                Quiz
                </a><br></br>
                <a
                href="https://colab.research.google.com/drive/1yWMqJqP9b8vlaP4NXw6uRzf94qt2phwc?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Exercise
                </a><br></br>
                <a
                href="https://colab.research.google.com/drive/1MNj--ddmQ13ZFRJcamzbTjB1hQJhqKw6?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Exercise Solution
                </a>

                <br></br>
                <br></br>
                
              </div>

            </div>
          }
          
          contacts={[members[10]]}
        />
      </div>
    );
  }
}
