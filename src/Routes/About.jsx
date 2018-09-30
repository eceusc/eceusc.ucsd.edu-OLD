import * as React from 'react';
import {Button, Segment, Image, Grid} from 'semantic-ui-react';
import members from './members';

const MemberItemX = (props) => (
  <div style={{width: '100px', margin:'0 auto'}}>
    <Image src={props.pic} size={100} circular/>
    <div style={{textAlign:'center'}}>
      <div class="header">{props.name.split(' ')[0]}</div>
      <div class="meta">
        <span class="position">{props.position}</span>
      </div>
    </div>
  </div>);
  const MemberItem = (props) => (
  <div class="item">
    <div class="ui small image">
      <img src={props.pic}/>
    </div>
    <div class="content">
      <div class="header">{props.name}</div>
      <div class="meta">
        <span class="position">{props.position}</span>
      </div>
      <div class="description">
        <p>
          <div class="ui bulleted list">
            <div class="item">{props.major}</div>
          </div>
        </p>
      </div>
    </div>
  </div>);

//const MembersContainer = () => ();

export default class OpenSource extends React.Component {

  render() {
    return (
    <div class="ui grid">
      <div class="ui centered row">
        <h1 class="ui centered header">ECE Undergraduate Student Council
          <div class="ui divider" style={{marginTop:'.25rem', marginBottom:'.5rem'}}></div>
          <div class="ui sub header" style={{textTransform: 'none'}}>
            Serving and representing all ECE undergraduate students at UC San Diego
          </div>
        </h1>
        
      </div>
      
      <div class="ui row">
  
        <div class="three wide column">
        </div>
  
        <div class="ten wide column">
  
          <div class="ui row">
            <div class="ui centered header">About Us</div>
            {/*<img class="ui centered big image" src="/pics/eceusc17.jpg"/>*/}
            <Image
            src="/pics/eceusc17.jpg"
            centered
            size="big"/>
            <p style={{marginTop: '20px', marginBottom: '40px'}}>
              The ECE Undergraduate Student Council (ECE USC) is the voice of Electrical and Computer Engineering (ECE) students at UC San Diego. Through community building, networking, and leadership, the council strives to effect change within the department and campus at large though various events and programs.
            </p>
            <div class="ui divider"></div>
          </div>
  
          <div class="ui row">
          <div class="ui stackable two column grid">
              <div class="column">
                <div class="ui centered header">Executive</div>
                <div class="ui divider"></div>
                <div class="ui items">
                  {members.filter(m=>m.isExec).map(m=><MemberItem {...m}/> )}
                </div>
              </div>
              <div class="column">
                <div class="ui centered header">General</div>
                <div class="ui divider"></div>
                <div class="ui items">
                {members.filter(m=>!m.isExec).map(m=><MemberItem {...m}/> )}
                </div>
              </div>
            </div>
          </div>
  
        <div class="three wide column">
        </div>
  
      </div>
      </div>
      </div>
  );
  }
}
