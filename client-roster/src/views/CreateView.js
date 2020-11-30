import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/ClientContext';
import ClientDetailForm from '../components/ClientDetailForm';

const CreateView = ({ navigation }) => {

  const { addClientDetail } = useContext(Context);

  return (
    <ClientDetailForm
      onSubmit={(name, email, phone, address, balance) => {
        addClientDetail(name, email, phone, address, balance, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({});

export default CreateView;
