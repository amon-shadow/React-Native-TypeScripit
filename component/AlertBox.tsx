
import { useEffect } from 'react';
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../action/AppActions';


export function AlterBox() {
    const toast = useToast();
    const appDispatch = useDispatch();
    const alertMessage = useSelector((state: any) =>
        state.appReducer.alertMessage
    );

    const showAlert = useSelector((state: any) =>
        state.appReducer.showAlert
    );

    useEffect(() => {
        showAlert && toast.show(alertMessage, { type: "normal", duration: 3000 });
        showAlert && appDispatch(hideAlert());
    }, [showAlert, alertMessage])

    // const notify = () => {
    //     if (Platform.OS === "android") {
    //         ToastAndroid.showWithGravity(
    //             alertMessage,
    //             ToastAndroid.SHORT,
    //             ToastAndroid.BOTTOM ,
    //         )
    //         appDispatch(hideAlert());
    //     } else {
    //         toast.show(alertMessage, { type: "normal", duration: 3000 });
    //     }

    //     return null;
    // };
    return (
        null
    )
}
