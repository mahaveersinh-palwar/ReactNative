import { Text, SafeAreaView, StyleSheet, ScrollView, View , Image, ImageBackground} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
   
  const {container, image, fontstyle, innerview, title, backimg} = Styles;
  const vertical =[1,2,3,4,5]
  const horizontal = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR_neWPvDcXmyx75QsU4yhYtaxM4BJAnkRw&s','https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww','https://riverlounge.ae/wp-content/uploads/2024/11/DSC05200.webp','https://img.freepik.com/premium-photo/homemade-burgers_136595-24588.jpg']
  return (
    <ImageBackground source={{uri:'https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg'}} style={backimg} resizeMode="stretch"> 
    <SafeAreaView>
    <Text style = {title}>Food Menu</Text>
            <ScrollView fla>
                          
                          {[vertical.map(()=><View style={container}>
                                  <Text style={fontstyle}>Burger</Text>
                                    {
                                    
                                      <ScrollView horizontal={true} >
                                    {
                                       horizontal.map((item)=>{
                                         return (
                                               <View style={innerview}>
                                           <Image source={{uri:item}}resizeMode='stretch' style={image}/>
                                               </View>
                                         )
                                       })
                                    }
                                          
                                      </ScrollView>
                                      
                                    }
                                  </View>)]}                     
            </ScrollView>
    </SafeAreaView>
  </ImageBackground>
)};
const Styles = StyleSheet.create(
  {
    title :
    {
      marginTop:50,
      fontSize:25,
      textAlign:'center', 
      fontWeight:800,
      color:'white'
    }
    ,
    container :{
      marginVertical : 20,
      // backgroundColor: 'skyblue'
    },
     
      fontstyle : 
      {
        fontSize:20, 
        textAlign:'center', 
        fontWeight:700,
        color:'white'
      },
      image:{
        height:150,
        width:100
      },
      innerview :
      {
        height:150,
        width:100,
       borderWidth:1,
       borderRadius:4,
         marginVertical:10,
         justifyContent:'center',
         alignContent:'center',
         marginHorizontal:10,
      },
      backimg :
      {
        height:"100%",
        width:"100%"
      }
  }
);
