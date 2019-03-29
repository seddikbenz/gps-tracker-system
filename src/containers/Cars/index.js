import React from "react";
import {observer} from "mobx-react";
import {Route, withRouter} from "react-router-dom";

import Links from "../../components/Links";
import Container from "../../components/Container";

import All from "./All";
import Add from "./Add";
import Edit from "./Edit";

import store from '../../stores'
import {colors} from "../../constants";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";

const Cars = withRouter(({history, location}) => (
  <Container title="Gestion des vehicules">
    <View style={styles.links}>
      <TouchableOpacity
        onPress={() => history.push("/cars")}
        style={[
          styles.link,
          {
            borderColor:
              location.pathname === "/cars"
                ? colors.orange
                : colors.lightGray
          }
        ]}
      >
        <Text
          style={{
            fontWeight: location.pathname === "/cars" ? "bold" : ""
          }}
        >
          Tous les vehicules
        </Text>
      </TouchableOpacity>
      {
        store.userStore.currentUser.role === "superadmin" &&
        <TouchableOpacity
          onPress={() => history.push("/cars/add")}
          style={[
            styles.link,
            {
              borderColor:
                location.pathname === "/cars/add"
                  ? colors.orange
                  : colors.lightGray
            }
          ]}
        >
          <Text
            style={{
              fontWeight: location.pathname === "/cars/add" ? "bold" : ""
            }}
          >
            Ajouter une vehicules
          </Text>
        </TouchableOpacity>
      }
    </View>
    <Route path="/cars" component={All} exact/>
    <Route path="/cars/add" component={Add} exact/>
    <Route path="/cars/edit/:id" component={Edit}/>
  </Container>
))

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    width: 800,
    flex: 1
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  link: {
    height: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: colors.lightGray
  }
});

export default observer(Cars);
