import React from "react";
import PropTypes from "prop-types";
import { observer } from 'mobx-react'
import { StyleSheet, View, TouchableOpacity, Text } from "react-native-web";
import store from "../stores";

class Toast extends React.Component {
  constructor() {
    super()
    this.setTimeoutID = 0;
  }
  componentDidMount(){
    this.setTimeoutID = setTimeout(()=>this.dismiss(), 3000)
  }

  dismiss(){
    clearTimeout(this.setTimeoutID)
    this.props.onDismiss()
  }
  componentDidMount
  render() {
    const { text, type, onDismiss } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onDismiss}
      >
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity>
    );
  }
}

Toast.propTypes = {
  text: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

class ToastContainer extends React.Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        {
          store.toastStore.toasts.map((toast, index) => (
            <Toast
              key={index}
              text={toast.text}
              type={toast.type}
              onDismiss={() => store.toastStore.dismiss(index)}
            />
          ))
        }
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
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5
  },
  text: {
    color: "white"
  }
});

export default observer(ToastContainer)
