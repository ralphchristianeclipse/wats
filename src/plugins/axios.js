import axios from "axios";

export default ({ Vue }) => {
  axios.defaults.baseURL = `${window.location.protocol}//stpcentral.net`;
  Vue.prototype.$axios = axios;
};
