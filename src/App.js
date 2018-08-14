import React, { Component } from 'react';
// import * as movieService from './services/fakeMovieService';
import Table from './components/Table/Table';

class App extends Component {

  render() {
    // console.log(this.state.movies);
    
    return (
      <div className="container">
        <div className='row'>
          <div className='col-12'>
            <h2>Welcome To Our Store</h2>
          </div>
          <div className='col-12'>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
