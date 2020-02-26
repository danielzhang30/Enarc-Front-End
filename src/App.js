import React from "react";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";
import Nav from "./Components/Nav";
import Company from "./Company";
import University from "./University";
import UniLogin from "./UniLogin";
import CompanyLogin from "./CompanyLogin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/companylogin" component={CompanyLogin} />
          <Route path="/universitylogin" exact component={UniLogin} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div className="backgroundHome">
    <AppBar style={{ background: "#BF5D1C" }}>
      <Toolbar>
        <img
          src={"/assets/Temoc_Secondary_Orange.png"}
          className="Temoc"
          alt="temoc"
        />
      </Toolbar>
    </AppBar>
    <Grid container className="App-header">
      <img
        src={"/assets/ut-dallas-logo02.png"}
        className="utdlogo"
        alt="UTD Logo"
      />
      <div>
        <Link to="/companylogin">
          <Button className="compbtn" variant="contained">
            Company
          </Button>
        </Link>
        <Link to="/universitylogin">
          <Button className="unibtn" variant="contained">
            University
          </Button>
        </Link>
      </div>
    </Grid>
    <h1>UTDesign Capstone Project</h1>
    <p>
      Through UTDesign Capstone, companies have the ability to extend their
      resources and partner with teams of talented seniors from the Erik Jonsson
      School of Engineering and Computer Science. Through corporate sponsors,
      these students are given the opportunity to solve real world problems in
      new and innovative ways.
    </p>
  </div>
);
