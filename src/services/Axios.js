import axios from 'axios';
import { API_BASE_URL } from '@env';

// Create a list to hold the request queue
const refreshAndRetryQueue = [];

// Flag to prevent multiple token refresh requests
let isRefreshing = false;

const API_URL = API_BASE_URL;

const AxiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    // 'Content-Type': 'application/json',
  },
});

const getToken = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log('getting access tokens >>>>>', token);
    return token ? `Bearer ${token}` : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
AxiosBase.interceptors.request.use(
  async config => {
    // await new Promise(resolve => setTimeout(resolve, 1500)); // Optional delay
    config.headers.Authorization = await getToken();
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
  },
  error => {
    console.log('got error >> ', error.response.config);
    return Promise.reject(error);
  },
);

createAxiosResponseInterceptor();

function createAxiosResponseInterceptor() {
  const interceptor = AxiosBase.interceptors.response.use(
    response => {
      console.log('RETURN REPONSE INSTEAD ERROR');
      return response;
    },
    async error => {
      console.log('main erro response', error.response);
      if (
        error.response !== undefined ||
        error.response.data.statusCode !== undefined
      ) {
        const mainResponse = error.response.data;

        const orginalRequest = error.response.config;
        // Reject promise if usual error
        console.log('access token has expired', orginalRequest);

        const refreshToken = localStorage.getItem('refreshToken');
        console.log('refresh token has expired', refreshToken);

        if (mainResponse.statusCode === 401 && refreshToken) {
          if (!isRefreshing) {
            isRefreshing = true;
            try {
              console.error(
                'Error at API AXIOS',
                mainResponse.statusCode,
                mainResponse.message,
                refreshToken,
              );

              // AxiosBase.interceptors.response.eject(interceptor);
              AxiosBase.interceptors.request.eject(interceptor);

              // Refresh the access token
              const url = '/api/auth/refresh-token';
              const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + refreshToken,
              };

              const response = await AxiosBase.post(url, null, {headers});
              console.log('Getting the new refresh token:', response);

              console.log(
                'new refresh token >>>',
                response.data.data.session.refresh_token,
              );

              // Update the request headers with the new access token
              error.response.config.headers.Authorization =
                'Bearer ' + response.data.data.session.access_token;
              console.log(
                'Successfully access token >>> ',
                response.data.data.session.access_token,
              );
              // Save new tokens to local storage
              localStorage.setItem(
                'token',
                response.data.data.session.access_token,
              );
              localStorage.setItem(
                'refreshToken',
                response.data.data.session.refresh_token,
              );
              console.log('On queue >>>>>>>> ', refreshAndRetryQueue);
              // Retry all requests in the queue with the new token
              refreshAndRetryQueue.forEach(({config, resolve, reject}) => {
                AxiosBase.request(config)
                  .then(responsed => resolve(responsed))
                  .catch(err => reject(err));
              });

              // Clear the queue
              refreshAndRetryQueue.length = 0;

              //retry the orginal request
              return AxiosBase(error.response.config);
            } catch (err) {
              console.error('Error at refresh token', err);

              //If refresh token is invalid, you will receive this error status and log user out
              // if (err.response.data.statusCode === 400) {
              //   throw {response: {status: 401}};
              // }
              return Promise.reject(err);
            } finally {
              isRefreshing = false;
              createAxiosResponseInterceptor();
            }
          }

          // Add the original request to the queue
          return new Promise((resolve, reject) => {
            refreshAndRetryQueue.push({orginalRequest, resolve, reject});
          });
        }
        // Return a Promise rejection if the status code is not 401
        return Promise.reject(error);
      } else {
        // Handle network errors or other cases where there's no response
        console.log('Network error or no response from server');
      }
    },
  );
}

export default AxiosBase;
