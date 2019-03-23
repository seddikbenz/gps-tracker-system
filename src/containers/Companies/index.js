import React from 'react'
import { observer } from 'mobx-react'
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native-web'


import store from '../../stores'

import {colors} from '../../constants'

import All from './All'

class Companies extends React.Component{
  render(){
    const {history, location} = this.props
    return(
      <View style={styles.container} >
        <View style={{height: 48, backgroundColor: colors.lightGray, justifyContent: 'center', padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >Gestion des enterprise</Text>
        </View>
        <View style={styles.links}>
          <TouchableOpacity
            onPress={()=>history.push('/companies')}
            style={[styles.link, {borderColor: location.pathname ==='/companies' ? colors.orange: colors.lightGray}]}
          >
            <Text style={{fontWeight: location.pathname ==='/companies' ? 'bold' : ''}}>Tous les enterprise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>history.push('/companies/add')}
            style={[styles.link, {borderColor: location.pathname === '/companies/add' ? colors.orange: colors.lightGray}]}
          >
            <Text style={{fontWeight: location.pathname ==='/companies/add' ? 'bold' : ''}}>Ajouter une enterprise</Text>
          </TouchableOpacity>
        </View>

        <Route path='/companies' component={All} exact />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    width: 800,
    flex: 1,
  },
  links:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.gray,
    padding: 10
  },
  link:{
    height: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: colors.lightGray
  }
})

export default withRouter(observer(Companies))