import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import TeamsList from './src/components/TeamsList';

class App extends Component {
  render() {
    const title = 'Copa do Mundo 2018';
    return (
      <View style={styles.itemsContainer}>
        <Header title={title} />
        <Text style={styles.titulo}>Mais um titulo</Text>
        <TeamsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
  },
  titulo: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    borderRadius: 2,
  },
});

export default App;