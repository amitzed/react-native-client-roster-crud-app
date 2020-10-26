import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ClientContext from '../context/ClientContext';

const IndexView = () => {
  const clientDetails = useContext(ClientContext);

  return (
    <View>
      <Text>Index View</Text>
      <FlatList
        data={clientDetails}
        keyExtractor={(clientDetail) => clientDetail.name}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default IndexView;
