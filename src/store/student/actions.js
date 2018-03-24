import axios from "axios";

export const getStudents = async ({ commit }, payload = {}) => {
  const { grade = 4, section = "J" } = payload;

  const { data } = await axios({
    method: "get",
    url: `/students/${grade}-${section}`
  });
  const { students } = data;
  commit("SET_STUDENTS", students);
  return data;
};
export const getStudent = async ({ commit }, payload = {}) => {
  const { id = -1 } = payload;

  const { data } = await axios({
    method: "get",
    url: `/sprofile/${id}`
  });

  commit("SET_STUDENT", data);
  return data;
};