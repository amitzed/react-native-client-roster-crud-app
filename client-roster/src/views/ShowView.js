import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Context } from '../context/ClientContext';

const ShowView = ({ navigation }) => {
  const { state } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{clientDetail.name}</Text>
      <Text>{clientDetail.address}</Text>
      <Text>(p) {clientDetail.phone}</Text>
      <Text>(e) {clientDetail.email}</Text>
      <Text>Balance Due: ${clientDetail.balance}</Text>
    </View>
  )
}

ShowView.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <AntDesign name="edit" size={35} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({});

export default ShowView;
