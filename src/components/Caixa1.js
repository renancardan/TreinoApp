import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default ({item}) => {
   const navigation = useNavigation();
  console.log(item.Musculos.length)
var Numero = item.Musculos.length
const EntrandoExecicios = () => {
   navigation.navigate("Exercicios", {
     item:item,
   });
 
}
   return (
     
            <TouchableHighlight onPress={()=>EntrandoExecicios()} style={styles.Btn}>
               <>
              <View style={styles.Quadro1} >
                  <Text style={styles.Txt1}>{item.Dia} </Text>
                  <Text style={styles.Txt2}> {item.Musculos.map((item, key)=>(
                     <>
                         {item}{key+1=== Numero ? "":"/"}  
                     </>
                     ))}</Text>

               </View>                 
            <View style={styles.Quadro2}>
            <Image  source={require("../assets/Peito.gif")}  style={styles.ImageVer2 } />
            </View>
               </>
            </TouchableHighlight>
       
   );
}

const styles = StyleSheet.create({
   ImageVer2:{
      width:50,
     height:50,
     borderRadius:5,
   },
   Quadro1:{
      width:150,
      flexDirection: 'column',
    
   },
   Quadro2:{
      width:50,
      height:50,
      flexDirection: 'column',
 
   },
   Btn:{
      padding:10,
      margin:10, 
      flexDirection: "row",
      borderRadius: 10,
      position: 'relative',
      backgroundColor:"#F1F1F1",
      width:300,
      borderWidth:1,
      borderStyle:"solid",
      borderColor:"#DDD",
      justifyContent:"space-between"
     } ,
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
     },
   Img:{
     width:"11rem",
     height:"9rem",
     borderRadius:"0.75rem"
  
     },
    
     
     Viewcent:{
        flexDirection: "column",
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
     },
     ViewCentInt:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        gap: "0.25rem",
     },
     Txt1:{
       color:"#000",
       fontWeight:500,
       fontSize:"1.125rem",
       lineHeight:"1.75rem",
     },
     Txt2:{
      marginTop: "0.25rem",
      color:"#000"
     },
     Txt3:{
      color:"#999",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
     }

     
  
     
  });