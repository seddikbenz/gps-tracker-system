import React from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native-web";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import store from "../../stores";

import { globalStyles, colors } from "../../constants";
import { Button } from "../../components/Card";

class All extends React.Component {
  componentDidMount() {
    store.carStore.getAll();
  }
  delete(id) {
    if (window.confirm("Do you delete this car")) {
      store.carStore.delete(id);
    }
  }
  render() {
    if (store.carStore.loading) {
      return (
        <View style={[globalStyles.container, { justifyContent: "center" }]}>
          <ActivityIndicator size={48} />
        </View>
      );
    }

    if (store.carStore.cars.length === 0) {
      return (
        <View style={globalStyles.container}>
          <Text>Il ya aucun voitures</Text>
        </View>
      );
    }
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.header}>
          <TextInput
            placeholder="Rechercher une vehicule ..."
            style={globalStyles.searchInput}
          />
        </View>

        <ScrollView>
          <View style={globalStyles.cards}>
            {store.carStore.cars.map((car, index) => (
              <TouchableOpacity
                onPress={() => (store.carStore.selectedId = car.id)}
                key={index}
                style={[
                  globalStyles.card,
                  {
                    borderColor:
                      store.carStore.selectedId === car.id
                        ? colors.orange
                        : colors.lightGray
                  }
                ]}
              >
                <View style={globalStyles.bodyCard}>
                  <Text>{car.numberplate}</Text>
                </View>
                <View style={globalStyles.buttonsCard}>
                  <Button>
                    <FaPencilAlt size={16} />
                  </Button>
                  <Button>
                    <FaTrashAlt color={colors.red} size={16} />
                  </Button>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default observer(All);
