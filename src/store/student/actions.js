const filterObject = (data, filter) =>
  Object.keys(data)
    .filter(key => key.startsWith(filter))
    .reduce(
      (obj, key) => ({ ...obj, [key.replace(filter, "")]: data[key] }),
      {}
    );
export const getStudents = async function({ commit }, payload = {}) {
  const { grade = 4, section = "J" } = payload;

  const { data } = await this.axios({
    method: "get",
    url: `/students/${grade}-${section}`
  });
  const { students } = data;
  commit("SET_STUDENTS", students);
  return data;
};

export const getStudent = async function(
  { commit, rootGetters },
  payload = {}
) {
  const { id = rootGetters.student ? rootGetters.student.id : -1 } = payload;

  const { data: [data] } = await this.axios({
    method: "get",
    url: `/sprofile/${id}`
  });
  const keys = Object.keys(data);
  data.guardians = {};
  data.guardians.guardian = filterObject(data, "s_guardian");
  data.guardians.dad = filterObject(data, "s_dad");
  data.guardians.mom = filterObject(data, "s_mom");

  commit("SET_STUDENT", data);
  return data;
};
