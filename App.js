/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Import necessary components from React and React Navigatio

import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Welcome from './screens/Welcom';

const mainStack=createNativeStackNavigator()
const App = () => {

   

    return(
        
        <View style={{backgroundColor:'#ffff', flex: 1}}>

                <NavigationContainer>
                  <mainStack.Navigator initialRouteName='Register'>
                    <mainStack.Screen name='Register' component={Register}></mainStack.Screen>
                    <mainStack.Screen name='Login' component={Login}></mainStack.Screen>
                    <mainStack.Screen name='Welcome' component={Welcome}></mainStack.Screen>
                    <mainStack.Screen name='Home' component={Home}></mainStack.Screen>
                  </mainStack.Navigator>
                </NavigationContainer>
            
            
        </View>
    ); 
    
};

export default App;
// function LogIn({navigation}){
//   //const data = [
//     //         { id: '1', name: 'Item 1' },
//     //         { id: '2', name: 'Item 2' },
//     //         { id: '3', name: 'Item 3' },
//     //         { id: '4', name: 'Item 4' },
//     //     ];
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//     //<View>
// //       <FlatList
// //           data={data}
// //           renderItem={ ({item}) => 
// //               <View>
// //                   <Text style={{color: 'black'}}>{item.name}</Text>
// //               </View>
// //           }
// //       ></FlatList>
// //       <Text>Hell</Text>
// //   </View>
// return (
//   <View style={styles.container}>
//     <View style={styles.header}>
//     <Image
//         source={require('./Image/download.png')}  // Replace with your actual image path
//         style={{ width: 200, height: 200, alignSelf: 'center', marginTop:50}}
//       />
//     </View>
//     <View style={styles.main}>
//     <Text style={{marginLeft:50,color:"white"}}>Email</Text>
//       <TextInput style={styles.textInput} 
//         placeholder="Email Address"
//         placeholderTextColor="white"
//         onChangeText={(text) => setEmail(text)}
//         value={email} />
// <Text style={{marginLeft:50,color:"white"}}>LOGIN</Text>
//       <TextInput style={styles.textInput} 
//         placeholder="Password"
//         placeholderTextColor="white"
//         onChangeText={(text) => setPassword(text)}
//         value={password} />
// <TouchableOpacity
// onPress={() => navigation.navigate('Home')}>

//   <Text style={styles.buttonText}>LOGIN</Text>
// </TouchableOpacity>
//       {/* <Button title="Login" /> */}
//     </View>
//     <View style={styles.footer}>
//       <Text>Hello</Text>
//     </View>
//   </View>

// );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: "#0000FF",
// },
// header: {
//   flex: 0.5,
// },
// main: {
//   flex: 0.3,
//   justifyContent:'center',
// },
// textInput: {
//   width: 200,
//   height: 40,
//   borderWidth: 1,
//   padding: 8,
  
//   margin:20,justifyContent:'center',marginLeft:100,
//   color: 'white',
//   backgroundColor: '#0047AB',
// },
// buttonText: {
//   color: 'white',
//   textAlign: 'center',
//   fontSize: 16,
//   backgroundColor: '#0047AB',
//   height: 40,
//   borderWidth: 1,
//   padding: 8,
//   marginBottom:100,
// },

// footer: {
//   flex: 0.2
// },
// })



