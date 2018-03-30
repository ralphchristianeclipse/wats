import Vue from "vue";
import Vuex from "vuex";
import { encodeToken, decodeToken } from "src/utils";
import student from "./student";
import teacher from "./teacher";
import parent from "./parent";
import admin from "./admin";
import subject from "./subject";
import assignment from "./assignment";
import test from "./test";
import schedule from "./schedule";
import activity from "./activity";
import staff from "./staff";
import grade from "./grade";

Vue.use(Vuex);

const state = () => ({
  auth: null,
  currentStudent: null,
  currentTeacher: null,
  windowSize: {
    width: 0,
    height: 0
  },
  windowScroll: null
});

const getters = {
  auth: state => state.auth,
  currentStudent: state => state.currentStudent,
  currentTeacher: state => state.currentTeacher,
  route: state => state.route,
  params: (state, getters) => getters.route.params,
  windowSize: state => state.windowSize,
  isMobile: state => state.windowSize.width <= 600
};

const mutations = {
  SET_AUTH: (state, payload) => {
    state.auth = payload;
  },
  SET_STUDENT: (state, payload) => {
    state.currentStudent = payload;
  },
  SET_TEACHER: (state, payload) => {
    state.currentTeacher = payload;
  },
  SET_WINDOW_SIZE: (state, payload) => {
    state.windowSize = payload;
  },
  SET_WINDOW_SCROLL: (state, payload) => {
    state.windowScroll = payload;
  }
};

const actions = {
  async login({ commit, dispatch }, payload = {}) {
    if (!payload) throw new Error("Fields empty");
    const { username: user, password: pass } = payload;
    const { data: [data] } = await this.axios({
      method: "post",
      url: "/userinfo",
      // headers: {
      //   "Content-Type": " x-www-form-urlencoded"
      // },
      data: {
        user,
        pass
      }
    });
    if (!data) throw new Error("Invalid Login");
    data.image =
      "https://scontent.fmnl8-1.fna.fbcdn.net/v/t31.0-8/477597_10150879126872986_1945926737_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeE6SdO05Zo-_Av66gDsLqa4Dp_36iyZxVaUejHfE10PICuXB2pUCrHBEoKwN0v2WRGPMi_cWMzU4DBkW1V1ge1H4iVywTfpa8tiq4pZorZdjA&oh=00eaccbace2a2ef08bfe6e88febdb9c0&oe=5B448285";
    const token = await encodeToken({
      salt: data.id,
      data
    });
    sessionStorage.setItem("token", token);
    await dispatch("getAuth");
    //commit("SET_AUTH", data);
    this.router.push({ name: "overview" });
  },
  async getAuth({ commit, dispatch, getters }) {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    const data = await decodeToken(token);
    commit("SET_AUTH", data);
    if (getters.auth.type === "s") {
      await dispatch("getStudentInfo");
    } else if (getters.auth.type === "p") {
      await dispatch("getParentChild");
    } else if (getters.auth.type === "t") {
      await dispatch("getTeacherInfo");
    }
  },
  async getTeacherInfo({ commit, dispatch, getters }, payload = {}) {
    const { id = getters.auth.ident } = payload;
    const teacher = await dispatch("teacher/getTeacher", {
      id
    });
    commit("SET_TEACHER", teacher);
  },
  async getStudentInfo({ commit, dispatch, getters }, payload = {}) {
    const { id = getters.auth.ident } = payload;
    const student = await dispatch("student/getStudent", {
      id
    });
    commit("SET_STUDENT", student);
  },
  async getParentChild({ commit, getters, dispatch }, payload) {
    const [child] = getters.auth.children;
    await dispatch("getStudentInfo", {
      id: payload || child.id
    });
  },
  async logout({ commit }) {
    sessionStorage.removeItem("token");
    commit("SET_AUTH", null);
    this.router.push({ name: "login" });
  }
};

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
    schedule,
    staff,
    grade
  }
});

export default store;
