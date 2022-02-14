import React from 'react';
import { View, Image, Text } from 'react-native';
import { noDataFound } from '../base/utility/MessagesUtils';
import { scale } from '../base/utility/ScalingUtils';

interface ErrorViewProps {
    image?: any,
    message: string,
    emptyListStyle?: any,

}

export default function ErrorView(props: ErrorViewProps) {
    const { emptyListStyle, message, image = require("../img/data-not-found.png") } = props;
    return (
        <View
            style={[{
                flex: 1,
                justifyContent: "center",
            }, emptyListStyle]}
        >
            <View style={{
                alignItems: "center"
            }}>
                <Image
                    style={{
                        width: scale(200),
                        height: scale(200),
                    }}
                    source={image}
                />
                <Text
                    style={{
                        flex: 1,
                        marginTop: 15,
                    }}
                >
                    {(message && message) || noDataFound}
                </Text>
            </View>
        </View>
    );
}