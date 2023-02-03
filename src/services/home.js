import requester from "./api";
import apiPath from "./apiPath";
export const getJobs = async (data) => {
  let res = await requester.get(`${apiPath.GET_JOBS}/${data}`);
  if (res.data) {
    return res.data.content;
  }
};
export const getTypes = async () => {
  let res = await requester.get(`${apiPath.GET_JOB_TYPES}`);
  if (res.data) {
    return res.data.content;
  }
};
export const getJobsByType = async (id) => {
  let res = await requester.get(`${apiPath.GET_JOBS_BY_TYPE}/${id}`);
  if (res.data) {
    return res.data.content;
  }
};
