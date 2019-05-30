import React, { Component } from 'react';
import logo from './logo.svg';
import '../src/styles/App.scss';

class App extends Component {

  //set the state to store all the jobs
  state = {
    jobs:[]
  }

  render(){
  const pageTitle = "List of the 5 most payed professions";
  const pageSubTitle = "Based on this "
  const article = "article";
  const salary = "Salary";
  const serveyTitle = "Before you go, little servey..."
  const whatIsYours ="What is your job?";
  const submit ="Submit results";
    return (

  <div className="app">
        <div className="appContainer">
          <header className="app-header">
            <h1>{pageTitle}</h1>
            <h2>{pageSubTitle}<a href="https://www.glassdoor.com/blog/highest-paying-jobs-2018">{article}</a></h2>
          </header>
          <section className="app-body">
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
            <div className="app-body-content">
              <h1>Title</h1>
              <div>{salary}: 35$/h</div>
            </div>
          </section>

          <div className="app-servey">
            <h1>{serveyTitle}</h1>
            <div className="app-servey-content">
              <label>{whatIsYours}</label>
              <input/>
              <button className="app-servey-content-button">{submit}</button>
            </div>
          </div>
        </div>
    </div>  
    );
  }
}



export default App;
