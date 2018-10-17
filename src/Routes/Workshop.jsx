import * as React from 'react';
import {Container, importModule} from './helpers';
import members from './members';

import {Runtime, Inspector} from "@observablehq/notebook-runtime";
 
async function lol(rootRef) {
  const hmm = 'https://api.observablehq.com/d/a5e3db1f55655127.js';
  const nb = await importModule(hmm);
  //Runtime.load(nb.default, Inspector.into(rootRef.current));
  Runtime.load(nb.default, (cell) => {
    if(cell.name && cell.name.includes('_')) {
      const div = document.createElement("div");
      debugger;
      rootRef.current.appendChild(div);
      return new Inspector(div);
    }
  });
}


export default class Workshop extends React.Component {
  rootRef = React.createRef();
  componentDidMount() {
    lol(this.rootRef)
  }
  render() {
    return (
    <div style={{marginLeft:150, marginRight:150}}>
      <div ref={this.rootRef}/>
    </div>);
  }
}
