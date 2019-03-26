import React from "react";
import { observer } from "mobx-react";
import { TextInput, Picker } from "react-native-web";
import { globalStyles } from "../../constants";
import Form from "../../components/Form";

class Add extends React.Component {
  render() {
    return (
      <Form
        label="Sauvegarder pour créer un nouvel utilisateur"
        onSubmit={() => alert("saved")}
      >
        <Form.Item required label="Enterprise">
          <Picker style={globalStyles.pickerInput}>
            <Picker.Item label="selectioner" />
          </Picker>
        </Form.Item>

        <Form.Item required label="Nom de l'utilisateur">
          <TextInput placeholder="Nom" style={globalStyles.textInput} />
        </Form.Item>

        <Form.Item required label="Email de l'utilisateur">
          <TextInput placeholder="Email" style={globalStyles.textInput} />
        </Form.Item>

        <Form.Item label="N° Telephone">
          <TextInput placeholder="Telephone" style={globalStyles.textInput} />
        </Form.Item>

        <Form.Item label="Post de travail">
          <TextInput placeholder="Travail" style={globalStyles.textInput} />
        </Form.Item>

        <Form.Item required label="Mot de pass">
          <TextInput placeholder="Mot de pass" style={globalStyles.textInput} />
        </Form.Item>

        <Form.Item required label="Type d'utilisateur">
          <Picker style={globalStyles.pickerInput}>
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
