import Vue from "vue";
import Vuex from "vuex";
import student from "./student";
import teacher from "./teacher";
import parent from "./parent";
import admin from "./admin";
import subject from "./subject";
import assignment from "./assignment";
import test from "./test";
import schedule from "./schedule";
import activity from "./activity";

Vue.use(Vuex);

const state = () => ({
  auth: null
});

const getters = {
  auth: state => state.auth,
  route: state => state.route,
  params: (state, getters) => getters.route.params
};

const mutations = {};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    student,
    teacher,
    parent,
    admin,
    subject,
    assignment,
    test,
    activity,
    schedule
  }
});

export default store;
