/**
 * Created by   :宁建浩
 * Created time :2017/11/2
 */
import service from '../utils/request';

export async function publicKey() {
  return new Promise((resolve, reject) => {
    service({
      url: '/ethereum/publicKey',
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
      url: '/ethereum/eth_getBalance',
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
      url: '/ethereum/eth_sendTransaction',
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
      url: '/ethereum/eth_getTransactionByHash',
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
      url: '/ethereum/personal_importRawKey',
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
      url: '/ethereum/eth_sendRawTransaction',
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
      url: '/ethereum/transactionCount',
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
      url: '/ethereum/personalByPrivateKey',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function tokenBalance(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/0xc83783e5f32d1157498e6374b6ab2aec48ff4428/eth_getBalance',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function tokenSendTransaction(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/0xc83783e5f32d1157498e6374b6ab2aec48ff4428/eth_sendTransaction',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
export async function localToken(data) {
  return new Promise((resolve, reject) => {
    service({
      url: '/0xc83783e5f32d1157498e6374b6ab2aec48ff4428/txList',
      method: 'post',
      data
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
