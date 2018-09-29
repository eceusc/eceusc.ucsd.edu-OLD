import * as React from 'react';
import {Segment, Image} from 'semantic-ui-react';
import members from './members';

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
export default class Home extends React.Component {
  render() {
    return (<div class="ui grid">
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
            <div class="ui centered header">'18-'19 Council</div>
  
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
          
            <div class="ui divider"></div>
          </div>
  
          
          <div class="ui row">
            <div class="ui centered header">Calendar</div>
            <div class="ui row">
              <div style={{textAlign:'center'}}>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?title=ECE%20USC%20Events&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=eceusc%40eng.ucsd.edu&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>
              </div>
            </div>
          </div>
          
        </div>
  
        <div class="three wide column">
        </div>
  
      </div>
      
      
  
    </div>);
  }
}
