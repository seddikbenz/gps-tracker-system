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
    url: "/users"
  },
  {
    name: "Ajouter un utilisateur",
    url: "/users/add"
  }
];

const Users = () => (
  <Container title="Gestion des utilisateurs">
    <Links links={links} />
    <Route path="/users" component={All} exact />
    <Route path="/users/add" component={Add} exact />
    <Route path="/users/edit" component={Edit} />
  </Container>
);

export default Users;
