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
          <div v-for="(v,k) in tableData" :key="k" >
            <div>
              <b>{{k}}:</b><span>{{v}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
        balance: '',
        balanceCoin: '0.00',
        transferCount: '0',
        orderHash: '',
        transferFrom: '0xad837b3c9c34295e797d94fb421c4b9280fc6d1f',
        transferTo: '0x20771815237d62ba03737123c96f90678c3ade46',
        tableData: {}
      };
    },
    mounted: function () {
    },
    components: {},
    computed: {},
    methods: {
      getBalance() {
        if (this.balance.replace(/\s/ig, '')) {
          this.balanceCoin = Number(window.web3.fromWei(window.web3.eth.getBalance(this.balance)));
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
          window.web3.personal.unlockAccount(this.transferFrom, value, function (res, err) {
            if (err === true) {
              let tx = {
                from: that.transferFrom,
                to: that.transferTo,
                value: window.web3.toWei(Number(that.transferCount), 'ether')
              };
              window.web3.personal.sendTransaction(tx, value, (res, err) => {
                if (err) {
                  that.orderHash = err;
                }
              });
            } else {
              that.$message.error('秘钥错误');
            }
          });
        }).catch(() => {
        });
      },
      getTransferInfo() {
        let that = this;
        window.web3.eth.getTransaction('0x2021785f9f4b13e242a9afe2258af913bba69a6b577868538ea3f9ded89bbbeb', (res, rej) => {
          if (typeof rej === 'object') {
            rej.gas = window.web3.fromWei(rej.gas);
            rej.gasPrice = window.web3.fromWei(Number(rej.gasPrice));
            rej.value = window.web3.fromWei(Number(rej.value)) + 'ether';
            that.tableData = rej;
          }
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
    text-align :left;

    & b
      display :inline-block;
      width:200px;
      padding: 5px 0;

</style>
