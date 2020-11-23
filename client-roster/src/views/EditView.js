import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Context } from '../context/ClientContext';

const EditView = ({ navigation }) => {
  const { state } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === navigation.getParam('id'));

  const [name, setName] = useState(clientDetail.name);
  const [email, setEmail] = useState(clientDetail.email);
  const [phone, setPhone] = useState(clientDetail.phone);
  const [address, setAddress] = useState(clientDetail.address);
  const [balance, setBalance] = useState(clientDetail.balance);

  return <View style={styles.container}>
    <Text style={styles.label}>Edit Name:</Text>
    <TextInput
      style={styles.input}
      value={name}
      onChangeText={(newName) => setName(newName)}
    />
    <Text style={styles.label}>Edit Email:</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={(newEmail) => setEmail(newEmail)}
    />
    <Text style={styles.label}>Edit Phone:</Text>
    <TextInput
      style={styles.input}
      value={phone}
      onChangeText={(newPhone) => setPhone(newPhone)}
    />
    <Text style={styles.label}>Edit Address:</Text>
    <TextInput
      style={styles.input}
      value={address}
      onChangeText={(newAddress) => setAddress(newAddress)}
    />
    <Text style={styles.label}>Edit Balance:</Text>
    <TextInput
      style={styles.input}
      value={balance}
      onChangeText={(newBalance) => setBalance(newBalance)}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
  label: {
    fontSize: 30,
    marginBottom: 5,
    marginLeft: 5,
    textAlign: 'center'
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 25,
    padding: 5,
    margin: 5,
    textAlign: 'center'
  }
});

export default EditView;
