
import axios from "axios";
import Auth from "./auth";

/**
 *
 * @param params
 * @param prefix
 */
function serializeQuery(params, prefix) {
  const query = Object.keys(params).map(key => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}[]`;
    else if (params.constructor === Object)
      key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === "object") return serializeQuery(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join("&");
}

/**
 *
 * @returns {AxiosInstance}
 */
/* headers: {
    'X-Parse-Application-Id': process.env.REACT_APP_API_APPLICATION_ID,
    'X-Parse-REST-API-Key': process.env.REACT_APP_API_REST_KEY
}, */
function getApi() {
  const instance = axios.create({
    headers: {
      // Authorization: `bearer ${Auth.getToken()}`,
      // 'X-Parse-Application-Id': 'localAppId0123456789',
      // 'X-Parse-REST-API-Key': 'rest-API-Key-0123456789',
      // 'Access-Control-Allow-Origin': '*',
    }
  });
  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Do something with response data
      if (response.status === 200) {
        return response.data;
      }
      return Promise.reject(response);
    },
    function(error) {
      // Do something with response error
      console.log("brefore response error:", error);
      if(error.response.status === 401)
      {
        Auth.deauthenticateUser();  
        //Force logout
        window.location.href = '/login';
      }
       
      return Promise.reject(error);
    }
  );
  return instance;
}

export async function request(url, data = {}, method = "GET", config = {}) {
  try {
    const api = getApi();
    switch (method) {
      case "POST":
        return await api.post(url, data, config);
      default:
        return await api.get(url + "?" + serializeQuery(data), config);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}