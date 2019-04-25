import Vue from 'vue'



export const EventBus = new Vue();

export function isValidJwt (jwt) {
  if (!jwt || jwt.split('.').length < 3) {
    return false
  }
  const data = JSON.parse(atob(jwt.split('.')[1]));
  const exp = new Date(data.exp * 1000);
  const now = new Date();
  return now < exp
}

export function get_email(token) {
const tokenParts = token.split('.');
const body = JSON.parse(atob(tokenParts[1]));
const email = body.sub;
    return email
}

export function get_cookie(name) {
    return window.$cookies.get(name)
}
export function set_cookie(name, value) {
    return window.$cookies.set(name, value)
}
export function pop_cookie(name) {
    return window.$cookies.remove(name)

}