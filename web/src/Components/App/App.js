import "./App.css";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'fontsource-roboto';

import Routing from "../Routing/Routing";
import Menu from "../Menu/Menu";

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isError: false,
      basePath: props.basePath,
    }
  }

  componentDidMount() {
    this.fecthData()
  }

  fecthData() {
    fetch(this.state.basePath + 'api/alertmanager/routes/prd')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      .catch(function(error) {
        console.log("error", error);
    })
  }

  render() {
    var { isLoaded, isError, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error fetching data...</div>
    }

    return (
      <Container maxWidth="xl" xs={12} className="App">
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                Alert Manager Routings
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Menu />
            </Grid>
            <Grid item xs={8}>
              <Paper>
                <Router>
                  <Switch>
                    <Route path="/">
                      <Routing rawTree={items} width={1100} height={1600} />
                    </Route>
                  </Switch>
                </Router>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                SideBar
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default App;
