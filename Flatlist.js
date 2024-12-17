import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

const data = [{
  id : 1,
  name : 'abc'
},
{
  id : 2,
  name : 'vdd'
},
{
  id : 3,
  name : 'vsd'
},
{
  id : 4,
  name : 'fmm'
},
{
  id : 5,
  name : 'oka'
},
]


  return (
      <SafeAreaView style={{marginVertical:50, height:"100%",  width:"100%"}}>  
        <FlatList data={data}
        renderItem={({item})=><Text style={{backgroundColor:'skyblue', padding:10, margin:10, textAlign:'center', color:'white', fontSize:30, fontWeight:600}}>{item.name}</Text>}
        />
      </SafeAreaView>
  );
}


