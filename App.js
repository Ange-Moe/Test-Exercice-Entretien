import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Search from './components/Formulaire';



export default class App extends Component {


render(){
return(

<View style={style.all}>
    <Image style={style.img} source={require('./img/Aaron.jpg')} />
    <Text style={style.title}>Bienvenue</Text>
    <Text>{'\n'}
        {'\n'}</Text>
    <Search/>
    <Text>Pas encore membre? <Text style={style.mot}>S'inscrire</Text></Text>
</View>


)
}
}

const style = StyleSheet.create({

all:{
margin:50,
justifyContent: 'center', 
alignItems: 'center',
},

img:{
  height:150,
  width:150,
},
title:{
  color: '#2f987d',
  fontSize: 50
},

mot:{
color: '#2f987d'
}
});

