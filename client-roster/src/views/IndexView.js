import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ClientContext from '../context/ClientContext';

const IndexView = () => {
  const { data, addClientDetail } = useContext(ClientContext);

  return (
    <View>
      <Text>Index View</Text>
      <Button
        title="Add New Client"
        onPress={addClientDetail}
      />
      <FlatList
        data={data}
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
