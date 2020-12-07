import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/ClientContext';
import ClientDetailForm from '../components/ClientDetailForm';

const EditView = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state, editClientDetail } = useContext(Context);

  const clientDetail = state.find((clientDetail) => clientDetail.id === id);

  return (
    <ClientDetailForm
      initialValues={{
        name: clientDetail.name,
        email: clientDetail.email,
        phone: clientDetail.phone,
        address: clientDetail.address,
        balance: clientDetail.balance
      }}
      onSubmit={(name, email, phone, address, balance) => {
        editClientDetail(id, name, email, phone, address, balance, () => navigation.pop())
      }}
    />
  )
}

const styles = StyleSheet.create({});

export default EditView;
