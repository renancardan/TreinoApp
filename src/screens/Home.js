import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import MenuHori from '../components/MenuHori';
import ModalInfo from '../components/ModalInfo';
import Topo from '../components/Topo';
import Banner from '../components/Banner';
import Pesquisa from '../components/Pesquisa';
import Secao from '../components/Secao';
import Catalago from '../components/Catalago';
import Item from '../components/Item';
import Secao1 from '../components/Secao1';
import Mod1 from '../components/Modal';
import Menu from '../components/Menu';
import Carrinho from '../components/Carrinho';
import ModalCar from "../components/ModalCar"
import Titulo from '../components/Titulo';

const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';
import Caixa1 from '../components/Caixa1';

export default ({route}) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
    const navigation = useNavigation();
    const [IdEmp, setIdEmp] = useState(route.params.id)
    const [DadoEmp, setDadoEmp] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleCar, setModalVisibleCar] = useState(false);
    const [modalVisibleInfo, setModalVisibleInfo] = useState(false);
    const [DiasSemana, setDiasSemana] = useState([
      {
        id: 1,
        Dia: "Segunda-Feira",
        Musculos: ["Ombro", "Perna"],
        Treino:"../assets/Ombro.gif"
      },
      {
        id: 2,
        Dia: "Terça-Feira",
        Musculos: ["Peito"],
        Treino:"../assets/Peito.gif"
      },
      {
        id: 3,
        Dia: "Quarta-Feira",
        Musculos: ["Costa"],
        Treino:"../assets/costa.gif"
      }
    ])
    
   
    useEffect(()=>{
 
    }, []);
    useEffect(()=>{
      
     if(DadoEmp.NomeEmp){
      
    //   VerTempo()
    //  const interval = setInterval(() => {
    //   VerTempo()
    // }, 60000);

   
    // return () => clearInterval(interval);
    }
    }, [DadoEmp]);

    useEffect(()=>{

    }, []);

    const handleInstallClick = () => {
      
    };
    
   
    return (
      <View style={styles.Container0}>
        
         <ScrollView 
          style={styles.Container} 
          //Tirando a Barra de Rolagem  
            showsVerticalScrollIndicator={false}> 
            <Image source={require('../assets/TreinoApp.png')}  style={styles.ImageVer2 } />
      
            {  DiasSemana.length > 0  ?
          <>
          {DiasSemana.map((item, key)=>(
           <>
         <Caixa1
         item={item} 
           />
           
           </>
          ))}
          </>
          :
          <>
          <View style={{marginLeft:150, marginTop:100}}>
                <Image source={require('../assets/caregar.gif')}  style={styles.ImageVer3 } />
               
                </View>
          </>} 
     
    
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  ImageVer2:{
    width:100,
    height:100,
     borderRadius:10,
   marginLeft:20,
  },  
  Container0:{
   width:"100%",
   height:"100%",
   paddingTop:70,
   justifyContent:"center",
   alignItems:"center",
   backgroundColor:"#FFF",
   },
  Container:{
    opacity: 1,
    backgroundColor:"#FFF",
    paddingBottom:100, 
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
 
});