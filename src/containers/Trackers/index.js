import React from "react";
import {Route} from "react-router-dom";

import Links from "../../components/Links";
import Container from "../../components/Container";

import All from "./All";
import Add from "./Add";
import Edit from "./Edit";

const links = [
  {
    name: "Tous les trackeurs",
    url: "/trackers",
    show: true
  },
  {
    name: "Ajouter un trackeur",
    url: "/trackers/add",
    show: true
  }
];

const Trackers = () => (
  <Container title="Gestion des trackeurs">
    <Links links={links} />
    <Route path="/trackers" component={All} exact/>
    <Route path="/trackers/add" component={Add} exact/>
    <Route path="/trackers/edit/:id" component={Edit}/>
  </Container>
)

export default Trackers
