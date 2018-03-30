export const getActivity = async function(
  { commit, rootGetters },
  payload = {}
) {
  const { id = rootGetters.params.id } = payload;
  const { data } = await this.axios({
    method: "get",
    url: `/activitysheet/${id}`
  });
  commit("SET_ACTIVITY", data);
};
