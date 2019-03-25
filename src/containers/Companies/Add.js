import React from "react";
import { observer } from "mobx-react";
import { TextInput } from "react-native-web";
import { globalStyles } from "../../constants";
import Form from "../../components/Form";

class Add extends React.Component {
  render() {
    return (
      <Form
        label="Sauvegarder pour créer une nouvele enterprise"
        onSubmit={() => alert("saved")}
      >
        <Form.Item required label="Nom de l'enterprise">
          <TextInput placeholder="Nom" style={globalStyles.textInput} />
        </Form.Item>
      </Form>
    );
  }
}

export default observer(Add);
