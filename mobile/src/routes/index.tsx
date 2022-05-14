import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigators';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const AppRoute = () => {
    const { signed } = useSelector((state: RootState) => state.auth)

    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                signed ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute