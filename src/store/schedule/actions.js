import axios from "axios";
import { date as dateFormatter } from "quasar";

export const getSchedulesToday = async ({ commit }, payload = {}) => {
  const { grade = 4, section = "J" } = payload;
  const { data } = await axios({
    method: "get",
    url: `/sched/${grade}-${section}`
  });
  commit("SET_SCHEDULES", data);
};

export const getSchedulesByDate = async ({ commit, getters }, payload = {}) => {
  const { date = new Date(), grade = 4, section = "J" } = payload;
  const formattedDate = dateFormatter.formatDate(date, "YYYY-MM-DD");
  const { data } = await axios({
    method: "get",
    url: `/sched/${grade}-${section}/${formattedDate}`
  });
  commit("SET_SCHEDULES", data);
};
