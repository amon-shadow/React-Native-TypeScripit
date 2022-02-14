import NetInfo from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import {
    Animated, AppState, Easing, StyleSheet, View
} from "react-native";

const animationConstants = {
    DURATION: 800,
    TO_VALUE: 4,
    INPUT_RANGE: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    OUTPUT_RANGE: [0, -15, 0, 15, 0, -15, 0, 15, 0]
};

export default function InternetStatus() {


    let animation: any = new Animated.Value(0);
    const [isConnected, setIsConnected] = React.useState(true);
    const interpolated = animation.interpolate({
        inputRange: animationConstants.INPUT_RANGE,
        outputRange: animationConstants.OUTPUT_RANGE
    });
    const animationStyle = {
        transform: [{ translateX: interpolated }]
    };

    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(setNetworkStatus);
        AppState.addEventListener("change", handleAppStateChange);

        // Specify how to clean up after this effect:
        return function cleanup() {
            unsubscribe();
            AppState.removeEventListener("change", handleAppStateChange);
        };
    });

    function setNetworkStatus(status: any) {
        setIsConnected(status.isConnected);
        if (status.isConnected) {
            triggerAnimation();
        }
    };

    function handleAppStateChange(nextAppState: any) {
        if (nextAppState === "active") {
            NetInfo.fetch().then(setNetworkStatus);
        }
    };

    function triggerAnimation() {
        if (animation) {
            animation.setValue(0);
            Animated.timing(animation, {
                duration: animationConstants.DURATION,
                toValue: animationConstants.TO_VALUE,
                useNativeDriver: true,
                easing: Easing.bounce
            }).start();
        }
    };

    return !isConnected ? (
        <View style={[styles.container]}>
            <Animated.Text style={[styles.offlineText, animationStyle]}>
                {'internetError'}
            </Animated.Text>
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        backgroundColor: '#424242'
    },
    offlineText: {
        color: 'white',
        padding: 10,
        textAlign: 'center'
    }
})
