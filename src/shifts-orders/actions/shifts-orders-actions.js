import axios from 'axios';
const headers = {
    Client:"zDw2aza36ngAzh6vzstQUQ",
    Expiry: 1579342984,
    Uid:"a2@gmail.com",
    "Access-Token": "wWuh0QJDQudcw3rk6BD5FQ"
}
//let host = "https://dinu.pagekite.me/";
//https://dinu.pagekite.me/
let host = "https://legdev.herokuapp.com";
//send date from date picker
export const getShifts = (date) => {
    return axios.get( `${host}/api/v1/admins/jobs`, {headers:headers, params: {date:date, status:"assigned"} })
}
export const getShiftViewData = (id, date) => {
    return axios.get( `${host}/api/v1/admins/jobs/${id}`, {headers:headers,  params: {date:date, status:"assigned"}})
}
export const postShift = (date,id, headerDate) => {
    let data = {id:id,shift_date:date};
    return axios.post( `${host}/api/v1/admins/jobs/post_job`, data , { headers:headers, params: {date:headerDate, status:"assigned"} })
}

export const assignMembers = (data,date) => {
    return axios.post( `${host}/api/v1/admins/shift_applications/assign`, data , { headers:headers, params: {date:date, status:"assigned"} })
}