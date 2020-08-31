<template>
  <div class="content mt-5">
    <div class="container">
      <!-- login -->
      <div class="login mx-auto p-4 border-top border-info rounded">
        <h2 class="text-info">請登入後台</h2>
        <form class="text-left">
          <div class="form-group ">
            <label for="loginEmail ">Email address*</label>
            <div class="position-relative">
              <input type="email" class="form-control pl-4" id="loginEmail" v-model="email" aria-describedby="emailHelp " required>
              <font-awesome-icon class="login-icon text-primary" :icon="['far', 'envelope']"/>
              <i class="login-icon far fa-envelope"></i>
            </div>
          </div>
            <div class="form-group ">
              <label for="loginPassword ">Password*</label>
              <div class="position-relative">
                <input type="password" class="form-control pl-4" id="loginPassword" v-model="password" required>
                <font-awesome-icon class="login-icon text-primary" :icon="['fas', 'lock']"/>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-login btn btn-primary" @click.prevent="login">登入</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    login () {
      let api = `${process.env.VUE_APP_APIPATH}auth/login`;
      let data = {
        email: this.email,
        password: this.password,
      }
      this.isLoading = true;
      this.$http.post(api, data)
        .then(response => {
          let token = response.data.token;
          let expired = response.data.expired;
          document.cookie = `adminToken=${token}; expires=${new Date(expired * 1000)}; path=/`;
          this.isLoading = false;
          this.$router.push('/admin');
        })
        .catch(error => {
          this.email = '';
          this.password = '';
          this.isLoading = false;
          alert(error);
        });
    }
  },
}

</script>
<style lang='scss'>
.login {
    max-width: 300px;
    border-width: 3px !important;
    box-shadow: 0 5px 25px -3px rgba(0, 0, 0, .2);
}

.login-icon {
    position: absolute;
    top: 12px;
    left: 6px;
}
</style>
