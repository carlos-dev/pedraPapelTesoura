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
        
        <View style={styles.main} >
          <View style={styles.btn} >
            <Button title="pedra" onPress={() => {this.jokenpo('pedra')}} />
          </View>
          
          <View style={styles.btn}>
            <Button title="papel" onPress={() => {this.jokenpo('papel')}} />
          </View>

          <View style={styles.btn}>
            <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}} />
          </View>
        </View>

        <View style={styles.palco}>
          <Icone escolha={this.state.escolhaComputador} jogador='computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='usuário'></Icone>
       

          <Text style={styles.result}>{this.state.resultado}</Text>
        </View>
        
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

class Icone extends Component {
  render() {
    if(this.props.escolha ==  'pedra') {
      return (
        <View>
          <Text>{this.props.escolha}</Text>
          <Image source={require('./assets/pedra.png')} />
        </View>
      )
    } else if (this.props.escolha ==  'papel') {
      return (
        <View>
          <Text>{this.props.escolha}</Text>
          <Image source={require('./assets/papel.png')} />
        </View>
      )
    } else if (this.props.escolha ==  'tesoura') {
      return (
        <View>
          <Text>{this.props.escolha}</Text>
          <Image source={require('./assets/tesoura.png')} />
        </View>
      )
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  btn: {
    width: 90
  },
  palco: {
    alignItems: 'center'
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#437d66'
  }
});
