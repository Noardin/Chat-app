import axios from 'axios'
// const URL = 'https://maxchatapp-backend.herokuapp.com/api/';
var URL ='https://chatapp-backendapi.herokuapp.com/api/';
export function update_settings(userData, jwt) {
    return axios.post(URL+'update_settings',{UserData:userData},{headers: { Authorization: jwt } })
}
export function fechtAllMessages(jwt) {
    return axios.get(URL+'Messages',{headers: { Authorization: jwt } })
}

export function postNewMessage (message, jwt) {
  return axios.post(URL+'Messages', message,  {headers: { Authorization: jwt } })
}

export function update(jwt, reactions) {
    return axios.get(URL+'update_userdata', reactions, {headers: { Authorization: jwt } })

}
export function update_reactions(jwt, reactions) {
    return axios.post(URL+'update_reactions',reactions,{headers:{Authorization:jwt}})

}
export function request_passwordchange(jwt) {
    return axios.get(URL+'request_password_change',{headers: { Authorization: jwt } })

}
export function confirm_passwordtoken(jwt, token) {
    return axios.get(URL+'change_password/'+token,{headers:{ Authorization:jwt}})

}

export function authenticate(userData) {
    return axios.post(URL+'login',{UserData: userData, headers: { 'Access-Control-Allow-Origin': '*' }});

}
export function registerreq(userData) {


    return axios.post(URL+'registrate',{UserData: userData, headers: { 'Access-Control-Allow-Origin': '*' }})

}
export function delete_message(message, jwt) {
    return axios.post(URL+'delete_message', message,  {headers: { Authorization: jwt } })
}
export function update_message(message, jwt) {
    return axios.post(URL+'update_message', message,  {headers: { Authorization: jwt } })
}