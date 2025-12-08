import moment from "moment";
import "moment/min/locales";

export function formatDate() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}
