import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import appDrawer from './app_components/DrawerComponent';
import { setTopLevelNavigator } from './base/utility/NavigationService';
import NoticeBoardScreen from './screen/NoticeBoardScreen';
import SplashScreen from './screen/SplashScreen';


const Stack = createStackNavigator();

const AppContainer: any = () => {
    return (
        <NavigationContainer
            ref={(navigatorRef: any) => {
                setTopLevelNavigator(navigatorRef);
            }}
        >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={appDrawer} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Notice" component={NoticeBoardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { AppContainer };
