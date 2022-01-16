import Axios from 'axios'
import ResponseModel from '../api_models/ResponseApiModel'
import _ from 'lodash'
import querystring from  'querystring'
import { useRouter } from "next/router";
import { errorSnackbar } from "../../redux/user";

/**
 * Send reqeust with data/parameters
 * 
 * @async
 * @param {String} url 
 * @param {String} method 
 * @param {Object} data
 */
export async function send(url, method= "POST", data= {}, params= {}, dispatch) {
    const withCredentials = true;
    //const router = useRouter();

    try {
        let res= {}
        if(!_.isEmpty(params)){
            let query = querystring.stringify(params);
             res = await Axios({ url: url +'?'+ query, method, withCredentials });
        }
        else{
             res = await Axios({
                url: url,
                method, 
                withCredentials,
                data
            })
        }

        const resposne = new ResponseModel({
            status: res.status,
            data: res.data,
            message: res.statusText,
        })
        return resposne;
    }
    catch (ex) {
        const { message, httpStatusCode } = ex;
        switch (httpStatusCode) {
            case 403:
                window.location.replace('/403');
                //router.push("/403");
            case 404:
                window.location.replace('/404');
                //router.push("/404");
            default:
                dispatch(errorSnackbar(ex));
        }
    }
}

/**
 * Fetch data
 * 
 * @async
 * @param {String} url 
 * @param {Boolean} auth 
 * @param {String} method 
 * @return {ResponseApiModel}
 */
export async function fetch(url, method= "GET", dispatch) {
    const withCredentials = true;

    try {
        const option = {
            url,
            method,
            withCredentials
        }
        const res = await Axios(option)
        const resposne = new ResponseModel({
            status: res.status,
            data: res.data,
            message: res.statusText,
        })
        return resposne;
    }
    catch (ex) {
        const { message, httpStatusCode } = ex;
        switch (httpStatusCode) {
            case 403:
                window.location.replace('/403');
                //router.push("/403");
            case 404:
                window.location.replace('/404');
                //router.push("/404");
            default:
                dispatch(errorSnackbar(ex));
        }
    }
}