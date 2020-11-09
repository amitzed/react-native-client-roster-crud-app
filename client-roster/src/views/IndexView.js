import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/ClientContext';

const IndexView = ({ navigation }) => {
  const { state, deleteClientDetail } = useContext(Context);

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
                <Text style={styles.name}>{item.name} - {item.id}</Text>
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
    height: '100%'
  },
  brandIcon: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 50,
    color: '#b8595c'
  },
  brand: {
    color: '#0684be',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: '#12a48d',
    borderTopWidth: 1
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

// Color Theme:
// #12a48d	rgb(18, 164, 141)
// #b8595c	rgb(184, 89, 92)
// #a78e9f	rgb(167, 142, 159)
// #0684be	rgb(6, 132, 190)
// #f5c58f	rgb(245, 197, 143)

export default IndexView;
