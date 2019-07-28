import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
import Main from '../main/Main'
import Gonggao from '../main/Gonggao'
import Gonggao_xq from '../main/Gonggao_xq'
import Xieyi from '../fuwu/Xieyi'
import Yuebz from '../fuwu/Yuebz'
import QianZhu from '../main/QianZhu'
import Ywcx from '../main/Ywcx'
import Login from '../login/Login'
import Creat from '../login/Creat'
import Wangdianinfo from '../main/Wangdianinfo'
import Zhiyin from '../main/Zhiyin'
import Zhiyinxq from '../main/Zhiyinxq'
import Jieguo from '../main/Jieguo'
 const THIS_PAGE=createStackNavigator({
    Main:{
        screen:Main,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      Gonggao:{
        screen:Gonggao, 
        navigationOptions:()=>({
            title:'北京移民政务平台',
            headerBackTitle:null,
        })
      },
      Gonggao_xq:{
        screen:Gonggao_xq, 
        navigationOptions:()=>({
            title:'北京移民政务平台'
        })
      },
      Xieyi:{
        screen:Xieyi, 
        navigationOptions:()=>({
            title:'阅读协议'
        })
      },
      Yuebz:{
        screen:Yuebz, 
        navigationOptions:()=>({
            title:'预约大厅'
        })
      },
      QianZhu:{
        screen:QianZhu, 
        navigationOptions:()=>({
            title:'签注'
        })
      },
      Ywcx:{
        screen:Ywcx, 
        navigationOptions:()=>({
            title:'查询服务'
        })
      },
      Login:{
        screen:Login, 
        navigationOptions:()=>({
            // title:'查询服务'
            header:null,
            headerBackTitle:null,
        })
      },
      Creat:{
        screen:Creat, 
        navigationOptions:()=>({
            title:'创建账号',
          
            // header:null
        })
      },
      Wangdianinfo:{
        screen:Wangdianinfo, 
        navigationOptions:()=>({
            title:'全部网点',
          
            // header:null
        })
      },
      Zhiyin:{
        screen:Zhiyin, 
        navigationOptions:()=>({
            title:'北京政务服务平台',
            headerBackTitle:null,
            // header:null
        })
      },
      Zhiyinxq:{
        screen:Zhiyinxq, 
        navigationOptions:()=>({
            title:'北京政务服务平台',
          
            // header:null
        })
      },
      Jieguo:{
        screen:Jieguo, 
        navigationOptions:()=>({
            title:'预约查询',
          
            // header:null
        })
      },
      
      
  
 })   
 export default createAppContainer(THIS_PAGE)