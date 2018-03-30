export const getGradeReplySlips = async function(
  { commit, rootGetters },
  payload = {}
) {
  const { grade = rootGetters.currentStudent.grade } = payload;

  const { data } = await this.axios({
    method: "get",
    url: `/replyslips/grade/${grade}`
  });

  commit("SET_REPLY_SLIPS", data);
};
