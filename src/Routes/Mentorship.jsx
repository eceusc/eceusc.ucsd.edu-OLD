import * as React from 'react';
import {Container} from './helpers';
import members from './members';

export default class Mentorship extends React.Component {

  render() {
    return (<div>
    <Container
        header="Mentorship Program"
        subheader=""
        content="The Mentorship Program strives to bring ECE students of all class levels together to build connections with fellow students, alumni and professors. We host three program-wide events, three mini-group meetings and several one-on-one mentorship opportunities each quarter. The program encourages personal growth through professional workshops and guidance in academic and career paths."
        content2={
          <div style={{fontSize: '1.5rem', textAlign:'center'}}>
            Sign up for the Winter 2019 Mentorship Program {' '}
            <a href="https://goo.gl/forms/Rdx6kjTDsOwXdD4H2" target="_blank">here!</a>
          </div>
        }
        contacts={[members[5]]}/>
    </div>);
  }
}
