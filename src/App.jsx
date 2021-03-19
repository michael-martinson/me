import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from "./Routes/Home";
import Resume from "./Routes/Resume";
import Projects from "./Routes/Projects";
import Tools from "./Routes/Tools";
import Security from './Routes/Security';
import Games from './Routes/Games';

class App extends Component {

  render() {
    return (
      <div id="App">
        <Header />
        <section id="main" className="">
          <Switch>
            <Route exact path={["/", "/me", "/home"]} component={Home} />
            <Route path="/resume" component={Resume} />
            {/* <Route path="/projects" component={Projects} /> */}
            <Route path="/tools" component={Tools} />
            <Route path="/security" component={Security} />
            <Route path="/games" component={Games} />
          </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

const Header = () => (
  <nav className="navbar">
    <Link className="navbar__navlink" to="/" >
      <i className="icofont-home navbar__icon"></i>
      <span className="navbar__text"> Home </span>
    </Link>
    <Link className="navbar__navlink" to="/resume" >
      <i className="icofont-paper navbar__icon"></i>
      <span className="navbar__text"> Resume </span>
    </Link>
    {/* <Link className="navbar__navlink" to="/projects" >
      <i className="icofont-unique-idea navbar__icon"></i>
      <span className="navbar__text"> Projects </span>
    </Link> */}
    <Link className="navbar__navlink" to="/tools" >
      <i className="icofont-unique-idea navbar__icon"></i>
      <span className="navbar__text"> Tools </span>
    </Link>
    <Link className="navbar__navlink" to="/security" >
      <i class="icofont-ssl-security navbar__icon"></i>
      <span className="navbar__text"> Security </span>
    </Link>
    <Link className="navbar__navlink" to="/games" >
      <i className="icofont-game-controller navbar__icon"></i>
      <span className="navbar__text"> Games </span>
    </Link>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <br/>
  </footer>
);


export default App;