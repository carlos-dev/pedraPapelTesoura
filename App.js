import React , { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  jokenpo(escolhaUsuario) {
    let randomNumber      = Math.floor(Math.random() * 3 );
    //let escolhaComputador = '';
    let escolhaComputador = ['pedra', 'papel', 'tesoura'];
    var resultado = '';

    // switch(randomNumber) {
    //   case 0: escolhaComputador = 'pedra'; break;
    //   case 1: escolhaComputador = 'papel'; break;
    //   case 2: escolhaComputador = 'tesoura'; break;
    // }

    if (escolhaComputador[randomNumber] == 'pedra') {
      if(escolhaUsuario == 'pedra') {
        resultado = 'empate';
      } 
      
      if (escolhaUsuario == 'papel') {
        resultado = 'usuário ganhou';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'computador ganhou';
      }
    }

    if (escolhaComputador[randomNumber] == 'papel') {
      if(escolhaUsuario == 'pedra') {
        resultado = 'computador ganhou';
      } 
      
      if (escolhaUsuario == 'papel') {
        resultado = 'empate';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'usuário ganhou';
      }
    }

    if (escolhaComputador[randomNumber] == 'tesoura') {
      if(escolhaUsuario == 'pedra') {
        resultado = 'usuário ganhou';
      } 
      
      if (escolhaUsuario == 'papel') {
        resultado = 'computador ganhou';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'empate';
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador: escolhaComputador[randomNumber],
      resultado
    }); 
  }

  render() {
    return ( 
      <View style={styles.container}>
        
        <Topo></Topo>
        <View></View>

        <View></View>
        <Text>Escolha do computador {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário:  {this.state.escolhaUsuario}</Text>
        <Text>Resultado {this.state.resultado}</Text>
        <Button title="pedra" onPress={() => {this.jokenpo('pedra')}} />
        <Button title="papel" onPress={() => {this.jokenpo('papel')}} />
        <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}} />
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return(
      <View>
        <Image source={require('./assets/jokenpo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
