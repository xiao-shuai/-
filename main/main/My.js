import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem} from 'react-native-elements'

class My extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
componentWillMount(){
  fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/gonggao')
  .then(res=>res.json())
  .then(res=>{})
  .catch()

}
    render(){
        
        return(
            <SafeAreaView style={{flex:1}}>
                <Text>My</Text>
            </SafeAreaView>
        
        )
    }

}
export default My


