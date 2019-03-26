import React from "react";
import { observer } from 'mobx-react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native-web";

import Form from '../components/Form'
import { colors, globalStyles } from '../constants'

import store from '../stores'

class Login extends React.Component {
  render() {
    return (

      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Form.Item required label="Email de l'utilisateur">
            <TextInput
              value={store.authStore.values.email}
              onChangeText={(text) => { store.authStore.setEmail(text) }}
              placeholder="Email"
              style={globalStyles.textInput}
            />
          </Form.Item>

          <Form.Item required label="Mot de pass">
            <TextInput
              value={store.authStore.values.password}
              onChangeText={(text) => { store.authStore.setPassword(text) }}
              secureTextEntry
              placeholder="Mot de pass"
              style={globalStyles.textInput}
            />
          </Form.Item>
          <View style={styles.controllers}>
            <Text> Clicker OK pour entrer </Text>
            <TouchableOpacity onPress={() => store.authStore.login()} style={styles.button}>
              <Text style={styles.textButton}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.lightGray,
    width: 960,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.gray,
    alignSelf: "center",
    width: 600,
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  controllers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray
  },
  textButton: {
    color: "white",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 16,
    alignSelf: "flex-end"
  },
})


export default observer(Login);
