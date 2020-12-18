import "./App.css";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

// import Routing from '../Routing/Routing'
import Routing from "../Routing/Routing";

const data = {
  name: "Root node",
  children: [
    {
      name: "Step 1",
      children: [
        { name: "A1" },
        { name: "A2" },
        { name: "A3" },
        {
          name: "C",
          children: [
            {
              name: "C1",
            },
            {
              name: "D",
              children: [
                {
                  name: "D1",
                },
                {
                  name: "D2",
                },
                {
                  name: "D3",
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "Z" },
    {
      name: "B",
      children: [{ name: "B1" }, { name: "B2" }, { name: "B3" }],
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    var { isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    const getJsonIndented = (obj) => JSON.stringify(items, null, 4).replace(/["{[,}\]]/g, "")

    const JSONDisplayer = ({children}) => (
        <div>
            <pre>{getJsonIndented(children)}</pre>
        </div>
    )

    return (
      <Container maxWidth="xl" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Alert Manager Routings
          </Typography>

          <Routing rawTree={data} width={1200} height={600} />

          <JSONDisplayer>{items}</JSONDisplayer>
        </Paper>
      </Container>
    );
  }
}

export default App;
