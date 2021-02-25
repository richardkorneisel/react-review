import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './Resultsheader.css';
import Resultsheader from './Resultsheader'
class Results extends Component {
    render() {
        console.log('results  ', this.props.saleItems[1])
        const imageList = this.props.saleItems.map((results, index) => {
            return <div className='results'><img src={process.env.PUBLIC_URL + '/images/' + results.image}></img><br />
            ${results.cost} ${results.title}
            </div>
        }
        )
        return (
            <div>
                <div class='resultheader'>
                    <Resultsheader />
                </div>
                <div class='container'>
                    <h1>Results List</h1>
                    {imageList}
                </div>
            </div>
        )
    }
}
export default Results

// Next Page
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './data.json'
import {
    BrowserRouter as Router
} from "react-router-dom"ReactDOM.render(
    <Router>
        <App saleItems={data} />
    </Router>,
    document.getElementById('root')
);// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();