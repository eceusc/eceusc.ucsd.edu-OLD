import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class StudyJams extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Study Jams"
          subheader=""
          content="During midterm season and finals week, our Study Jams create an environment that promotes learning. Whether working independently or with a group, the ECE Undergraduate Student Council works to ensure that ECE students will have a place to study during these intense times. These programs will also include the refreshments/light snacks necessary to keep on studying.
          "
          contacts={[members[4]]}
        />
      </div>
    );
  }
}
