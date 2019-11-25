import React from "react";
import Home from '../Home'
import LinkList from './LinkList'
import {Grid} from '@material-ui/core'
import {
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/links">

          <Grid container>
            <Grid md={6}>Links list</Grid>
            <Grid md={2}/>
            <Grid md={4}>
              search:213
            </Grid>
          </Grid>
          <LinkList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}



