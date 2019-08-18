import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class DeStress extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="dEEstressers"
          subheader=""
          content="ECE is a stressful major, therefore we host our dEEstresser events where we invite all ECE students and faculties to come and socialize while making some ECE-related mini projects such as decorating their own USB, making an Ethernet cable, making a motor car, etc… Students can temporarily leave behind stressful thoughts, simply have fun and socialize through some activities and snacks! 
        "
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
