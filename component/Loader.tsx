import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { orangeColor } from '../base/utility/ColorUtils';
import { scale } from '../base/utility/ScalingUtils';
import LoaderAnimation from './LoaderAnimation';

interface LoaderProps {
    loading?: boolean
}

function Loader(props: LoaderProps) {
    const { loading } = props;

    return (
        <Spinner
            visible={loading}
            // textContent={'Loading...'}
            color={orangeColor}
            animation="fade"
            size="large"
            customIndicator={<LoaderAnimation />}
            textStyle={{
                color: orangeColor,
                fontWeight: 'normal',
                fontSize: scale(14),
                margin: 0,
            }}
        />
    );
}

export default Loader;