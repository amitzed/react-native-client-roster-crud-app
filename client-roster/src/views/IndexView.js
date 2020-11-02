import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/ClientContext';

const IndexView = () => {
  const { state, addClientDetail } = useContext(Context);

  return (
    <View>
      <Button
        title="Add New Client"
        onPress={addClientDetail}
      />
      <FlatList
        data={state}
        keyExtractor={(clientDetail) => clientDetail.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <AntDesign name="deleteuser" style={styles.icon} />
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexView;
