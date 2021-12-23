import * as React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      marginTop: 15,
      right: 0,
      bottom: 0,
      left: 0,
      padding: "1rem",
      backgroundColor: "#111",
      textAlign: "center"
    };
    return (
      <div style={footerStyle}>
        <a
          className="ui circular icon button"
          data-tooltip="Find us on Facebook!"
          href="https://www.facebook.com/ECEUSC/"
        >
          <i className="facebook f icon"></i>
        </a>
        <a
          className="ui circular icon button"
          data-tooltip="ECEUSC Github"
          href="https://github.com/eceusc"
        >
          <i className="github icon"></i>
        </a>
        <a
          className="ui circular icon button"
          data-tooltip="Previous ECEUSC Websites!"
          href="/past-years/index.html"
        >
          <i className="fast backward icon"></i>
        </a>
      </div>
    );
  }
}
