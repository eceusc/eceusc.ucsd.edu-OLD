import * as React from "react";
import { importModule } from "./helpers";

import { Runtime, Inspector } from "@observablehq/notebook-runtime";

async function lol(rootRef) {
  const hmm = "https://api.observablehq.com/d/b13729d5175112f6.js";
  const nb = await importModule(hmm);
  Runtime.load(nb.default, cell => {
    const div = document.createElement("div");
    rootRef.current.appendChild(div);
    return new Inspector(div);
  });
}

export default class Workshop2 extends React.Component {
  rootRef = React.createRef();
  componentDidMount() {
    lol(this.rootRef);
  }
  render() {
    return (
      <div style={{ margin: "auto 10%" }}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@observablehq/notebook-inspector@1/dist/notebook-inspector-style.css"
        />
        <div ref={this.rootRef} />
      </div>
    );
  }
}
