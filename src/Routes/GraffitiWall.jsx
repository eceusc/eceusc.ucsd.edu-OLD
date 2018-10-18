import * as React from 'react';
import {Container, importModule} from './helpers';
import members from './members';

import {Runtime, Inspector} from "@observablehq/notebook-runtime";
 
async function lol(rootRef) {
  const hmm = 'https://api.observablehq.com/@asg017/graffiti-wall.js';
  const nb = await importModule(hmm);
  Runtime.load(nb.default, (cell) => {
    if(cell.name ==='wall') {
      const div = document.createElement("div");
      rootRef.current.appendChild(div);
      return new Inspector(div);
    }
  });
}


export default class GraffitiWall extends React.Component {
  rootRef = React.createRef();
  componentDidMount() {
    lol(this.rootRef)
  }
  render() {
    return (
      <div style={{backgroundColor: '#582A72',width:'100%',height:'100vh'}} ref={this.rootRef}/>
      )
  }
}
