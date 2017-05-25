import { FETCH_DATA } from './constants'
import axios from 'axios'
import getPeople from './api'

//const REQUEST_URL = 'https://jsonplaceholder.typicode.com';

export function fetchData() {
   // var request = axios.get(`${REQUEST_URL}/posts`);
    //console.log(request)
  return {
    type: FETCH_DATA,
    payload: getPeople()
  }
}