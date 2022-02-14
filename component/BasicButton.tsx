import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { btnDisableColorGradient } from '../base/utility/ColorUtils';

interface BasicButtonProps extends ButtonProps {
    style?: any,
    containerStyle?: any,
    textStyle?: any,
    title: string,
    onPress: any,
    colorsGradient: any,
    disabled?: boolean,
    loading?: boolean,
}
export default function BasicButton(props: BasicButtonProps) {
    const { disabled, colorsGradient, loading, style, textStyle, containerStyle } = props

    return (
        <Button
            touchSoundDisabled
            type="solid"
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: disabled ? btnDisableColorGradient : colorsGradient,
                start: { x: 0, y: 0.9 },
                end: { x: 1, y: 0.0 },
            }}
            loading={loading}
            titleStyle={textStyle}
            containerStyle={[{ height: 48 }, style, containerStyle]}
            {...props}
        />
    )
}

