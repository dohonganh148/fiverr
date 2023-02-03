import requester from "./api";
import apiPath from "./apiPath";
export const login = async (params) => {
  let res = await requester.post(`${apiPath.LOGIN}`, params);
  if (res.data) {
    return res.data;
  }
};
export const signup = async (params) => {
    let res = await requester.post(`${apiPath.LOGIN}`, params);
    if (res.data) {
      return res.data;
    }
  };