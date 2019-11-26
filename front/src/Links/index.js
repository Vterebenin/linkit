import React from "react";
import Home from '../Home'
import LinkList from './LinkList'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import {
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <Switch>
        <Route path="/links">
          <div className={classes.gridRoot}>

            <Grid container>
              <Grid item xs={6}>Links list</Grid>
              <Grid item xs={4}>search:213</Grid>
            </Grid>
          </div>

          <LinkList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}



