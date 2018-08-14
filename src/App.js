import React, { Component } from 'react';
// import * as movieService from './services/fakeMovieService';
import Table from './components/Table/Table';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    // console.log(this.state.movies);
    
    return (
      <Grid container spacin={24} justify='space-around' direction='row'>
        <Navbar />
        <Grid item xs={12}>
          <h2>Welcome To Our Store</h2>
        </Grid>
        <Grid item xs={6}>
          <Table />
        </Grid>
      </Grid>
    );
  }
}

export default App;
