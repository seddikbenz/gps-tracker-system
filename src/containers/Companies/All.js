import React from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native-web";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import store from "../../stores";

import { globalStyles } from "../../constants";
import Card from "../../components/Card";

class All extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.header}>
          <TextInput
            placeholder="Rechercher une enterprise ..."
            style={globalStyles.searchInput}
          />
        </View>

        <ScrollView>
          <View style={globalStyles.cards}>
            <Card
              isSelected={store.companyStore.selectedId === 1}
              onDelete={() => alert("Delete")}
              onEdit={() => this.props.history.push("/companies/edit/1")}
              onPress={() => {
                store.companyStore.selectedId = 1;
              }}
            >
              <Text>1234567890123456789012</Text>
              <Text> Ddzdzd </Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default observer(All);
