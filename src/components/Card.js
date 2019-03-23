import React from 'react'
import PropTypes from "prop-types";

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native-web'
import {colors} from "../constants";

import {
  FaPencilAlt,
  FaTrashAlt
} from 'react-icons/fa'

const Card = ({children, onPress, onEdit, onDelete, isSelected}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.card,
      {
        borderColor: isSelected ? colors.orange : colors.lightGray
      }
    ]
    }
  >
    <View style={styles.body}>
      {children}
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={onEdit}
        style={styles.button}>
        <FaPencilAlt size={16}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDelete}
        style={styles.button}>
        <FaTrashAlt color={colors.red} size={16}/>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: 181,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 5,
    backgroundColor: colors.lightGray,
    justifyContent: 'space-between'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 0
  },
  button: {
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray
  },
  body: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray
  }
})

Card.propTypes = {
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default Card