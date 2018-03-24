// import something here
import { date } from "quasar";
// leave the export, even if you don't use it
export default ({ Vue }) => {
  Vue.filter(
    "date",
    (value, format) => (value ? date.formatDate(value, format) : "No Date")
  );
};
