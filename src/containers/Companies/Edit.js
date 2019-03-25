import React from "react";
import { observer } from "mobx-react";
import { TextInput } from "react-native-web";
import { globalStyles } from "../../constants";
import Form from "../../components/Form";

class Edit extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Form
        label="Sauvegarder pour modifier l'enterprise"
        onSubmit={() => alert("update")}
      >
        <Form.Item required label="Nom de l'enterprise">
          <TextInput placeholder="Nom" style={globalStyles.textInput} />
        </Form.Item>
      </Form>
    );
  }
}

export default observer(Edit);
