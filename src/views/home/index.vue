<template>
  <div class="home-container pubBack">
    <el-row>
      <el-input placeholder="请输入地址" v-model="balance">
        <template slot="prepend">查询余额</template>
        <el-button slot="append" icon="el-icon-search" @click="getBalance"></el-button>
      </el-input>
      <el-col :span="24">
        <div class="balance-con">余额：<span>{{balanceCoin}} （eth）</span></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入地址" v-model="transferFrom">
          <template slot="prepend">转出</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入地址" v-model="transferTo">
          <template slot="prepend">转入</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入地址" type="number" v-model="transferCount">
          <template slot="prepend">转账数量</template>
          <el-button slot="append" @click="getTransfer">转账</el-button>
        </el-input>
      </el-col>
      <el-col :span="24">
        <div class="balance-con">TXhash值：<span>{{orderHash}}</span></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input placeholder="请输入地址/hash" v-model="orderHash">
          <template slot="prepend">查询订单信息</template>
          <el-button slot="append" icon="el-icon-search" @click="getTransferInfo"></el-button>
        </el-input>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <span v-if="!tableData.blockHash">暂无信息</span>
          <div v-for="(v,k) in tableData" :key="k">
            <div>
              <b>{{k}}:</b><span>{{v}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="upload-row">
      <el-col :span="4" class="up-load">
        <el-upload
          class="upload-demo"
          ref="upload"
          :action=importUrl
          :data="uploadData"
          :on-success="uploadSucc"
          :on-error="uploadErr"
          multiple
          :auto-upload="false"
          :limit="3"
        >
          <el-button size="small" type="primary">选取文件</el-button>
        </el-upload>
        <el-button size="small" type="primary" @click="submitUpload">点击上传</el-button>
      </el-col>
      <el-col :span="20">
        <div class="key-title">查看钱包信息：key文件</div>
      </el-col>
      <el-col :span="20">
        <div class="balance-con">你的地址：<span>{{addResult}}</span></div>
        <div class="balance-con">你的秘钥：<span>{{keyResult}}</span></div>
      </el-col>
      <el-col :span="24">
        <el-input placeholder="请输入私钥" v-model="privateKey">
          <template slot="prepend">查看钱包信息：秘钥</template>
          <el-button slot="append" @click="exportKeyFile">解锁</el-button>
        </el-input>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="balance-con">你的地址：<span>{{addResult}}</span></div>
          <div class="balance-con">你的秘钥：<span>{{keyResult}}</span></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div class="other-coin">代币业务</div>
      <el-row>
        <el-input placeholder="请输入合约地址" v-model="tokenAddress">
          <template slot="prepend">输入合约地址</template>
          <el-button slot="append" ></el-button>
        </el-input>
        <el-input placeholder="请输入地址" v-model="tokenBalance">
          <template slot="prepend">代币查询余额</template>
          <el-button slot="append" icon="el-icon-search" @click="getTokenBalance"></el-button>
        </el-input>
        <el-col :span="24">
          <div class="balance-con">余额：<span>{{tokenBalanceCoin}} （NJH）</span></div>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入地址" v-model="tokenTransferFrom">
          <template slot="prepend">转出</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入地址" v-model="tokenTransferTo">
          <template slot="prepend">转入</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入地址" type="number" v-model="tokenTransferCount">
          <template slot="prepend">转账数量</template>
          <el-button slot="append" @click="getTokenTransfer">转账</el-button>
        </el-input>
      </el-col>
      <el-col :span="24">
        <div class="balance-con">TXhash值：<span>{{tokenOrderHash}}</span></div>
      </el-col>
    </el-row>
    <el-row>
      <el-input placeholder="请输入地址" v-model="localAddress">
        <template slot="prepend">查询交易记录</template>
        <el-button slot="append" icon="el-icon-search" @click="getLocal"></el-button>
      </el-input>
      <el-col :span="24">
        <el-table
          :data="tokenTableData"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
          >
          </el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-row class="templateStyle">
                <el-col :span="12">
                  <span>blockHash:{{props.row.blockHash}}</span>
                </el-col>
                <el-col :span="12">
                  <span>blockNumber:{{props.row.blockNumber}}</span>
                </el-col>
                <el-col :span="12">
                  <span>confirmations:{{props.row.confirmations}}</span>
                </el-col>
                <el-col :span="12">
                  <span>contractAddress:{{props.row.contractAddress}}</span>
                </el-col>
                <el-col :span="12">
                  <span>from:{{props.row.from}}</span>
                </el-col>
                <el-col :span="12">
                  <span>to:{{props.row.to}}</span>
                </el-col>
                <el-col :span="12">
                  <span>gas:{{props.row.gas}}</span>
                </el-col>
                <el-col :span="12">
                  <span>gasPrice:{{props.row.gasPrice}}</span>
                </el-col>
                <el-col :span="12">
                  <span>gasUsed:{{props.row.gasUsed}}</span>
                </el-col>
                <el-col :span="12">
                  <span>hash:{{props.row.hash}}</span>
                </el-col>
                <el-col :span="12">
                  <span>input:{{props.row.input}}</span>
                </el-col>
                <el-col :span="12">
                  <span>isError:{{props.row.isError}}</span>
                </el-col>
                <el-col :span="12">
                  <span>nonce:{{props.row.nonce}}</span>
                </el-col>
                <el-col :span="12">
                  <span>timeStamp:{{props.row.timeStamp|timeFilter }}</span>
                </el-col>
                <el-col :span="12">
                  <span>transactionIndex:{{props.row.transactionIndex}}</span>
                </el-col>
                <el-col :span="12">
                  <span>txreceipt_status:{{props.row.txreceipt_status}}</span>
                </el-col>
                <el-col :span="12">
                  <span>value:{{toValue(props.row.input)}}</span>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column
            prop="hash"
            label="hash">
          </el-table-column>
          <el-table-column
            label="数量"
          >
            <template slot-scope="scope">
              <span>{{toValue(scope.row.input)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="from"
            label="from">
          </el-table-column>
          <el-table-column
            prop="to"
            label="to">
          </el-table-column>
          <el-table-column
            label="时间">
            <template slot-scope="scope">
              <span>{{scope.row.timeStamp | timeFilter}}</span>
            </template>
          </el-table-column>

        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script type='text/ecmascript-6'>
  import Tx from 'ethereumjs-tx';

  let encrypt = new window.JSEncrypt();
  let iUrl = `${window.urlData.url + (window.urlData.port ? ':' + window.urlData.port : window.urlData.port)}/mvc/ethereum/personalByKeyDate`;
  export default {
    data() {
      return {
        balance: '',
        importUrl: iUrl,
        tokenAddress: '',
        balanceCoin: '0.00',
        transferCount: 0.001,
        keyResult: '',
        orderHash: '',
        addResult: '',
        uploadData: {
          passhphrase: ''
        },
        nonceNum: '',
        privateKey: '',
        pKey: '',
        transferFrom: '',
        transferTo: '',
        tableData: {},
        blockId: 'latest',
        tokenBalance: '',
        tokenBalanceCoin: '',
        tokenTransferFrom: '',
        tokenTransferTo: '',
        tokenTransferCount: '',
        tokenOrderHash: '',
        localAddress: '',
        tokenTableData: []
      };
    },
    mounted: function () {
      this.$store.dispatch('getPublicKey').then((res) => {
        this.pKey = res;
        encrypt.setPublicKey(this.pKey);
      }).catch((err) => {
        this.$message.error(err);
      });
    },
    components: {},

    methods: {
      toValue(v) {
        if (v && v !== '0x') {
          return window.web3.toDecimal('0x' + v.substr(v.length - 64));
        } else {
          return '0';
        }
      },
      submitUpload() {
        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          inputType: 'password',
          cancelButtonText: '取消'
        }).then(({value}) => {
          if (value.replace(/\s/ig, '')) {
            this.uploadData.passhphrase = encrypt.encrypt(value);
            this.$refs.upload.submit();
          }
        }).catch(() => {
        });
      },
      uploadSucc(response, file, fileList) {
        this.keyResult = response.privateKey;
        this.addResult = response.address;
      },
      uploadErr(err, file, fileList) {
        this.$message.error(err);
      },
      getTokenBalance() {
        if (this.tokenBalance.replace(/\s/ig, '')) {
          this.$store.dispatch('getTokenBalance', {address: this.tokenBalance, blockId: this.blockId, token: this.tokenAddress}).then((res) => {
            this.tokenBalanceCoin = res;
          }).catch((err) => {
            this.$message.error(err);
          });
        } else {
          this.balanceCoin = '0.00';
        }
      },
      getBalance() {
        if (this.balance.replace(/\s/ig, '')) {
          this.$store.dispatch('getBalance', {
            address: this.balance,
            blockId: this.blockId,
            token: 'ethereum'
          }).then((res) => {
            this.balanceCoin = res;
          }).catch((err) => {
            this.$message.error(err);
          });
        } else {
          this.balanceCoin = '0.00';
        }
      },
      getTransfer() {
        if (this.transferFrom.replace(/\s/ig, '') && this.transferTo.replace(/\s/ig, '')) {
          this.getPassword();
        } else {
          this.$message.error('转账地址不能为空');
        }
      },
      getPassword() {
        if (!Number(this.transferCount) || Number(this.transferCount) <= 0) {
          this.$message.error('转账数量不能为0或负数');
          return;
        }
        this.$prompt('请转账秘钥', '提示', {
          confirmButtonText: '确定',
          inputType: 'password',
          cancelButtonText: '取消'
        }).then(({value}) => {
          let that = this;
          this.$store.dispatch('getNonceNum', {address: that.transferFrom, token: 'ethereum'}).then((res) => {
            this.nonceNum = res;
          }).catch((err) => {
            this.$message.error(err);
          }).then(() => {
            let privateKey = Buffer.from(value, 'hex');
            let rawTx = {
              nonce: that.nonceNum,
              from: that.transferFrom,
              gasPrice: '0x4a817c800',
              gasLimit: '0x15f90',
              to: that.transferTo,
              value: window.web3.fromDecimal(window.web3.toWei(that.transferCount, 'ether'))
            };
            let tx = new Tx(rawTx);
            tx.sign(privateKey);
            let serializedTx = '0x' + tx.serialize().toString('hex');
            this.$store.dispatch('getRawTransaction', {signedMessage: serializedTx, token: 'ethereum'}).then((res) => {
              if (!res.transactionHash) {
                this.$message.error(res.error.message);
              } else {
                this.orderHash = res.result;
              }
            }).catch((err) => {
              this.$message.error(err);
            });
          });
        });
      },
      getTokenTransfer() {
        if (this.tokenTransferFrom.replace(/\s/ig, '') && this.tokenTransferTo.replace(/\s/ig, '')) {
          this.getTokenPassword();
        } else {
          this.$message.error('转账地址不能为空');
        }
      },
      getTokenPassword() {
        this.$prompt('请转账秘钥', '提示', {
          confirmButtonText: '确定',
          inputType: 'password',
          cancelButtonText: '取消'
        }).then(({value}) => {
          let Tx = {
            from: this.tokenTransferFrom,
            to: this.tokenTransferTo,
            pass: encrypt.encrypt(value),
            value: this.tokenTransferCount,
            token: this.tokenAddress
          };
          this.$store.dispatch('getTokenTransaction', Tx).then((res) => {
            if (!res.transactionHash) {
              this.$message.error(res.error.message);
            } else {
              this.tokenOrderHash = res.result;
            }
          }).catch((err) => {
            this.$message.error(err);
          });
        });
      },
      getTransferInfo() {
        if (!this.orderHash) {
          this.tableData = {};
          return;
        }
        this.$store.dispatch('getTransactionBtHash', {
          transactionHash: this.orderHash,
          token: 'ethereum'
        }).then((res) => {
          let rej = res.result;
          if (typeof rej === 'object') {
            rej.gas = window.web3.fromWei(rej.gas);
            rej.gasPrice = window.web3.fromWei(Number(rej.gasPrice));
            rej.value = window.web3.fromWei(Number(rej.value)) + 'ether';
            this.tableData = rej;
          }
        }).catch((err) => {
          this.$message.error(err);
        });
      },
      exportKeyFile() {
        let encrypted1 = encrypt.encrypt(this.privateKey);
        this.$store.dispatch('getPersonalByKeyDate', {privateKey: encrypted1, token: 'ethereum'}).then((res) => {
          this.keyResult = res.privateKey;
          this.addResult = res.address;
        }).catch((err) => {
          console.log(err);
        });
      },
      getLocal() {
        this.$store.dispatch('getTokenLocal', {address: this.localAddress, token: this.tokenAddress}).then((res) => {
          if (res.status === '1') {
            this.tokenTableData = res.result;
          }
        }).catch((err) => {
          this.$message.error(err);
        });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './index.styl';
  .el-row
    margin-bottom: 29px;

  .balance-con
    text-align: left;
    background #fff;
    padding: 10px 0;
    text-indent: 20px;

  .box-card
    text-align: left;

    & b
      display: inline-block;
      width: 200px;
      padding: 5px 0;

  .upload-demo
    background: #fff;
    border-radius: 5px;

  .up-load
    background: #fff;
    line-height: 54px;

  .upload-row
    background: #fff;

  .key-title
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    text-align: left;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 10px 20px;

  .other-coin
    font-size: 20px;
    margin-bottom: 20px;

  .templateStyle
    text-align: left;

    & > .el-col-12
      overflow-y: hidden;
      padding: 10px 20px;

</style>
