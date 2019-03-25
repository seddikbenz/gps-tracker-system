import React from "react";
import { observer } from "mobx-react";
import { View, Text, TextInput, ScrollView } from "react-native-web";

import store from "../../stores";

import { globalStyles } from "../../constants";
import Card from "../../components/Card";

class All extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.header}>
          <TextInput
            placeholder="Rechercher un utilisateur ..."
            style={globalStyles.searchInput}
          />
        </View>
        <ScrollView>
          <View style={globalStyles.cards}>
            <Card
              isSelected={store.companyStore.selectedId === 1}
              onDelete={() => alert("Delete")}
              onEdit={() => this.props.history.push("/users/edit/1")}
              onPress={() => {
                store.companyStore.selectedId = 1;
              }}
            >
              <Text>benzemame seddik</Text>
              <Text>seddik.benz.dev@gmail.com</Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default observer(All);
