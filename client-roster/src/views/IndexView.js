import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/ClientContext';

const IndexView = ({ navigation }) => {
  const { state, deleteClientDetail, getClientDetails } = useContext(Context);

  useEffect(() => {
    getClientDetails();

    navigation.addListener('didFocus', () => {
      getClientDetails();
    });

    return () => {
      listener.remove();
    };
  }, [])

  return (
    <View style={styles.background}>
      <MaterialIcons name="people" style={styles.brandIcon} />
      <Text style={styles.brand}>
        Client Roster
      </Text>
      <FlatList
        data={state}
        keyExtractor={(clientDetail) => clientDetail.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => deleteClientDetail(item.id)}
                >
                  <AntDesign name="deleteuser" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexView.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
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
    color: '#b8595c'
  },
  brand: {
    color: '#0684be',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '700'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: '#12a48d',
    borderWidth: 1
  },
  name: {
    fontSize: 18,
    color: '#b8595c'
  },
  icon: {
    fontSize: 28,
    color: '#b8595c'
  }
});

export default IndexView;
