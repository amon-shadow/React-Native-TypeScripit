import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { showAlert } from '../action/AppActions';
import { btnColorGradient } from '../base/utility/ColorUtils';
import { navigate } from '../base/utility/NavigationService';
import BasicButton from '../component/BasicButton';
import DateTimeSelector from '../component/DateTimePicker';
import { EditText } from '../component/EditText';
import Loader from '../component/Loader';
import { SearchBox } from '../component/SearchBox';


const Dashboard = () => {
    const appDispatch = useDispatch()
    const [state, setState] = useState<any>({});
    const [error, setError] = React.useState<any>({});

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    padding: 10
                }}
            >
                <Loader loading={state.loading} />

                <EditText
                    value={state.mobileNumber}
                    error={error.mobileNumber}
                    onChangeText={(text: string) => {
                        setValue({ mobileNumber: text }, { mobileNumber: "" });
                    }}
                    mandatory
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    labelText={'Text'}
                    placeholder={'Enter Text'}
                />

                <SearchBox
                    value={state.city}
                    error={error.city}
                    headerText='City'
                    labelText='City'
                    dataList={['Dubai']}
                    hint='City'
                    onSelect={(selectedItem: any) => {
                        setValue({ city: selectedItem }, { city: "" });
                    }}
                    mandatory
                    zindex={999}
                />

                <DateTimeSelector
                    mode="date"
                    headerText={'Start Date'}
                    hint={'Start Date'}
                    date={state.startDateStr}
                    error={error.contractStartDateStr}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    onSelect={(date: any) => {
                        setValue({ startDateStr: date }, { startDateStr: '' });
                    }}
                />

                <BasicButton
                    style={{
                        alignSelf: 'center',
                        width: '90%',
                        marginTop: 10
                    }}
                    title="Flat List"
                    colorsGradient={btnColorGradient}
                    onPress={async () => {
                        navigate('Notice');
                    }}
                />

                <BasicButton
                    style={{
                        alignSelf: 'center',
                        width: '90%',
                        marginTop: 10
                    }}
                    title="Save"
                    colorsGradient={btnColorGradient}
                    onPress={async () => {
                        setState({
                            ...state,
                            loading: true
                        });
                        setTimeout(() => {
                            appDispatch(showAlert('Details updated successfully'));
                            setState({
                                ...state,
                                loading: false
                            });
                        }, 1000)

                    }}
                />

            </View>
        </ScrollView>
    );

    function setValue(params: any, errorData: any) {
        setState({
            ...state,
            ...params
        });
        setError({
            ...error,
            ...errorData
        });
    }
};


export default Dashboard;
