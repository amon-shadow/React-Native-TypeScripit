import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    ViewPropTypes as RNViewPropTypes
} from 'react-native';
import { grayColor, inputBorder, placeholderColor, whiteColor } from '../base/utility/ColorUtils';
import { moderateScale } from '../base/utility/ScalingUtils';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

class AutocompleteText extends Component {
    static propTypes = {
        ...TextInput.propTypes,
        /**
         * These styles will be applied to the container which
         * surrounds the autocomplete component.
         */
        containerStyle: ViewPropTypes.style,
        /**
         * Assign an array of data objects which should be
         * rendered in respect to the entered text.
         */
        data: PropTypes.array,
        /**
         * Set to `true` to hide the suggestion list.
         */
        hideResults: PropTypes.bool,
        /*
         * These styles will be applied to the container which surrounds
         * the textInput component.
         */
        inputContainerStyle: ViewPropTypes.style,
        /*
         * Set `keyboardShouldPersistTaps` to true if RN version is <= 0.39.
         */
        keyboardShouldPersistTaps: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        /*
         * These styles will be applied to the container which surrounds
         * the result list.
         */
        listContainerStyle: ViewPropTypes.style,
        /**
         * These style will be applied to the result list.
         */
        listStyle: ViewPropTypes.style,
        /**
         * `onShowResults` will be called when list is going to
         * show/hide results.
         */
        onShowResults: PropTypes.func,
        /**
         * method for intercepting swipe on ListView. Used for ScrollView support on Android
         */
        onStartShouldSetResponderCapture: PropTypes.func,
        /**
         * `renderItem` will be called to render the data objects
         * which will be displayed in the result view below the
         * text input.
         */
        renderItem: PropTypes.func,
        isFocused: PropTypes.func,
        keyExtractor: PropTypes.func,
        /**
         * `renderSeparator` will be called to render the list separators
         * which will be displayed between the list elements in the result view
         * below the text input.
         */
        renderSeparator: PropTypes.func,
        /**
         * renders custom TextInput. All props passed to this function.
         */
        renderTextInput: PropTypes.func,
        flatListProps: PropTypes.object
    };

    static defaultProps = {
        data: [],
        defaultValue: '',
        keyboardShouldPersistTaps: 'always',
        onStartShouldSetResponderCapture: () => false,
        renderItem: ({ item }) => <View style={styles.itemStyle}><Text >{item}</Text></View>,
        renderSeparator: null,
        renderTextInput: props => <TextInput {...props} />,
        flatListProps: {}
    };

    constructor(props) {
        super(props);
        this.resultList = null;
        this.textInput = null;

        this.onRefListView = this.onRefListView.bind(this);
        this.onRefTextInput = this.onRefTextInput.bind(this);
        this.onEndEditing = this.onEndEditing.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.setState({
            isFocused: true,
        });
    }

    onEndEditing(e) {
        this.props.onEndEditing && this.props.onEndEditing(e);
    }

    onRefListView(resultList) {
        this.resultList = resultList;
    }

    onRefTextInput(textInput) {
        this.textInput = textInput;
    }

    /**
      * Proxy `blur()` to autocomplete's text input.
      */
    onBlur() {
        const { textInput } = this;
        this.setState({
            isFocused: false,
        });
        textInput && textInput.blur();
    }

    /**
     * Proxy `focus()` to autocomplete's text input.
     */
    onFocus() {
        const { textInput } = this;
        this.setState({
            isFocused: true,
        });
        textInput && textInput.focus();
    }

    /**
     * Proxy `isFocused()` to autocomplete's text input.
     */
    isFocused() {
        const { textInput } = this;
        return textInput && textInput.isFocused();
    }

