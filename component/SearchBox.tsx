import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { placeholderColor } from '../base/utility/ColorUtils';
import { CaptionText, NormalText } from '../base/utility/FontSize';
import { moderateScale, scale } from '../base/utility/ScalingUtils';
import AutocompleteText from './AutoCompleteText';


interface SearchBoxProps {
    headerText: string,
    labelText: string,
    value: any,
    hint: string,
    dataList: any,
    onChangeText?: any,
    onSelect: any,
    labelKey?: string,
    subKey?: string,
    zindex?: number
    error?: string
    mandatory?: boolean
}

export function SearchBox(props: SearchBoxProps) {
    const { headerText, hint, dataList, onChangeText, onSelect, labelKey, zindex, value, subKey = "", labelText, mandatory, error } = props;
    const [hideResult, setHideResult] = useState<boolean>(true);
    const [query, SetQuery] = useState<string>("");
    const [searchedResult, SetSearchedResult] = useState<Array<any>>([]);

    useEffect(() => {
        const filterData = () => {
            let results = []
            try {
                if (query == '' || query === undefined) {
                    results = dataList && (dataList.length > 5 ? dataList.slice(0, 5) : dataList);
                } else
                    results = dataList && dataList.filter((item: any) => (
                        (labelKey ? item[labelKey] : item).toLowerCase().search(query.toLowerCase()) >= 0)
                    ).slice(0, 5);
            } catch (error) {
                results = dataList && (dataList.length > 5 ? dataList.slice(0, 5) : dataList);
            }
            SetSearchedResult(results);
        };
        filterData();
    }, [query])

    return (
        <View
            style={[{
                marginTop: 6,
            }, Platform.OS === 'ios' && { zIndex: zindex }]}
        >
            {labelText ?
                <View style={{ flexDirection: "row" }}>
                    < Text
                        style={[styles.labelStyle, { fontWeight: 'bold' }]}
                    >{labelText}</Text>

                    {mandatory && < Text
                        style={[styles.mandatory,]}
                    > * </Text>}
                </View> : null}
            <View
                style={[
                    Platform.OS === 'ios' && { zIndex: zindex }]}
            >
                <AutocompleteText
                    inputContainerStyle={Platform.OS === 'ios' ? { height: scale(40), borderWidth: 1, borderColor: "#777", } : null}
                    data={searchedResult}
                    defaultValue={(value && labelKey) ? value[labelKey] : value}
                    hideResults={hideResult}
                    placeholder={hint}
                    onChangeText={(text: any) => {
                        onChangeText && onChangeText(text);
                        SetQuery(text);
                        setHideResult(false);
                    }}
                    keyExtractor={(item: any, index: number) => (index.toString())}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                onSelect(item);
                                setHideResult(true);
                            }}
                        >
                            <View
                                pointerEvents="none"
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        padding: moderateScale(11),
                                        color: "black",
                                        height: scale(40),
                                        backgroundColor: '#fff',
                                        borderBottomColor: '#000',
                                        borderBottomWidth: moderateScale(1),
                                    }}>{!labelKey ? JSON.stringify(item).replace(/\"/g, "") : (item[labelKey])}</Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>
            <Text
                style={[styles.errorStyle]}
            >{!(error == "" || error == undefined || error == null) ? error : ""}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: NormalText,
        color: placeholderColor,
        marginLeft: scale(5),
    },
    mandatory: {
        color: "red"
    },
    errorStyle: {
        color: "red",
        fontSize: CaptionText,
        marginLeft: 5,
        padding: scale(2)
    },
})