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
import {Button,ListItem,SearchBar} from 'react-native-elements'

class Cha extends Component {
    constructor(props){
        super(props)
        this.state={
          show:false,
        }
    }
componentWillMount(){
  fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/gonggao')
  .then(res=>res.json())
  .then(res=>{})
  .catch()

}
cha=()=>{
    this.setState({show:true})
    fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/record')
    .then(res=>res.json())
    .then(res=>{
        this.setState({show:false})
    })
    .catch(err=>{

    })
}
    render(){
        
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <View style={{width:global.g_w,height:global.g_h*.1,backgroundColor:global.t_color}}>
                 <SearchBar  
                 onChangeText={(val)=>{
                 this.setState({val})
                 }}
                 value={this.state.val}
                placeholder='请输入查询的关键词(记录查询)'
                 containerStyle={{
                  backgroundColor:null,
                 marginTop:10,
                 borderTopWidth:0,
                 borderBottomWidth:0}} 
                   inputContainerStyle={{backgroundColor:'#F2F3F4'}}
                   returnKeyType='search'
                   onSubmitEditing={()=>{
                      this.cha()
                   }}
                 />

               </View>

               {  
                   this.state.show?
                   <ActivityIndicator  style={{marginTop:150}}/>
                   :
               <View style={{alignItems:'center'}}>
                   <Image source={require('../images/nosj.png')} 
                    style={{width:global.g_w*.2,height:global.g_w*.2,marginTop:150}}
                   />
                   <Text style={{marginTop:10,color:'#A6ACAF'}}>暂无数据</Text>
                   </View>
               }
            </SafeAreaView>
        
        )
    }

}
export default Cha


