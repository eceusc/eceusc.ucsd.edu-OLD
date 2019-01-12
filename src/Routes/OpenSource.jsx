import * as React from 'react';
import {Container} from './helpers';
import members from './members';

export default class OpenSource extends React.Component {

  render() {
    return (<div>
    <Container
        header="Open Source"
        subheader=""
        content="The goal of the Open Source Program is to provide ECE students (who are more hardware orientated) with the software skills necessary to compete in an increasingly software growing industry. In this program, you will meet throughout the quarter (approx. bi-weekly) to attend workshops that will strengthen your programming and software skills, including (but not limited to) the Python programming language and using Git/GitHub. The workshops will also culminate with you completing a software project accessible in your own GitHub repository that can be shown off to employers on your resume."
        content2={
          <div style={{fontSize: '1.5rem', textAlign:'center', marginTop:'22px'}}>
            Sign up for the Winter 2019 Open Source Team{' '}
            <a href="https://goo.gl/forms/iK5SKlx7A76RLNxD2" target="_blank">here!</a>
          </div>
        }
        contacts={[members[2]]}/>
    </div>);
  }
}
