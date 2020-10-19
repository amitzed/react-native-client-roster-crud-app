import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ClientContext from '../context/ClientContext';

const IndexView = () => {
  const value = useContext(ClientContext);

  return (
    <View>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default IndexView;
