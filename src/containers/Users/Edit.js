import React from "react";
import { observer } from "mobx-react";
import { TextInput, Picker } from "react-native-web";
import { globalStyles } from "../../constants";
import Form from "../../components/Form";

class Add extends React.Component {
  render() {
    return (
      <Form
        label="Sauvegarder pour modifier l'utilisateur"
        onSubmit={() => alert("saved")}
      >
        <Form.Item label="Enterprise">
          <Picker style={globalStyles.textInput}>
            <Picker.Item label="selectioner" />
          </Picker>
        </Form.Item>
        <Form.Item label="Nom de l'utilisateur">
          <TextInput placeholder="Nom" style={globalStyles.textInput} />
        </Form.Item>
        <Form.Item label="Email de l'utilisateur">
          <TextInput placeholder="Email" style={globalStyles.textInput} />
        </Form.Item>
        <Form.Item label="Mot de pass">
          <TextInput placeholder="Mot de pass" style={globalStyles.textInput} />
        </Form.Item>
        <Form.Item label="Type d'utilisateur">
          <Picker style={globalStyles.textInput}>
            <Picker.Item label="selectioner" />
            <Picker.Item label="Admin" />
            <Picker.Item label="Super User" />
            <Picker.Item label="User" />
          </Picker>
        </Form.Item>
      </Form>
    );
  }
}

export default observer(Add);
