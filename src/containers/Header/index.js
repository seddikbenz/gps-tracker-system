import React from 'react'
import {observer} from 'mobx-react'
import { withRouter } from "react-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native-web'
import {
  FaBars,
  FaHome,
  FaMapMarkedAlt,
  FaFileAlt,
  FaCubes,
  FaIndustry,
  FaUserAlt,
  FaCarAlt,
  FaBlackTie,
  FaRocket
} from 'react-icons/fa'
import store from '../../stores'
import {colors} from '../../constants'
import HandleClickOutside from '../../components/HandleClickOutside'

const MenuProfile = withRouter(({history}) => (
  <HandleClickOutside handleClick={() => store.commonStore.showMenuProfile = !store.commonStore.showMenuProfile}>
    <View style={styles.menuProfile}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', height: 48, borderBottomWidth:1}} >
        <FaUserAlt size={24}/>
        <View>
          <Text>seddik benzemame</Text>
          <Text>seddik.benz.dev@gmail.com</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', height: 48}}>
        <TouchableOpacity
          onPress={()=>history.push('/settings')}
        >
          <Text>Paramètre</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Déconnecte</Text>
        </TouchableOpacity>
      </View>
    </View>
  </HandleClickOutside>
))

const Menu = withRouter(({history, location}) =>  (
  <HandleClickOutside handleClick={() => store.commonStore.showMenu = !store.commonStore.showMenu}>
    <View style={styles.menu} >
      <TouchableOpacity
        onPress={()=>history.push('/')}
        style={[styles.menuItem, {borderColor: location.pathname === '/' ? colors.orange: colors.lightGray}]} >
        <FaHome size={32} />
        <Text style={{fontWeight: location.pathname === '/' ? 'bold': ''}}>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/map')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('map') ? colors.orange: colors.lightGray}]} >
        <FaMapMarkedAlt size={32} />
        <Text style={{fontWeight: location.pathname.includes('map') ? 'bold': ''}}>Temps Réel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/reports')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('reports') ? colors.orange: colors.lightGray}]} >
        <FaFileAlt size={32} />
        <Text style={{fontWeight: location.pathname.includes('reports') ? 'bold': ''}}>Rapports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/geofencing')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('gestion') ? colors.orange: colors.lightGray}]} >
        <FaCubes size={32} />
        <Text style={{fontWeight: location.pathname.includes('geofencing') ? 'bold': ''}} >Geofencing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/companies')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('companies') ? colors.orange: colors.lightGray}]} >
        <FaIndustry size={32} />
        <Text style={{fontWeight: location.pathname.includes('companies') ? 'bold': ''}}>Entreprises</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/users')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('users') ? colors.orange: colors.lightGray}]} >
        <FaUserAlt size={32} />
        <Text style={{fontWeight: location.pathname.includes('users') ? 'bold': ''}}>Utilisateurs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/cars')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('cars') ? colors.orange: colors.lightGray}]} >
        <FaCarAlt size={32} />
        <Text style={{fontWeight: location.pathname.includes('cars') ? 'bold': ''}}>Vehicules</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/drivers')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('drivers') ? colors.orange: colors.lightGray}]} >
        <FaBlackTie size={32} />
        <Text style={{fontWeight: location.pathname.includes('drivers') ? 'bold': ''}}>Conducteurs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>history.push('/trackers')}
        style={[styles.menuItem, {borderColor: location.pathname.includes('trackers') ? colors.orange: colors.lightGray}]} >
        <FaRocket size={32} />
        <Text style={{fontWeight: location.pathname.includes('trackers') ? 'bold': ''}}>Traqueurs</Text>
      </TouchableOpacity>
    </View>
  </HandleClickOutside>
))

class Header extends React.Component{
  toggleMenu(){
    store.commonStore.showMenu = !store.commonStore.showMenu
  }
  toggleMenuProfile(){
    store.commonStore.showMenuProfile = !store.commonStore.showMenuProfile
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerLeft} >
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={this.toggleMenu}
          >
            <FaBars size={16} color='black' />

          </TouchableOpacity>
          {
            store.commonStore.showMenu &&
            <Menu/>
          }
          <Text style={styles.title}>Gps tracking system</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.toggleMenuProfile}
            style={styles.buttonMenu}
          >
            <FaUserAlt size={16} color='black' />
          </TouchableOpacity>
          {
            store.commonStore.showMenuProfile &&
            <MenuProfile/>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    zIndex: 99999,
    flexDirection: 'row',
    height: 48,
    width: '100%',
    backgroundColor: colors.gray,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  containerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:16,
  },
  buttonMenu:{
    width: 32,
    height:32,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,
    marginRight: 10
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 48,
    left: 2,
    width: 316,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius:3,
    padding:5,
    shadowColor: 'black',
    shadowOffset: {width: 3,height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  menuItem: {
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    borderWidth: 1,
    width: 96,
    height: 64,
    margin: 3,
    justifyContent: 'space-around',
    borderRadius: 5,
    borderColor: colors.lightGray
  },
  menuProfile:{
    position: 'absolute',
    top: 48,
    right: 2,
    width: 250,
    height: 100,
    backgroundColor: colors.gray,
    padding: 5,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 3,height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10
  }
})

export default observer(Header)