import * as React from 'react';
import {Container} from './helpers';

export default class Mentorship extends React.Component {

  render() {
    return (<div>
    <Container
        header="Mentorship Program"
        subheader=""
        content="The Mentorship Program strives to bring ECE students of all class levels together to build connections with fellow students, alumni and professors. We host three program-wide events, three mini-group meetings and several one-on-one mentorship opportunities each quarter. The program encourages personal growth through professional workshops and guidance in academic and career paths."
        content2={
          <div style={{fontSize: '1.5rem', textAlign:'center'}}>
            Sign up for the Fall 2018 Mentorship Program {' '}
            <a href="https://goo.gl/forms/bF0mTqK3jEh4AI3c2">here!</a>
          </div>
        }/>
    </div>);
  }
}
