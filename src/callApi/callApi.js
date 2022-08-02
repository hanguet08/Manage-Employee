import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `https://62dffb14fa8ed271c47c05c9.mockapi.io/api/v1/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}