<template lang="pug">
  q-page.flex.flex-center.main-body
    q-card.login
      .title
        h1 Sign in to STPCentral
      q-card-main
        .form-group
          label.col-sm-2.control-label Email
          .col-sm-10
            input(v-model="form.username" class="form-control" placeholder="Username")
        .form-group
          label.col-sm-2.control-label Password
          .col-sm-10
            input.form-control(type="password" v-model="form.password" placeholder="Password")
        .form-group.custom-form
          .offset-2.col-sm-10
            q-btn.btn-animate.btn-transparent(@click="login(form)") Login
          q-input(v-model="form.username" float-label="Username")
        q-field(icon="vpn_key" helper="Your password")
          q-input(v-model="form.password" type="password" float-label="Password")   
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "PageLogin",
    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      ...mapActions(["login"])
    }
  };
</script>

<style lang="stylus" scoped>
.login {
  min-width: 375px;
  width: 540px;
  margin: 0 auto;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  padding: 32px;
}

.title h1 {
  font-weight: 400;
  margin-bottom: 28px;
  text-align: center;
  font-size: 36px;
}

.main-body {
  background: url('http://akveo.com/blur-admin-mint/assets/img/blur-bg.jpg') center center no-repeat;
  background-size: cover;
}

.form-group {
  margin-right: -15px;
  margin-left: -15px;
  overflow: hidden;
  margin-bottom: 12px;
}

.control-label {
  padding-top: 0;
  margin-bottom: 0;
  text-align: right;
  color: #fff;
  line-height: 34px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 13px;
}

.col-sm-2 {
  width: 16.66666667%;
}

.col-sm-2, .col-sm-10 {
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

label {
  display: inline-block;
  max-width: 100%;
}

.col-sm-10 {
  width: 83.33333333%;
}

.form-control {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  color: #fff !important;
  border: 1px solid #cbcbcb;
  box-shadow: none;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  font-size: 14px;
  line-height: 1.42857143;
  display: block;
}
</style>
