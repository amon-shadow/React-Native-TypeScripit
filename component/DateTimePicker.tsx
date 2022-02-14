import Moment from 'moment';
import React, { Component } from "react";
import {
  Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { inputBorder, inputLabel, placeholderColor } from '../base/utility/ColorUtils';
import { NormalText } from '../base/utility/FontSize';
import { moderateScale, scale } from "../base/utility/ScalingUtils";
import { appStyles } from '../styles/AppStyles';

interface Props {
  mode: any,
  onSelect: Function,
  date: Date | null
  minDate?: Date | undefined
  maxDate?: Date | undefined
  containerStyle?: any,
  rightImage?: any,
  datePickerText?: any,
  imageStyle?: any,
  container?: any,
  datePickerBox?: any,
  headerText?: string,
  error?: string,
  hint: string,
  dataFormat?: string,
  timeFormat?: string,
  inputFormat?: string,
  mandatory?: boolean
}

interface State {
  showPicker: boolean,
}

export default class DateTimeSelector extends Component<Props, State> {

  // Set default props
  public static defaultProps = {
    dataFormat: "DD-MMM-YYYY",
    timeFormat: "hh:mm A",
    inputFormat: "YYYY-MM-DD",
    mode: "date"
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      showPicker: false,
    };
  }

  setDate(date: any) {
    var mode = this.props.mode
    this.setState({ showPicker: false });
    if (date) {
      if (mode != null && mode == "date") {
        this.props.onSelect && this.props.onSelect(date);
      } else {
        this.props.onSelect && this.props.onSelect(date);
      }
    }
  };


  render() {
    const { containerStyle, rightImage, imageStyle, headerText, error, date,
      hint, mode, dataFormat, timeFormat, inputFormat, mandatory } = this.props;
    return (
      <View style={[containerStyle]}>
        {headerText ?
          <View style={{ flexDirection: "row" }}>
            < Text
              style={[styles.labelStyle, { fontWeight: 'bold', marginBottom: 5 }]}
            >{headerText}</Text>

            {mandatory && < Text
              style={[styles.mandatory]}
            > * </Text>}
          </View> : null}
        <TouchableOpacity onPress={() => this.setState({ showPicker: true })}>
          <View style={[styles.datePickerBox, this.props.datePickerBox]}>
            <Text style={[styles.datePickerText, this.props.datePickerText, {
              color: (date == undefined || date == null) ? placeholderColor : inputLabel
            }]}>{
                (mode == "date") ? (date == undefined ||
                  date == null ? hint : Moment(date, inputFormat).format(dataFormat))
                  : (date == undefined || date == null ? hint :
                    Moment(date, "HH:mm").format(timeFormat))}</Text>
            {rightImage ? <Image style={[{
              width: PixelRatio.getPixelSizeForLayoutSize(10),
              height: PixelRatio.getPixelSizeForLayoutSize(10),
              position: 'absolute',
              right: 10,
            }, imageStyle]} source={rightImage} /> : null}

          </View>
        </TouchableOpacity>
        {this.state.showPicker && this.renderPicker()}
        <View />
        <Text
          style={appStyles.errorStyle}>
          {(error == undefined || error == null || error == "") ? "" : error}
        </Text>

      </View>
    );
  }

  renderPicker() {
    const { mode, minDate, maxDate, date } = this.props;
    return (
      <View style={[this.props.container]}>
        <DateTimePicker
          date={date || new Date()}
          isVisible={this.state.showPicker}
          mode={mode}
          is24Hour={true}
          isDarkModeEnabled={false}
          minimumDate={minDate}
          maximumDate={maxDate}
          onConfirm={this.setDate.bind(this)}
          onCancel={() => {
            this.setState({ showPicker: false });
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  datePickerBox: {
    justifyContent: 'center',
    borderRadius: 4,
    padding: 6,
    height: moderateScale(48),
    paddingLeft: 6,
    borderWidth: 2,
    borderColor: inputBorder,
    backgroundColor: 'white',
  },
  datePickerText: {
    fontSize: moderateScale(13),
    marginLeft: 5,
    borderWidth: 0,
    marginTop: 2,
  },
  labelStyle: {
    fontSize: NormalText,
    color: placeholderColor,
    marginLeft: scale(5),
  },
  mandatory: {
    color: "red"
  }
});

