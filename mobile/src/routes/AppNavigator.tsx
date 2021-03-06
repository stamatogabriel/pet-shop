import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard';
import AccountScreen from '../screens/Account';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard'>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator