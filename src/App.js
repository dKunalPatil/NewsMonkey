import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import New from './components/New';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><New setProgress={this.setProgress} apiKey={this.apiKey} key="genereal" country="in" pageSize={this.pageSize} category="general" /></Route>
          <Route exact path="/business"><New setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" pageSize={this.pageSize} category="business" /></Route>
          <Route exact path="/entertainment"><New setProgress={this.setProgress} apiKey={this.apiKey} key="entertaiment" country="in" pageSize={this.pageSize} category="entertainment" /></Route>
          <Route exact path="/general"><New setProgress={this.setProgress} apiKey={this.apiKey} key="genereal" country="in" pageSize={this.pageSize} category="general" /></Route>
          <Route exact path="/health"><New setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" pageSize={this.pageSize} category="health" /></Route>
          <Route exact path="/science"><New setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" pageSize={this.pageSize} category="science" /></Route>
          <Route exact path="/sports"><New setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" pageSize={this.pageSize} category="sports" /></Route>
          <Route exact path="/technology"><New setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" pageSize={this.pageSize} category="technology" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
