import Axios from 'axios';
import {accessToken} from "./sessionKey";

//create axios instance
const instance = Axios.create({
  baseURL: `https://dibformdemo.dibtech.com.au/backend/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

//get data from api
export const getApiData = async (url, param) => {
  let response;
  try {
    response = await instance({
      "method": "GET",
      "url": `${url}`,
      "params": param,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [function (responseData) {
        // Do whatever you want to transform the data
        return JSON.parse(responseData);
      }],
    });
  } catch (e) {
    console.log(e)
  }
  return response;
}

//post data to api
export const postApiData = async (data) => {
  const {url, formData} = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [function (responseData) {
        //Do whatever you want to transform the data
        return JSON.parse(responseData);
      }],
    });
  } catch (e) {
    console.log(e.response)
  }
  return response;
}

//post data to api
export const postApiDataNoAuth = async (data) => {
  const {url, formData} = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        // Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [function (responseData) {
        //Do whatever you want to transform the data
        return JSON.parse(responseData);
      }],
    });
  } catch (e) {
    return e.response
  }
  return response;
}




//update data
export const putApiData = async (data) => {
  const {url, formData} = data;
  let response;
  try {
    response = await instance({
      "method": "PUT",
      "url": `${url}`,
      "data": formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [function (responseData) {
        //Do whatever you want to transform the data
        return JSON.parse(responseData);
      }],
    });
  } catch (e) {
    console.log(e)
  }
}


//delete data
export const deleteApiData = async (url) => {
  let response;
  try {
    response = await instance({
      method: "DELETE",
      url: url,
      // params: param,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          // console.log("inside transform", JSON.parse(responseData))
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    console.log(e)
  }
  return response;
};