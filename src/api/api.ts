import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
  }
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`, {})
      .then(response => {
        return response.data;
      })
  },
  follow(id: number) {
    return instance.post(`follow/${id}`, {}, {})
      .then(response => {
        return response.data;
      })
  },
  auth() {
    return instance.get(`auth/me`, {})
      .then(response => {
        return response.data;
      })
  },
  getProfile(userId: string) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data;
      })
  },
}