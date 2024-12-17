import { Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const data = [{
    id : 1,
    name : 'abc',
    city : 'Xyz'
  },
  {
    id : 2,
    name : 'abc',
    city : 'Xyz'
  },
  {
    id : 3,
    name : 'abc',
    city : 'Xyz'
  },
  {
    id : 4,
    name : 'abc',
    city : 'Xyz'
  },
  ]
 const {container,touch,img,txt,verticalView,round,twocircel} = styles;
  return (
   <SafeAreaView style = {styles.container}>
                <FlatList 
                 data={data}

                 renderItem={({item})=>
                 <TouchableOpacity style={styles.touch} >
                        <View style={{flexDirection:'row'}}>
                            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'}} style={styles.img} />
                            
                              <View style={styles.verticalView}>
                                <Text style={styles.txt}>Name:{item.name}</Text>
                                <Text style={styles.txt}>City:{item.city}</Text>
                              </View>
                        </View>
                       
                              <View style={styles.round} ></View>
                              
                       
                 </TouchableOpacity>
                
                 }
                />
                
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container : {
   marginVertical:60,
   height:"100%",
   
   marginHorizontal:20
 },
 touch :
 {
   margin:10,
   padding:10,
   marginBottom:10,
   backgroundColor:'skyblue',
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'flex-start'
 },
 img:{
   width:70,
   height:70,
   borderRadius:50
 }, 
 txt:{
  marginLeft:20,
  marginTop:5,
  fontSize:15,
  fontWeight:700

 }, 
 
 round :{
   
   height:20,
   width:20,
   color:'black',
   backgroundColor:'black',    
   justifyContent:'center',
   borderRadius:50,
   borderWidth:1,
   marginTop:20,
   marginRight:20
 },

});

