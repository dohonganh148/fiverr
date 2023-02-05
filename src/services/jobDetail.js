import requester from "./api";
import apiPath from "./apiPath";
export const getReviews = async (id) => {
  let res = await requester.get(`${apiPath.GET_REVIEWS}/${id}`);
  if (res.data) {
    return res.data;
  }
};

export const bookJob = async (params) => {
  let res = await requester.post(`${apiPath.BOOK_JOB}`, params);
  if (res.data) {
    return res.data;
  }
};
