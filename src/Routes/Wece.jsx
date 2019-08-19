import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class Wece extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Women in ECE"
          subheader=""
          content="Women in ECE (WECE) is dedicated to supporting and connecting women
          of all levels (undergrad, grad, faculty) within the Electrical and Computer
          Engineering department at UCSD. We strive to bring together an underrepresented
          community of the field by hosting social, professional, and outreach events."
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              Sign up for the 2019-2020 Women in ECE Program{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOrDY6GsYlaGInp5PLsSius9GKLWqsYFgsC23ugnTGox8EFA/viewform
"
                target="_blank"
              >
                here
              </a>
              !
            </div>
          }
          contacts={[members[2], members[1]]}
        />
      </div>
    );
  }
}
