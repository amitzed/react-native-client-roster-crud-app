import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { Context } from '../context/ClientContext';

const ShowView = ({ navigation }) => {
  const { state } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === navigation.getParam('id'));

  return (
    <View style={styles.background}>
      <MaterialIcons name="people" style={styles.brandIcon} />
      <Text style={styles.details, styles.name}>{clientDetail.name}</Text>
      <Text style={styles.details}>{clientDetail.address}</Text>
      <Text style={styles.details}><Text style={styles.textIcon}>(P)</Text> {clientDetail.phone}</Text>
      <Text style={styles.details}><Text style={styles.textIcon}>(e)</Text> {clientDetail.email}</Text>
      <Text style={styles.details}>Balance Due: <Text style={styles.balanceDetails}>${clientDetail.balance}</Text></Text>
    </View>
  )
}

ShowView.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <AntDesign name="edit" size={35} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5c58f',
    height: '100%',
    padding: 25
  },
  brandIcon: {
    textAlign: 'center',
    fontSize: 50,
    color: '#b8595c',
    marginBottom: 10
  },
  textIcon: {
    fontWeight: 'bold',
    color: '#12a48d'
  },
  details: {
    fontSize: 18,
    color: '#b8595c',
    marginVertical: 20,
    textAlign: 'center'
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    color: '#0684be',
    fontWeight: 'bold'
  },
  balanceDetails: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'red'
  }
});

export default ShowView;
