import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '999abac6-bf67-459a-8bbe-7b90949bd5d4'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        debugger
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId?: number }>>('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete<ResponseType>('auth/login');
    },

}

export type ResponseType<D = {}> = {
    fieldsErrors: Array<string>
    resultCode: number
    messages: Array<string>
    data: D
}