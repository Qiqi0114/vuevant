<template>
  <div>
    <!-- header -->
    <div>
      <van-nav-bar
        title="登录"
        left-text="返回"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div>
      <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
      </van-form>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant';
  export default{
    name:'shopCar',
    data(){
      return{
      username: '',
      password: '',
      }
    },
      methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onClickLeft() {
      Toast('返回');
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    },
  },
  }
</script>
