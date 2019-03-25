import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import { Button, Image, StyleSheet, Text, View } from "react-native-web";

import Login from "./containers/Login";
import Header from "./containers/Header";

import Companies from "./containers/Companies";
import Users from "./containers/Users";
import { colors } from "./constants";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <View style={styles.container}>
          <Header />
          <Route path={"/companies"} component={Companies} />
          <Route path={"/users"} component={Users} />
        </View>
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.darkGray,
    flex: 1
  }
});

export default observer(App);
