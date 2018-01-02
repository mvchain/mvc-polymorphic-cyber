/**
 * Created by   :宁建浩
 * Created time :2017/11/13
 */
import {publicKey, balance, transaction, transactionByHash, importKeyFile} from '../../services/index';
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
    }
  }
};

export default Home;
