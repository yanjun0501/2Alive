<template>
<div class="login-container">
  <div class="login-box">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane name="login">
        <div class="tab-header" slot="label">登录</div>
        <div class="login-box-form">
          <el-form ref="form" class="login-form" label-width="60px" size="mini">
            <el-form-item label="用户名">
              <el-input v-model="formData.username" ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="formData.password" ></el-input>
            </el-form-item>
            <el-button @click="authLogin" size="large" class="login-button">登录</el-button>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane name="register">
        <div class="tab-header" slot="label">注册</div>
        <div class="login-box-from">
          <el-form ref="form" label-width="60px" size="mini">
            <el-form-item label="用户名">
              <el-input v-model="register.username" ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="register.password" ></el-input>
            </el-form-item>
            <el-button size="large" class="login-button"  @click="registerAccount">注册</el-button>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'login',
      formData: {
        username: '',
        password: '',
      },
      register: {
        username: '',
        password: '',
      },
    };
  },
  computed: {

  },
  watch: {
    $route(val) {
      this.routerIndex = val.currentRoute.name;
    },
  },
  methods: {
    authLogin() {
      this.$store.dispatch('user/login', {
        username: this.formData.username,
        password: this.formData.password,
      })
    },
    registerAccount() {
      this.$store.dispatch('user/register', {
        username: this.register.username,
        password: this.register.password,
      })
    },
  },
};
</script>


<style lang="scss">
.login-container {
  height: 100%;
  background: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    .login-box-form {
      .login-form {
        background: rgba($color: #fff, $alpha: 0.5);
      }
    }
    width: 360px;
    height: 300px;
    .tab-header {
      width: 139px;
      padding: 0 !important;
    }
    .login-button {
      width: 320px;
      background: #233352;
      color: #fff;
      &:hover {
        color: #4199ee;
        cursor: pointer;
      }
    }
  }
}

</style>
