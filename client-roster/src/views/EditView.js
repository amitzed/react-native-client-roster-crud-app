import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/ClientContext';
import ClientDetailForm from '../components/ClientDetailForm';

const EditView = ({ navigation }) => {
  const { state } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === navigation.getParam('id'));

  return (
    <ClientDetailForm
      onSubmit={(name, email, phone, address, balance) => {
        console.log(name, email, phone, address, balance);
      }}
    />
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
    margin: 5,
    textAlign: 'center'
  }
});

export default EditView;
