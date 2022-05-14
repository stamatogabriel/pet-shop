import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { profile } = useSelector((state: RootState) => state.user)

  console.log(profile)
  return <View />;
}

export default Dashboard;