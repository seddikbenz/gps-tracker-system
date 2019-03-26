import React from "react";
import { observer } from "mobx-react";
import { TextInput, View, Text, ActivityIndicator, Picker } from "react-native-web";

import { globalStyles } from "../../constants";
import Form from "../../components/Form";

import store from '../../stores'

class Add extends React.Component {
  componentDidMount() {
    store.userStore.user = {
      id: 0,
      username: "",
      email: "",
      tel: "",
      job: "",
      role: "",
      password: "",
      passwordVerification: "",
      user_id: 0,
      company_id: 0,
      created_at: "",
      updated_at: ""
    }
    if (store.userStore.currentUser.role === 'superadmin') {
      store.companyStore.getAll()
    }
  }
  render() {
    if (store.userStore.loading || store.companyStore.loading) {
      return (
        <View style={[globalStyles.container, { justifyContent: "center" }]}>
          <ActivityIndicator size={48} />
        </View>
      )
    }
    if (store.companyStore.companies.length === 0 && store.userStore.currentUser.role === 'superadmin') {
      return (
        <View style={globalStyles.container}>
          <Text>Il ya aucun enterprises</Text>
        </View>
      );
    }
    return (
      <Form
        label="Sauvegarder pour créer un nouvel utilisateur"
        onSubmit={() => alert("savded")}
      >
        {
          store.userStore.currentUser.role === 'superadmin' &&
          <Form.Item required label="Enterprise">
            <Picker
              value={store.userStore.user.company_id}
              onValueChange={value =>
                store.userStore.user.company_id = value
              }
              style={globalStyles.pickerInput}
            >
              {
                store.companyStore.companies.map((company, index) => (
                  <Picker.Item label={company.name} value={company.id} />
                ))
              }
            </Picker>
          </Form.Item>
        }


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
            <Picker.Item value='admin' label="Admin" />
            <Picker.Item value='superuser' label="Sous admin" />
            <Picker.Item value='user' label="Utilisateur" />
          </Picker>
        </Form.Item>
      </Form>
    );
  }
}

export default observer(Add);
