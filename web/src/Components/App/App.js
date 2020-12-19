import "./App.css";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

import Routing from "../Routing/Routing";

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isError: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/alertmanager')
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
      <Container maxWidth="xl" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Alert Manager Routings
          </Typography>

          <Routing rawTree={items} width={1100} height={1600} />
        </Paper>
      </Container>
    );
  }
}

export default App;
