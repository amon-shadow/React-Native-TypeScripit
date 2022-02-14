import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import codePush from "react-native-code-push";
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { AppStoreContainer } from './AppStoreContainer';
import configureStore from './base/redux/Store';
import { orangeColor } from './base/utility/ColorUtils';
import { exceptionHandler, nativeExceptionHandler } from './base/utility/ErrorHandleUtils';
import InternetStatus from './base/utility/InternetStatus';
console.disableYellowBox = true;

const store = configureStore();


setJSExceptionHandler(exceptionHandler, true);

setNativeExceptionHandler(
  nativeExceptionHandler,
  false,
  true,
);

function App() {

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: orangeColor }} />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}>
        <StatusBar
          backgroundColor={orangeColor}
          barStyle="light-content"
        />
        <ToastProvider>
          <Provider store={store} >
            <AppStoreContainer />
            <InternetStatus />
          </Provider >
        </ToastProvider>
      </SafeAreaView>
    </Fragment>
  );
}


export default codePush()(App);