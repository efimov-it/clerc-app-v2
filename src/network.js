//{"success":false,"error":{"messages":["Unauthenticated."]}}

import axios from 'axios';
const baseUrl = 'https://clerc.dgz.ru';
export default ({
    url,
    method = 'get',
    data = {},
    headers = {'Content-Type': 'multipart/form-data'},
    config = {},
    reject = err => {
        console.warn('Request error!\nURL: '+baseUrl+url+'\nError:\n'+err);
        return false;
    },
    resolve = resp => console.log(resp)
} = {}) => {
    axios({
        method,
        url: baseUrl + url,
        data,
        headers,
        ...config
    }).then(resp => {
        if(resp.data.error) {
            reject(resp.data);
        }
        else {
            if(resp.data.success == false) {
                reject(resp.data);
            }
            else {
                if(resp.data.data) {
                    resolve(resp.data.data)
                }
                else {
                    resolve(resp.data);
                }
            }
        }
    }).catch(err => {
        if(err.response) {
            reject(err.response.data);
        }
        else {
            reject(err);
        }
    });
}