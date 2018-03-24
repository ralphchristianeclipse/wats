import axios from "axios";

export const getTest = async ({ commit, rootGetters }, payload = {}) => {
  const { id = rootGetters.params.id } = payload;
  const { data } = await axios({
    method: "get",
    url: `/test/${id}`
  });
  commit("SET_TEST", data);
};
