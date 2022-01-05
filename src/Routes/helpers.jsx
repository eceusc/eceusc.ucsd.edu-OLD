import * as React from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import "./Route.css"

export const hideEmail = email => {
  return email
    .split("")
    .map(c => c.charCodeAt(0))
    .map(c => String.fromCharCode(c))
    .join("");
};
export const getEmail = hiddenEmail =>
  hiddenEmail
    .split("")
    .map(c => String.fromCharCode(c.charCodeAt(0)))
    .join("");

export const Container = props => (
  <Grid>
    <Grid.Row centered>
      <Header as="h1">
        {props.header}
        <Header.Subheader style={{ textTransform: "none" }}>
          {props.subheader}
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3} />
      <Grid.Column width={10}>
        {props.content}
        {props.content2 ? props.content2 : null}
        {props.content3 ? props.content3 : null}
        {props.contacts ? (
          <div style={{ marginTop: 60 }}>
            <Header as="h3">Questions or ideas?</Header>
            <Item.Group>
              {props.contacts.map(c => (
                <Item>
                  <Item.Image size="tiny" src={c.pic} circular />

                  <Item.Content>
                    <Item.Header as="a">{c.name}</Item.Header>
                    <Item.Meta>{c.position}</Item.Meta>
                    <Item.Description>
                      <a
                        href={`mailto:${getEmail(c.email)}`}
                        style={{ fontSize: ".8rem" }}
                      >
                        {getEmail(c.email)}
                      </a>
                    </Item.Description>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </div>
        ) : null}
      </Grid.Column>
      <Grid.Column width={3} />
    </Grid.Row>
  </Grid>
);

//https://github.com/uupaa/dynamic-import-polyfill/blob/master/importModule.js
function toAbsoluteURL(url) {
  const a = document.createElement("a");
  a.setAttribute("href", url); // <a href="hoge.html">
  return a.cloneNode(false).href; // -> "http://example.com/hoge.html"
}

export function importModule(url) {
  return new Promise((resolve, reject) => {
    const vector =
      "$importModule$" +
      Math.random()
        .toString(32)
        .slice(2);
    const script = document.createElement("script");
    const destructor = () => {
      delete window[vector];
      script.onerror = null;
      script.onload = null;
      script.remove();
      URL.revokeObjectURL(script.src);
      script.src = "";
    };
    script.defer = "defer";
    script.type = "module";
    script.onerror = () => {
      reject(new Error(`Failed to import: ${url}`));
      destructor();
    };
    script.onload = () => {
      resolve(window[vector]);
      destructor();
    };
    const absURL = toAbsoluteURL(url);
    const loader = `import * as m from "${absURL}"; window.${vector} = m;`; // export Module
    const blob = new Blob([loader], { type: "text/javascript" });
    script.src = URL.createObjectURL(blob);

    document.head.appendChild(script);
  });
}
