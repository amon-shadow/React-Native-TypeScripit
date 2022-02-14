import React from 'react';
import Spinner from 'react-native-spinkit';
import { orangeColor } from '../base/utility/ColorUtils';
import { StyleSheet } from 'react-native';

interface LoaderProps {
    loading?: boolean
}

function LoaderAnimation(props: LoaderProps) {

    return (
        <Spinner isVisible={true} size={50} type={"Bounce"} color={orangeColor} />
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35400',
    },

    spinner: {
        marginBottom: 50
    },

    btn: {
        marginTop: 20
    },

    text: {
        color: "white"
    }
});

export default LoaderAnimation;