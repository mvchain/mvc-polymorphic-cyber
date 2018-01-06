/**
 * Created by   :宁建浩
 * Created time :2017/11/13
 */
import {
  publicKey,
  balance,
  transaction,
  transactionByHash,
  importKeyFile,
  sendRawTransaction,
  getNonce,
  personalByKeyDate,
  tokenBalance,
  tokenSendTransaction,
  localToken} from '../../services/index';
const Home = {
  state: {
    url: {
      balance: 'eth_getBalance',
      publicKey: 'publicKey',
      getTransaction: 'eth_sendTransaction',
      getTransactionByHash: 'eth_getTransactionByHash',
      importRawKey: 'personal_importRawKey',
      sendRawTransaction: 'eth_sendRawTransaction',
      transactionCount: 'transactionCount',
      personalByPrivateKey: 'personalByPrivateKey',
      txList: 'txList'
    }
  },

  mutations: {
    SET_PUBLIC_KEY: (state, payload) => {
      state.publicKey = payload;
    },
    SET_BALANCE: (state, payload) => {
      state.balance = payload;
    }
  },

  actions: {
    getPublicKey({commit, state}) {
      return new Promise((resolve, reject) => {
        publicKey('/mvc/ethereum/' + state.url.publicKey).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getBalance({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.balance}`;
        balance(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    sendTransaction({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.getTransaction}`;
        transaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTransactionBtHash({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.getTransactionByHash}`;
        transactionByHash(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getKeyFile({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.importRawKey}`;
        importKeyFile(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getRawTransaction({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.sendRawTransaction}`;
        sendRawTransaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getNonceNum({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.transactionCount}`;
        getNonce(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getPersonalByKeyDate({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.personalByPrivateKey}`;
        personalByKeyDate(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenBalance({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.balance}`;
        tokenBalance(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenTransaction({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.getTransaction}`;
        tokenSendTransaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenLocal({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        payload.url = `/mvc/${payload.token}/${state.url.txList}`;
        localToken(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    }
  }
};

export default Home;
