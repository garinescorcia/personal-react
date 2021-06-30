// import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home.js';
import { About } from './About/About.js';
import { Contact } from './Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />            
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>        
      </React.Fragment>
    );
  }
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"          
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
