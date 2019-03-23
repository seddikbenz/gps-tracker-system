import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native-web";

import { IoMdLogIn, IoMdSad } from "react-icons/io";
const test = false;
class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Connect to Geo-Flota</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            type="email"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            Type="Password"
          />
          <TouchableOpacity style={styles.buttonLogin}>
            {test && <ActivityIndicator size="small" color="white" />}
            {!test && <IoMdLogIn size={24} />}
            <Text style={{ justifySelf: "center" }}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.error}>Error </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  right: {
    flex: 1
  },
  form: {
    padding: 30,
    maxWidth: Dimensions.get("window").width / 2,
    minWidth: 450,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3
  },
  formTitle: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold"
  },
  textInput: {
    padding: 5,
    paddingVertical: 7,
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 3,
    borderRadius: 3
  },
  buttonLogin: {
    flexDirection: "row",
    margin: 3,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1da1f2",
    color: "white",
    borderRadius: 3
  },
  error: {
    marginTop: 20,
    color: "red",
    fontSize: 16
  }
});

export default Login;
