import { Text, SafeAreaView, StyleSheet, ScrollView, ImageBackground , Image, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
   const {container, image, fontstyle, innerview, title, backimg} = Styles;
  return (
   <ImageBackground source={{uri:'https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg'}} style={backimg} resizeMode="stretch"> 
   <Text style = {title}>Food Menu</Text>
    <ScrollView>
        <SafeAreaView >    
            <View style={container}>
                <Text style={fontstyle}>Burger</Text>
                  <ScrollView horizontal={true}>
                    <View style={innerview}>
                        <Image source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR_neWPvDcXmyx75QsU4yhYtaxM4BJAnkRw&s')}} resizeMode='stretch' style={image}/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                       <Image source={{uri:('https://riverlounge.ae/wp-content/uploads/2024/11/DSC05200.webp')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://img.freepik.com/premium-photo/homemade-burgers_136595-24588.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                  </ScrollView>
            </View>
        </SafeAreaView>
        <SafeAreaView >
            <View style={container}>
                <Text style={fontstyle}>Pizza</Text>
                  <ScrollView horizontal={true}>
                    <View style={innerview}>
                        <Image source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvWRCHjSIE2AgBMXtrAAfHlPMYrA7wxcaVQ&s')}} resizeMode='stretch' style={image}/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://recipes.timesofindia.com/photo/msid-76376557/76376557.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                       <Image source={{uri:('https://www.tastingtable.com/img/gallery/the-real-difference-between-the-most-popular-types-of-pizza/l-intro-1639076963.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://images.prismic.io/eataly-us/527aa8aa-73b6-42f4-89ec-18d96fd88502_ech-quattro-mani-matt-roan-pizza-horizontal-web.jpg?auto=compress,format')}} style={image} resizeMode='stretch'/>
                    </View>
                  </ScrollView>
            </View>
        </SafeAreaView>
        <SafeAreaView >
            <View style={container}>
                <Text style={fontstyle}>Pani Puri</Text>
                  <ScrollView horizontal={true}>
                    <View style={innerview}>
                        <Image source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqDNQdpD8txmbEoPZFdsLqwK5Gp62qsXW7A&s')}} resizeMode='stretch' style={image}/>
                    </View>VQ&s
                    <View style={innerview}>
                        <Image source={{uri:('https://blog.swiggy.com/wp-content/uploads/2024/07/Image-1_Golgappa-1024x538.png')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                       <Image source={{uri:('https://qph.cf2.quoracdn.net/main-qimg-23731a07a2db12772450d404e16efe51-pjlq')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://img-global.cpcdn.com/recipes/3dde0622c71464c2/680x482cq70/panipuri-7-types-of-water-with-4-flavour-of-puries-recipe-main-photo.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                  </ScrollView>
            </View>
        </SafeAreaView>
        <SafeAreaView >
             <View style={container}>
                <Text style={fontstyle}>Pasta</Text>
                  <ScrollView horizontal={true}>
                   <View style={innerview}>
                        <Image source={{uri:('https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta7.jpg')}} resizeMode='stretch' style={image}/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://www.vegrecipesofindia.com/wp-content/uploads/2017/02/white-sauce-pasta-recipe.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                       <Image source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszPFMxgaHsJbKn_kg-j_3psfmKMpS_G7bIA&s')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://5.imimg.com/data5/VE/PG/AY/SELLER-87898992/pasta-500x500.jpeg')}} style={image} resizeMode='stretch'/>
                    </View>
                  </ScrollView>
            </View>
        </SafeAreaView>
        <SafeAreaView >
             <View style={container}>
                <Text style={fontstyle}>PopCorn</Text>
                  <ScrollView horizontal={true}>
                    <View style={innerview}>
                        <Image source={{uri:('https://cdn.shopify.com/s/files/1/0016/6569/5819/files/Your_paragraph_text_2_480x480.png?v=1713379438')}} resizeMode='stretch' style={image}/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://cdn11.bigcommerce.com/s-ejy7yev/images/stencil/1280w/products/406/1217/grandmas-caramel-corn__10226.1648129344.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                       <Image source={{uri:('https://cdnimg.webstaurantstore.com/images/products/large/628194/2226503.jpg')}} style={image} resizeMode='stretch'/>
                    </View>
                    <View style={innerview}>
                        <Image source={{uri:('https://blog.swiggy.com/wp-content/uploads/2024/07/Image-3_Cheese-Popcorn-1024x538.png')}} style={image} resizeMode='stretch'/>
                    </View>
                  </ScrollView>
            </View>
        </SafeAreaView>
    </ScrollView>
  </ImageBackground>  
  );
}


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
//contentoffset ={{x:10,y:10}} //by default scrollview start on the base of x and y value
//declarationRate = {0.5} // we give the value it in the (.0) 
//showsVerticalScrollIndicator={false} //  when we need to off the indicator