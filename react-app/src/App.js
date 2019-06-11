import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddRecord from './components/RecordComponents/AddRecord';
import RecordsList from './components/RecordComponents/RecordsList';
import {Provider} from "react-redux";
import store from "./store";
import AddPatient from './components/PatientComponents/AddPatient';

class App extends Component {
  render() {
    return(
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={UserList}/>
          <Route exact path="/addRecord/:pt_id" component={AddRecord}/>
          <Route exact path="/addPatient" component={AddPatient}/>
          <Route exact path="/records/:pt_id" component={RecordsList}/>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;