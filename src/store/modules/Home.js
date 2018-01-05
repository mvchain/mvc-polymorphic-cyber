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
    getPublicKey({commit}) {
      return new Promise((resolve, reject) => {
        publicKey().then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getBalance({commit}, payload) {
      return new Promise((resolve, reject) => {
        balance(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    sendTransaction({commit}, payload) {
      return new Promise((resolve, reject) => {
        transaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTransactionBtHash({commit}, payload) {
      return new Promise((resolve, reject) => {
        transactionByHash(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getKeyFile({commit}, payload) {
      return new Promise((resolve, reject) => {
        importKeyFile(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getRawTransaction({commit}, payload) {
      return new Promise((resolve, reject) => {
        sendRawTransaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getNonceNum({commit}, payload) {
      return new Promise((resolve, reject) => {
        getNonce(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getPersonalByKeyDate({commit}, payload) {
      return new Promise((resolve, reject) => {
        personalByKeyDate(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenBalance({commit}, payload) {
      return new Promise((resolve, reject) => {
        tokenBalance(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenTransaction({commit}, payload) {
      return new Promise((resolve, reject) => {
        tokenSendTransaction(payload).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getTokenLocal({commit}, payload) {
      return new Promise((resolve, reject) => {
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
