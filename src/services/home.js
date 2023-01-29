import requester from "./api";
import apiPath from "./apiPath";
export const getJobs = async (data) => {
  let res = await requester.get(`${apiPath.GET_JOBS}?name=${data}`);
  if (res.data) {
    return res.data;
  }
};
export const getTypes = async () => {
  let res = await requester.get(`${apiPath.GET_JOB_TYPES}`);
  if (res.data) {
    return res.data;
  }
};
