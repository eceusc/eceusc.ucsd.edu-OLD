import * as React from 'react';
import {Container} from './helpers';
import members from './members';

export default class TownHalls extends React.Component {

  render() {
    return (<div>
      <Container
        header="Town Halls"
        subheader=""
        content="Through our quarterly Town Halls, students can give feedback about different aspects of the ECE curriculum, opportunities, and lifestyle in addition to desired changes. Students will have their voices heard from the ECE department chair himself, Professor Truong Nguyen, who has the ability to make a change in the ECE curriculum and student resources."
        contacts={[members[3]]}/>
    </div>);
  }
}
