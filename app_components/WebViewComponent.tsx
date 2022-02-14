import React from 'react';
import { WebView } from 'react-native-webview';


const WebViewComponent = () => {
    const [url, setUrl] = React.useState("");
    return (
        <WebView
            source={{ uri: url }}
            onNavigationStateChange={onNavigationStateChange}
        />
    );

    function onNavigationStateChange(webViewState: any) {
        // TODO what you want to do on navigation change
    }
}

WebViewComponent.navigationOptions = {
    headerShown: false,
};

export default WebViewComponent;
