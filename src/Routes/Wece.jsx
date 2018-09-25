import * as React from 'react';
import {Container} from './helpers';
import members from './members';

export default class Wece extends React.Component {

  render() {
    return (<div>
      <Container
        header="Women in ECE"
        subheader=""
        content="Women in ECE (WECE) is dedicated to supporting and connecting women of all levels (undergrad, grad, faculty) within the Electrical and Computer Engineering department at UCSD. We strive to bring together an underrepresented community of the field by hosting professional, social, technical, and outreach events."
        content2={
          <div style={{fontSize: '1.2rem', textAlign:'center'}}>
            Sign up for Women in ECE {' '}
            <a href="https://goo.gl/forms/Gznmr4e3vtRpW2FP2" target="_blank">here!</a>
          </div>
        }
        contacts={[members[9], members[4]]}/>
    </div>);
  }
}
