import { AxiosInstance } from 'axios';
import { serviceUrl } from '../base/api/ServiceUrl';


export default (api: AxiosInstance) => {
    function postService(queryParam: any, bodyParams: any) {
        return api.post(serviceUrl, bodyParams, { params: queryParam });
    }

    function getService(params: any) {
        return api.get(serviceUrl, { params: params });
    }


    return {
        postService,
        getService
    }
}