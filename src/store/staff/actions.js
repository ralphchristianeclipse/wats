export const getStaff = async ({ commit }) => {
  commit("SET_STAFF", [
    {
      name: "Gino"
    },
    {
      name: "Neneth"
    }
  ]);
};
