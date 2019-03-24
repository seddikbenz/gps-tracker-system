import React from "react";
import { Route } from "react-router-dom";

import Links from "../../components/Links";
import Container from "../../components/Container";

import All from "./All";

const links = [
  {
    name: "Tous les enterprises",
    url: "/companies"
  },
  {
    name: "Ajouter une enterprise",
    url: "/companies/add"
  }
];

const Companies = () => (
  <Container title="Gestion des enterprises">
    <Links links={links} />
    <Route path="/companies" component={All} exact />
  </Container>
);

export default Companies;
