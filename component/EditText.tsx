import React from "react";
import { Image, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { inputBorder, placeholderColor, whiteColor } from '../base/utility/ColorUtils';
import { CaptionText, NormalText } from '../base/utility/FontSize';
import { moderateScale, scale } from "../base/utility/ScalingUtils";

interface EditTextProps extends TextInputProps {
    containerStyle?: any,
    imageStyle?: any,
    leftImage?: any,
    editable?: any,
    labelText?: any
    labelStyle?: any
    borderStyle?: any
    inputStyle?: any
    errorStyle?: any
    error?: any
    inputContainerStyle?: any
    onChangeText: any,
    placeholder?: any,
    inputRef?: any,
    rightImage?: any
    onPressRightImage?: any,
    mandatory?: boolean,
    leftIcon?: any,
    rightIcon?: any,
}

export function EditText(props: EditTextProps) {

    const { containerStyle, imageStyle, leftImage, labelText, labelStyle, editable = true, inputRef, onPressRightImage, leftIcon, rightIcon,
        borderStyle, inputStyle, errorStyle, error, inputContainerStyle, placeholder, onChangeText, rightImage, mandatory } = props;

    return (
        <View
            style={[styles.containerStyle, containerStyle]}
        >
            {labelText ?
                <View style={{ flexDirection: "row" }}>
                    < Text
                        style={[styles.labelStyle, labelStyle, { fontWeight: 'bold' }]}
                    >{labelText}</Text>

                    {mandatory && < Text
                        style={[styles.mandatory,]}
                    > * </Text>}
                </View> : null}

            <View
                style={[styles.inputContainerStyle, {
                    backgroundColor: editable ? whiteColor : "#F9F9F9",
                }, inputContainerStyle]}
            >
                {leftIcon ? leftIcon : leftImage && <Image
                    style={[styles.imageStyle, imageStyle]}
                    source={leftImage}
                />}

                <TextInput
                    {...props}
                    ref={inputRef}
                    style={[styles.inputStyle, { color: editable ? "#111111" : "#111111" }, inputStyle]}
                    returnKeyType="done"
                    placeholderTextColor={placeholderColor}
                    allowFontScaling={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
                {(rightIcon || rightImage) && <TouchableOpacity
                    onPress={onPressRightImage}
                >
                    {rightIcon ? rightIcon : <Image
                        style={[styles.imageStyle, imageStyle]}
                        source={rightImage}
                    />}
                </TouchableOpacity>}

            </View>
            <View
                style={[styles.borderStyle, borderStyle]}
            />
            <Text
                style={[styles.errorStyle, errorStyle]}
            >{!(error == "" || error == undefined || error == null) ? error : ""}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    containerStyle: {
    },
    inputContainerStyle: {
        flexDirection: "row",
        borderWidth: scale(2),
        borderRadius: scale(4),
        marginTop: scale(5),
        padding: scale(9),
        borderColor: inputBorder,
        height: moderateScale(50),
    },
    imageStyle: {
        width: scale(30),
        height: scale(30),
        marginRight: 10,
    },
    labelStyle: {
        fontSize: NormalText,
        color: placeholderColor,
        marginLeft: scale(5),
    },
    errorStyle: {
        color: "red",
        fontSize: CaptionText,
        marginLeft: 5,
        padding: scale(2)
    },
    borderStyle: {
    },
    inputStyle: {
        flex: 1,
        fontSize: scale(13),
        paddingVertical: 0,
    },
    mandatory: {
        color: "red"
    }
});
