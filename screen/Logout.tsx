import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetStore } from '../action/StoreActions';
export const WebViewRoute = 'WebView';

export const Logout = () => {
    const navigation = useNavigation()
    const appDispatch = useDispatch();
    useEffect(() => {
        appDispatch(resetStore());
        navigation.navigate(WebViewRoute)
    });
    return (
        null
    );
};