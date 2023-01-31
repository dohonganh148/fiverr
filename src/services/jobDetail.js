import requester from "./api";
import apiPath from "./apiPath";
export const getReviews = async (id) => {
  let res = await requester.get(`${apiPath.GET_REVIEWS}/${id}`);
  if (res.data) {
    return res.data;
  }
};

export const bookJob = async (id) => {
  let res = await requester.patch(`${apiPath.BOOK_JOB}/${id}`);
  if (res.data) {
    return res.data;
  }
};
