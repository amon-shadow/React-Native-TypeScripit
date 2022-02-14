import AppTypes from "../types/AppTypes";

export const openDrawer = () => ({
    type: AppTypes.OPEN_DRAWER,
});


export const showLoader = () => ({
    type: AppTypes.SHOW_LOADER,
});

export const hideLoader = () => ({
    type: AppTypes.HIDE_LOADER,
});

export const showAlert = (message: string) => ({
    type: AppTypes.SHOW_ALERT,
    message: message,
});

export const hideAlert = () => ({
    type: AppTypes.HIDE_ALERT,
});

export const isInternetLost = (value: boolean) => ({
    type: AppTypes.IS_INTERNET_LOST,
    value,
});
