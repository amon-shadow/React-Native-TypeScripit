import React, { Fragment } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { AppContainer } from './AppContainer';
import { AlterBox } from './component/AlertBox';
import Loader from './component/Loader';
import { appStyles } from './styles/AppStyles';


export function AppStoreContainer() {
    return (
        <Fragment>
            <Loader />
            <AlterBox />
            <KeyboardAvoidingView
                style={appStyles.appContainer}
            >
                <AppContainer />
            </KeyboardAvoidingView>
        </Fragment>
    );
}

