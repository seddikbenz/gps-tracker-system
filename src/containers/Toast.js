import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native-web";

class Toast extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Message to toasting it !</Text>
      </TouchableOpacity>
    );
  }
}

class ToastContainer extends React.Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <Toast />
        <Toast />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    position: "absolute",
    bottom: 100,

    justifyContent: "center",
    alignItems: "center",

    zIndex: 9999
  },
  container: {
    width: 300,
    paddingVertical: 20,
    backgroundColor: "black",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5
  },
  text: {
    color: "white"
  }
});

export default ToastContainer;
