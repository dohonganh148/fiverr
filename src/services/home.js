import requester from "./api";
import apiPath from "./apiPath";
export const getJobs = async (data, index) => {
  let res = await requester.get(`${apiPath.GET_JOBS}`, {
    params: {
      keyword: data,
      pageSize: 8,
      pageIndex: index,
    },
  });
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
