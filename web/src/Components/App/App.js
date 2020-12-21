import "./App.css";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    fetch(this.state.basePath + 'api/alertmanager/routes/nacho')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      .catch(function() {
        console.log("error");
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
      <Router>
        <Container maxWidth="xl" className="App">
          <Paper>
            <Typography variant="h4" component="h1" gutterBottom>
              Alert Manager Routings
            </Typography>
            <Menu />
            <Switch>
              <Route path="/">
                <Routing rawTree={items} width={1100} height={1600} />
              </Route>
            </Switch>
          </Paper>
        </Container>
      </Router>
    );
  }
}

export default App;
