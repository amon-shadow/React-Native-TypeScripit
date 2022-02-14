import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { isInternetLost } from '../action/AppActions';
import { DashBoardScreen } from '../base/utility/RouteUtils';

function SplashScreen() {
    const appDispatch = useDispatch();
    const navigation = useNavigation()
    const appState = useSelector((state: any) => state.appReducer, shallowEqual);

    useEffect(() => {
        const timer = setTimeout(async () => {
            navigation.navigate(DashBoardScreen)
        }, 1500);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener((status: any) => {
            if (status.isConnected) {
                if (appState.isInternetLost) {
                    appDispatch(isInternetLost(false));
                }
            } else {
                appDispatch(isInternetLost(true));
            }
        });

        // Specify how to clean up after this effect:
        return function cleanup() {
            unsubscribe();
        };
    });

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        </View>
    );
}

SplashScreen.navigationOptions = {
    header: null
}

export default SplashScreen;
