import requester from "./api";
import apiPath from "./apiPath";
export const getCategories = async (id) => {
  let res = await requester.get(`${apiPath.GET_JOB_TYPES}/${id}`);
  if (res.data) {
    return res.data;
  }
};
export const getJobsByType = async (type) => {
  let res = await requester.get(`${apiPath.GET_JOBS_BY_TYPE}?type=${type}`);
  if (res.data) {
    return res.data;
  }
};
