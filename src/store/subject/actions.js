import axios from "axios";

export const getSubjectAssignments = async (
  { commit, rootGetters },
  payload = {}
) => {
  const { subject = rootGetters.params.id, grade = 4, section = "J" } = payload;
  const { data } = await axios({
    method: "get",
    url: `/assignments/subject/${subject.replace(" ", "_")}/${grade}-${section}`
  });

  commit("SET_SUBJECT_ASSIGNMENTS", data);
};
export const getSubjectTests = async (
  { commit, rootGetters },
  payload = {}
) => {
  const { subject = rootGetters.params.id, grade = 4, section = "J" } = payload;
  const { data } = await axios({
    method: "get",
    url: `/tests/${subject.replace(" ", "_")}/${grade}-${section}`
  });

  commit("SET_SUBJECT_TESTS", data);
};
export const getSubjectActivities = async (
  { commit, rootGetters },
  payload = {}
) => {
  const { subject = rootGetters.params.id, grade = 4, section = "J" } = payload;
  const { data } = await axios({
    method: "get",
    url: `/activitysheets/${subject.replace(" ", "_")}/${grade}-${section}`
  });

  commit("SET_SUBJECT_ACTIVITIES", data);
};
export const getSubjectHandouts = async (
  { commit, rootGetters },
  payload = {}
) => {
  const { subject = rootGetters.params.id, grade = 4, section = "J" } = payload;
  // const { data } = await axios({
  //   method: "get",
  //   url: `/activitysheets/${subject.replace(" ", "_")}/${grade}-${section}`
  // });
  const data = [];
  commit("SET_SUBJECT_HANDOUTS", data);
};
