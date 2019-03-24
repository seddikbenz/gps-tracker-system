import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native-web'

class Add extends React.Component{
  render(){
    return(
      <View>
        <Text>Add</Text>
      </View>
    )
  }
}

export default observer(Add)