    renderResultList() {
        const {
            data,
            listStyle,
            renderItem,
            keyExtractor,
            renderSeparator,
            keyboardShouldPersistTaps,
            flatListProps,
            onEndReached,
            onEndReachedThreshold
        } = this.props;

        return (
            <FlatList
                ref={this.onRefListView}
                data={data}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                renderSeparator={renderSeparator}
                onEndReached={onEndReached}
                onEndReachedThreshold={onEndReachedThreshold}
                style={[styles.list, listStyle]}
                {...flatListProps}
            />
        );
    }

    renderTextInput() {
        const { renderTextInput, style } = this.props;
        const props = {
            style: [styles.input, style],
            ref: this.onRefTextInput,
            onEndEditing: this.onEndEditing,
            placeholderTextColor: placeholderColor,
            // onBlur: this.onBlur,
            onFocus: this.onFocus,
            ...this.props
        };

        return renderTextInput(props);
    }

    render() {
        const {
            data,
            containerStyle,
            hideResults,
            inputContainerStyle,
            listContainerStyle,
            onShowResults,
            onStartShouldSetResponderCapture
        } = this.props;
        const showResults = data.length > 0;

        // Notify listener if the suggestion will be shown.
        onShowResults && onShowResults(showResults);

        return (
            <View style={[styles.container, containerStyle]}>
                <View style={[styles.inputContainer, inputContainerStyle]}>
                    {this.renderTextInput()}
                </View>
                {!hideResults && (
                    <View
                        style={[styles.listContainerStyle, listContainerStyle]}
                        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
                    >
                        {showResults && this.renderResultList()}
                    </View>
                )}
            </View>
        );
    }
}

const androidStyles = {
    container: {
        marginTop: 2,
    },
    inputContainer: {
        borderRadius: 4,
        padding: 0,
        margin: 0,
        height: moderateScale(50),
        paddingLeft: 6,
        borderWidth: 2,
        borderColor: inputBorder,
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 0,
        paddingBottom: 5,
        fontSize: moderateScale(13),
    },
    list: {
        backgroundColor: whiteColor,
        borderWidth: 1,
        maxHeight: 200,
        marginTop: 0,
        borderColor: grayColor,
        borderRadius: 4,
    },
    itemStyle: {
        height: 40,
        color: "black",
        borderColor: grayColor,
        backgroundColor: whiteColor,
        borderWidth: moderateScale(1),
    },
    listContainerStyle: {
        position: "absolute",
        zIndex: 99,
        left: 0,
        top: 45,
        right: 0,

    }
};

const iosStyles = {
    container: {
        marginTop: 2,
        padding: 0,
        zIndex: 1,
    },
    inputContainer: {
        borderRadius: 4,
        padding: 0,
        margin: 0,
        height: moderateScale(50),
        paddingLeft: 6,
        borderWidth: 2,
        borderColor: inputBorder,
        backgroundColor: 'white',
    },
    input: {
        height: moderateScale(50),
        borderWidth: 0,
        paddingBottom: 5,
        fontSize: moderateScale(13),
    },
    list: {
        backgroundColor: whiteColor,
        borderWidth: 1,
        zIndex: 1,
        maxHeight: 200,
        marginTop: 0,
        borderColor: grayColor,
        borderRadius: 4,
    },
    itemStyle: {
        height: 40,
        color: "black",
        borderColor: grayColor,
        borderWidth: moderateScale(5),
    },
    listContainerStyle: {
        position: "absolute",
        zIndex: 99,
        left: 0,
        top: 45,
        right: 0,

    }
};

const styles = StyleSheet.create({
    ...Platform.select({
        android: { ...androidStyles },
        ios: { ...iosStyles }
    })
});

export default AutocompleteText;


// Example
// const { query } = this.state;
// const data = this._filterData(query)
// return (<AutocompleteText
//     data={data}
//     defaultValue={query}
//     onChangeText={text => this.setState({ query: text })}

//     renderItem={({ item, i }) => (
//         <TouchableOpacity onPress={() => this.setState({ query: item })}>
//             <Text>{item}</Text>
//         </TouchableOpacity>
//     )}
// />);
// }