import axios from "axios";

export default ({ Vue }) => {
  axios.defaults.baseURL = "http://stpcentral.net";
  Vue.prototype.$axios = axios;
};
