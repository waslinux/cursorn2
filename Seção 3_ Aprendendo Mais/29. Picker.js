import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.9},
        {key: 2, nome: 'Brigadeiro', valor: 20.9},
        {key: 3, nome: 'Calabresa', valor: 18.0},
      ],
    };
  }

  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizzas</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({pizza: itemValue})
          }>
          {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>
          Você excolheu: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
         R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  logo: {
    textAlign: 'center',
    fontSize: 25,
  },
  pizzas: {
    marginTop:15,
    backgroundColor: '#ddd',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default App;
