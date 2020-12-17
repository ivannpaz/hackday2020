import "./App.css"

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

// import Routing from '../Routing/Routing'
import Demo from '../Demo/Demo'

function App() {
  return (
    <Container maxWidth="xl" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Alert Manager Routings
        </Typography>

        <Demo />

      </Paper>
    </Container>
  );
}

export default App;
