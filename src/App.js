import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import UserHoliday from "./components/UserHoliday"
import User from './components/User';


import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 3500);
  }
  render() {

    return (

      <div className="container mt-3">
        <Navbar />
        <hr></hr>
        {!this.state.done ? (
          <div className="d-flex justify-content-center">
          <ReactLoading type={"bars"} color={"Black"} height={850} width={500}/>
       </div> ) : (
            <div className="row">
              <User name="Pazartesi" time1="08:00" time2="18:00" />
              <User name="Salı" time1="08:00" time2="18:00" />
              <User name="Çarşamba" time1="08:00" time2="18:00" />
              <User name="Perşembe" time1="08:00" time2="18:00" />
              <User name="Cuma" time1="08:00" time2="18:00" />


              <UserHoliday name="Cumartesi" />
              <UserHoliday name="Pazar" />
            </div>
          )}

      </div>

    );
  }
}

export default App;



