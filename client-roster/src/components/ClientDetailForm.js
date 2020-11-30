import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ClientDetailForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [phone, setPhone] = useState(initialValues.phone);
  const [address, setAddress] = useState(initialValues.address);
  const [balance, setBalance] = useState(initialValues.balance);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Client Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Enter Client Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Enter Client Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Text style={styles.label}>Enter Client Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.label}>Balance Due:</Text>
      <TextInput
        style={styles.input}
        value={balance}
        onChangeText={(text) => setBalance(text)}
      />
      <Button
        title="Save Client Detail"
        onPress={() => onSubmit(name, email, phone, address, balance)}
      />
    </View>
  )
}

ClientDetailForm.defaultProps={
  initialValues: {
    name: '',
    email: '',
    phone: '',
    address: '',
    balance: ''
  }
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
    margin: 5
  }
});

export default ClientDetailForm;
