import React from "react";
import { Route } from "react-router-dom";

import Links from "../../components/Links";
import Container from "../../components/Container";

import All from "./All";
import Add from "./Add";
import Edit from "./Edit";

const links = [
  {
    name: "Tous les utilisateur",
    url: "/users",
    show: true
  },
  {
    name: "Ajouter un utilisateur",
    url: "/users/add",
    show: true
  },
  {
    name: "Attacher des voitures",
    url: "/users/attach",
    show: true
  }
];

const Users = () => (
  <Container title="Gestion des utilisateurs">
    <Links links={links} />
    <Route path="/users" component={All} exact />
    <Route path="/users/add" component={Add} exact />
    <Route path="/users/edit/:id" component={Edit} />
  </Container>
);

export default Users;
