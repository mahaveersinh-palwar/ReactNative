import { Text, SafeAreaView, StyleSheet, ScrollView, View,} from 'react-native';

// You can import supported modules from npm
import {  } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
      const {container, textStyle, innerContainer, innertext} = Styles;
      const ary = [1,2,3,4,5,6]
  return (   
    <ScrollView>
    <SafeAreaView>
     {ary.map((item)=>
                <View key={item} style={container}>
                        <Text style={textStyle}>Catogory {item}</Text>
                         <ScrollView horizontal={true}>
                         {ary.map((tile)=>
                              <View style={innerContainer}>
                              <Text style={innertext}> Inner Category {tile} </Text>
                              </View>
                         )}
                          </ScrollView>
                </View>)}
    </SafeAreaView>>
    </ScrollView>
  
  );
}

const Styles = StyleSheet.create({
    container : {
      backgroundColor : "yellow",
      marginVertical : 20,
      height:150,
      padding : 10

    }, 
    textStyle :
    {
      fontSize:20, 
    
    }, 
    innerContainer :{
      backgroundColor:"pink",
      width:100,
      height:100,
      padding:10,
      margin:10
    },
    innertext :{
      color:"white",
    }
}); 
