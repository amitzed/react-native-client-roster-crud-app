import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/ClientContext';

const IndexView = () => {
  const { state, addClientDetail } = useContext(Context);

  return (
    <View>
      <Text>Index View</Text>
      <Button
        title="Add New Client"
        onPress={addClientDetail}
      />
      <FlatList
        data={state}
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
