// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";
// import { process_params } from 'express/lib/router';



export default class App extends Component {
  // static propTypes = {second: third}
  // apiKey=process.env.REACT_APP_API_KEY;
  apiKey=process.env.REACT_APP_API_KEY;
 
  

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
              <Routes>
                <Route exact path="/" element={<News  key="general" country="in" apiKey={this.apiKey} category="General" />}/>
                <Route exact path="/business" element={<News  key="business" country="in" apiKey={this.apiKey} category="Business" />}/>
                <Route exact path="/entertainment" element={<News  key="entertainment" country="in" apiKey={this.apiKey} category="Entertainment" />}/>
                <Route exact path="/health" element={<News  key="health" country="in" apiKey={this.apiKey} category="Health" />}/>
                <Route exact path="/science" element={<News  key="science" country="in" apiKey={this.apiKey} category="Science" />}/>
                <Route exact path="/sports" element={<News  key="sports" country="in" apiKey={this.apiKey} category="Sports" />}/>
                <Route exact path="/technology" element={<News  key="technology" country="in" apiKey={this.apiKey} category="Technology" />}/>
              </Routes>
          
        </Router>
        
      </div>
    )
  }
}
