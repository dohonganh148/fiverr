import requester from "./api";
import apiPath from "./apiPath";
export const getJobs = async (data) => {
  let res = requester.get(`${apiPath.GET_JOBS}?name=${data}`);
  if (res.data.data) {
    return res.data.data;
  }
};
