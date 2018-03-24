import axios from "axios";

export const getTeachers = async ({ commit }, payload = {}) => {
  const { grade = 4, section = "J" } = payload;

  const { data } = await axios({
    method: "get",
    url: `/teachers/${grade}-${section}`
  });

  commit("SET_TEACHERS", data);
  return data;
};
export const getTeacher = async ({ commit }, payload = {}) => {
  const { id = -1 } = payload;

  const { data } = await axios({
    method: "get",
    url: `/tprofile/${id}`
  });

  commit("SET_TEACHER", data);
  return data;
};
