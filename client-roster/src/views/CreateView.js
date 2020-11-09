import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const CreateView = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

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
      <Button title="Add New Client" />
    </View>
  )
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

export default CreateView;
