import { Dispatch } from "redux";
import { call } from "../services";
import { hideLoader } from "./AppActions";
import { handleApiError } from "../base/utility/ErrorHandleUtils";

export const getServiceResponse = (queryParam: any): any => async (appDispatch: Dispatch) => {
    call.getService(queryParam).then((responseAxios: any) => {
        // TODO Play With REsponse
        appDispatch(hideLoader());
    }).catch((error: any) => {
        handleApiError(error, appDispatch);
    });
};