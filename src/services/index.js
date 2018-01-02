/**
 * Created by   :宁建浩
 * Created time :2017/11/2
 */
import service from '../utils/request';

export async function publicKey() {
  return new Promise((resolve, reject) => {
    service({
      url: '/publicKey',
      method: 'post'
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function balance(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/eth_getBalance',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function transaction(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/eth_sendTransaction',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function transactionByHash(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/eth_getTransactionByHash',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function importKeyFile(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/personal_importRawKey',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function sendRawTransaction(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/eth_sendRawTransaction',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function getNonce(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/transactionCount',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function personalByKeyDate(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/personalByKeyDate',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
