import React, { Component } from "react";
import "./styles.css";
import SideBar from "./Components/SideBar";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const items = [
  { name: "project", label: "Project Proposal", path: "/ProjectProposal" },
  { name: "powerPoint", label: "PowerPoint" },
  { name: "contact", label: "Contact" }
];

function Company() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={ProjectProposal} />
        </Switch>
      </Router>
      <SideBar items={items} />
    </div>
  );
}

export default Company;

const ProjectProposal = () => <h1>ProjectProposal</h1>;
