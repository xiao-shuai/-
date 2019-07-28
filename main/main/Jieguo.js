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


class Jieguo extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
       
    
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{
                    alignItems:'center',padding:20,
                   
                flex:1,backgroundColor:global.t_bg}}>
             <Image source={require('../images/no.png')} style={{
                 width:global.g_w*.5,height:global.g_w*.5,
             }} resizeMode='contain'/>
              <Text style={{fontSize:18,}}>查无预约数据！</Text>
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Jieguo
const styles=StyleSheet.create({
   
})


