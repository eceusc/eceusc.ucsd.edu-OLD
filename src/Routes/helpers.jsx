import * as React from 'react';
import {Grid, Header} from 'semantic-ui-react';

export const Container = (props) =>  (
  <Grid>
    <Grid.Row centered>
      <Header as="h1">
        {props.header}
        <Header.Subheader style={{textTransform: 'none'}}>
          {props.subheader}
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={10}>
        {props.content}
        {(props.content2) ? props.content2 : null}
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid.Row>
    
  </Grid>
)