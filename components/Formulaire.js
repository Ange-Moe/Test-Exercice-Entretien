
import React, { Component } from "react";
import { Placeholder } from "react-bootstrap";

import {TextInput, StyleSheet, View, Text, Alert} from 'react-native';
import { Button } from 'react-native-paper';


export default class Search extends Component{
constructor(props){
    super(props)
    this.state={
        Email:"",
        Password:""
        
    }
}

setEmail(Email){
    this.setState({Email})
}

setPassword(Password){
    this.setState({Password})
}

render(){
    return(
        
        <View>
        <Text>Email{'\n'}
        </Text>
        <TextInput
        label="Email"
        onChangeText={(text) => this.setEmail(text)}
        style={styles.input}
        placeholder="Email"
        value={this.state.Email}
        />
        <Text>{'\n'}
        </Text>
        <Text>Mot de passe{'\n'}
        </Text>
        <TextInput
        label="Mot de passe"
        onChangeText={(text) => this.setPassword(text)}
        style={styles.input}
        placeholder="Mot de passe"
        value={this.state.Password}
        
        
        />
        
        <Text style={styles.align}>Mot de passe oublié ?</Text>
        
    <Button style={styles.button} mode="contained" buttonColor="orange" onPress={() => Alert.alert('Simple Button pressed')}>
    Connexion
    </Button>

        
        
        </View>
    )
}

}

const styles = StyleSheet.create({
    input: {
      height: 50,
      borderWidth: 1,
      padding: 10,
      borderRadius:30,
      width:275,
      borderColor: '#fff',
      shadowColor: "black",
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      
      
      
    },

    align:{
        textAlign: "right",
        opacity: 0.5,
        
    },

    button:{
        marginVertical:30,
        marginHorizontal: 50
        
        
        

        
        
    }


  });