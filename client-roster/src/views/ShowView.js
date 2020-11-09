import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/ClientContext';

const ShowView = ({ navigation }) => {
  const { state } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{clientDetail.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ShowView;
