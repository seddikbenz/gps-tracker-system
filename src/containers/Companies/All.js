import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native-web'

import {
  FaPencilAlt,
  FaTrashAlt
} from 'react-icons/fa'

import store from '../../stores'

import {colors} from '../../constants'

const Company = ({id, name})=>(
  <TouchableOpacity
    style={[styles.company, {borderColor: store.companyStore.selectedId === id ? colors.orange: colors.lightGray}]}
  >
    <View style={styles.companyBody} >
      <Text> {name} </Text>
    </View>
    <View style={styles.companyButtons} >
      <TouchableOpacity style={styles.companyButton}>
        <FaPencilAlt size={16} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.companyButton}>
        <FaTrashAlt color={colors.red} size={16} />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
)


class All extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder='Rechercher une enterprise ...'
            style={styles.searchInput}
          />
        </View>

        <ScrollView >
          <View style={styles.companies}>
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={0} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
            <Company name={'hdgshdsd'} id={1} />
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    margin: 5
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    backgroundColor: colors.gray,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  searchInput: {
    paddingHorizontal: 10,
    height: 32,
    width: 290,
    fontSize: 16,
    backgroundColor: 'white'
  },
  companies:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'center',
  },
  company: {
    alignItems: 'center',
    width: 180,
    borderWidth: 1,
    height: 100,
    margin: 3,
    padding: 5,
    backgroundColor: colors.lightGray,
    justifyContent: 'space-between'

  },
  companyButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 0
  },
  companyButton:{
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray
  },
  companyBody: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray
  }
})

export default observer(All)