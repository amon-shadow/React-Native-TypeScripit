import React from 'react';
import { FlatList, Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { noDataFound } from '../base/utility/MessagesUtils';
import { scale } from '../base/utility/ScalingUtils';

interface FlatListViewProps {
    data: Array<any> | null,
    renderItem: any
    ListEmptyComponent?: any | null,
    onEndReached?: ((info: { distanceFromEnd: number }) => void) | null,
    onEndReachedThreshold?: number | null
    onRefresh?: (() => void) | null
    refreshing?: boolean | null
    horizontal?: boolean
    numColumns?: any
    extraData?: any
    listStyle?: StyleProp<ViewStyle>
    keyExtractor: string
    noDataMessage?: string
}

export default function FlatListView(props: FlatListViewProps) {
    const appState = useSelector((state: any) => state.appReducer, shallowEqual);
    const { keyExtractor } = props;
    return (
        <FlatList
            style={[props.listStyle]}
            data={props.data}
            keyExtractor={(item: any, index: number) => keyExtractor ? item[keyExtractor] : index.toString()}
            renderItem={props.renderItem}
            horizontal={props.horizontal}
            numColumns={props.numColumns}
            extraData={props.extraData}
            ListEmptyComponent={!appState.showLoader && !props.refreshing && (props.ListEmptyComponent || noDataFoundView(props.noDataMessage))}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={props.onEndReachedThreshold}
            onRefresh={props.onRefresh}
            refreshing={props.refreshing}
        />
    );
}

FlatListView.defaultsProps = {
    ListEmptyComponent: noDataFoundView(),
    onEndReached: () => { },
    onRefresh: () => { },
    onEndReachedThreshold: 0.5,
    refreshing: false,
    horizontal: true,
    listStyle: {
        paddingBottom: scale(50),
    }
}

export function noDataFoundView(message?: any) {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 100,
            }}
        >
            <Image
                source={require("../img/user.png")}
            />
            <Text
                style={{
                    flex: 1,
                    marginTop: 15,
                }}
            >
                {message || noDataFound}
            </Text>
        </View>
    );
}
