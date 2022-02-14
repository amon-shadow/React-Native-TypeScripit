import { Platform, StyleSheet } from "react-native";
import { CaptionText } from './../base/utility/FontSize';
import { scale } from './../base/utility/ScalingUtils';

export const appStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    welcomeMessage: {
        fontSize: 24,
        fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
        textAlign: 'center',
    },
    errorStyle: {
        color: "red",
        fontSize: CaptionText,
        marginLeft: 5,
        padding: scale(2)
    },
    mandatory: {
        color: "red"
    },
    boldFont: {
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    }
});