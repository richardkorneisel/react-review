import './Results.css';
import ResultsHeader from './ResultsHeader'
import ResultsList from './ResultsList'

function Results() {
    return (
      <div>
      <ResultsHeader/>
      <ResultsList/>
      </div>
    );
  }
  
  export default Results;


// import React, {Component} from 'react';
// import {render} from 'react-dom';
// import {Route, Link, Switch, Redirect} from 'react-router-dom';

// class Results extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this.props)
//         const allResults = this.props.data.map((results, index) => {
//             return <div className='results'><img src={process.env.PUBLIC_URL + '/images/' + results.image ></img><br />
//         ${results.cost} {results.title}</div>
//         })

//         return (
//             <div>
//                 <h1>Results</h1>
//                 <div className="container">
//                     {allResults}
//                 </div>
//             </div>
//         )
//     }
// }