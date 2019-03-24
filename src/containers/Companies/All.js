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

import { colors } from "../../constants";
import Card from "../../components/Card";

class All extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Rechercher une enterprise ..."
            style={styles.searchInput}
          />
        </View>

        <ScrollView>
          <View style={styles.companies}>
            <Card
              isSelected={store.companyStore.selectedId === 1}
              onDelete={() => alert("Delete")}
              onEdit={() => alert("Edit")}
              onPress={() => {
                store.companyStore.selectedId = 1;
              }}
            >
              <Text>1234567890123456789012</Text>
              <Text> Ddzdzd </Text>
            </Card>
            <Card
              isSelected={store.companyStore.selectedId === 0}
              onDelete={() => alert("Delete")}
              onEdit={() => alert("Edit")}
              onPress={() => {
                store.companyStore.selectedId = 0;
              }}
            >
              <Text> Ddzdzd </Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    margin: 5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    backgroundColor: colors.gray,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  searchInput: {
    paddingHorizontal: 10,
    height: 32,
    width: 290,
    fontSize: 16,
    backgroundColor: "white"
  },
  companies: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  }
});

export default observer(All);
