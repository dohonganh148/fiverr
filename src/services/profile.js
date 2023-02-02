import requester from "./api";
import apiPath from "./apiPath";
export const getHiredJobs = async () => {
  let res = await requester.get(`${apiPath.GET_HIRED_JOB}`);
  if (res.data) {
    return res.data;
  }
};
