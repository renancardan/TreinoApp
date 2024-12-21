import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';


import Topo from '../components/Topo1';
import Caixa2 from '../components/Caixa2';


const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default ({route}) => {
  console.log(route.params.item)

    const navigation = useNavigation();
    const [Item, setItem] = useState(route.params.item)
    
   
  
    const PegarProdutos = ()=>{
    
    }

 
   
  
    
    return (
      <View style={styles.Container0}>
        <View style={styles.ContBtn}>
        <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnTop}>
        <Text style={styles.Txt2}>COMO FAZER</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnTop}>
        <Text style={styles.Txt2}>BENEFÍCIOS</Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnTop}>
        <Text style={styles.Txt2}>MÚSCULOS</Text>
        </TouchableHighlight> 
        </View>
       <Image  source={require("../assets/Peito.gif")}  style={styles.ImageVer2 } />
       <Text style={styles.Txt3}>Supino Reto</Text>
       <Text style={styles.Txt4}>1° Série </Text>
       <Text style={styles.Txt4}>10 Repetições</Text>
  <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnIniciar1}>
     <Text style={styles.Txt1}>PRÓXIMO</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnIniciar}>
     <Text style={styles.Txt1}>VOLTAR</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnIniciar2}>
     <Text style={styles.Txt1}>FINALIZAR</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.BtnIniciar3}>
     <Text style={styles.Txt1}>TROCAR DE TREINO</Text>
     </TouchableHighlight>
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
     
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
         
          
         
                  
    </View>
    <View style={styles.Container1}>
   
   
  
              </View>
             
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  Txt4:{
    fontSize:15,
    color:"#000",
    fontWeight:"bold"
   },
  Txt3:{
    fontSize:25,
    color:"#000",
    fontWeight:"bold"
   },
  BtnTop:{
  padding:5,
  backgroundColor:"#000",
  borderWidth:1,
  borderStyle:"solid",
  borderColor:"#FFF",
  },
  ContBtn:{
  width:330,
  height:50,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#000",
  marginTop:50,
  },
  Txt2:{
    fontSize:15,
    color:"#fff",
    fontWeight:"bold"
   },
  BtnIniciar:{
  backgroundColor:"#6bc866",
  width:330, 
  height:50,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:20,
  margin:10, 
  },
  BtnIniciar1:{
    backgroundColor:"#c13535",
    width:150, 
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    margin:10, 
    },
    BtnIniciar2:{
      backgroundColor:"#6786c1",
      width:330, 
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:100,
      margin:10, 
      },
      BtnIniciar3:{
        backgroundColor:"#df9048",
        width:330, 
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        margin:10, 
        },
  Txt1:{
   fontSize:20,
   color:"#fff",
   fontWeight:"bold"
  },
  Container0:{
   width:"100%",
   height:"100%",
   alignItems:"center",
   backgroundColor:"#fff"
   },
  Container:{
    opacity: 1,
    backgroundColor:"#FFF",
    paddingBottom:100, 
   },
   Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
   backgroundColor:"red"
   },

   Menus:{
    width:"40%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    backgroundColor: "#FFF",
    zIndex: 2,
     
   },
   MenusFund:{
    width:"100%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    opacity: 0.5,
    backgroundColor: "#000",
    zIndex: 1,
     
   },
   menuText: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    fontFamily:"arial"
    
  },
  LinhaTop: {
    width: '50%',
   
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial"
  },
  menuItem1: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
   Sec0: {
    zIndex: 99,
  },
   Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    width:"100%",
   
   },
   item: {
    flexBasis: 'auto', 
    margin: 5,
    padding: 10,
    backgroundColor: 'lightblue',
  },
   viewCentral:{
    width:"100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: 38

   },  
   ImageVer3:{
    width:100,
    height:100,
    

   
  },
  ImageVer2:{
    marginTop:30,
    width:200,
   height:200,
   borderRadius:5,
 },
 
});