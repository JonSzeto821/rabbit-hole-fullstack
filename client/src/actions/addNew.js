import axios from 'axios';
// import * as io from 'socket.io-client'; 
// var socket = io('http://localhost:3000'); 
import {API_BASE_URL} from '../config';


export const sendEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(entry);
    let test = {test: 'test'};
    return fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
        return response.json()
//         // socket.emit('add entry', entries);

      })
    .then((json) => {
        console.log(json); //logs entry in client console
    })
}