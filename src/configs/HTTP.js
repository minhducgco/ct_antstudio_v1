import axios from 'axios';

import store from '@redux/store';
import {domain as DOMAIN} from './Configs';
import {onUserLogout} from '@redux/actions/authAction';

var HTTP = {};

const client = axios.create({
  baseURL: DOMAIN,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000000,
});

function post(url, options, success, failure) {
  client
    .post(url, options.body)
    .then(res => {
      // console.log('code', res.data.code);
      if (res.data.code !== 200) {
        console.log('khác 200');
        if (
          res.data.code === 4103 ||
          res.data.code === 4102 ||
          res.data.code === 4101 ||
          res.data.code === 4100
        ) {
          store.dispatch(onUserLogout());
        }
        failure(res.data.message);
      } else {
        success(res.data);
      }
    })
    .catch(err => {
      // store.dispatch(onUserLogout());
      console.log(`err: catch ${url}`);
      console.log('error call api', err);

      failure(err.message);
    });
}

function get(url, options, success, failure) {
  client
    .get(url, {
      params: options.body,
    })
    .then(res => {
      success(res);
    })
    .catch(err => {
      failure(err);
    });
}

function call(method, url, options, isjson, success, failure) {
  if (!url.match(/https?:\/\//)) {
    url = DOMAIN + url;
  }

  if (method.toLowerCase() === 'get') {
    get(url, options, success, failure);
  }

  if (method.toLowerCase() === 'post') {
    post(url, options, success, failure);
  }

  let request = fetch(url, options);

  if (isjson) {
    request = request.then(res => res.json());
  }

  request.then(success).catch(failure);
}

HTTP.post = post;
HTTP.get = get;
HTTP.call = call;

export default HTTP;
