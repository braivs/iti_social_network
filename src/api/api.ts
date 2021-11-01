import axios from "axios";
import {ProfileType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '36c47461-cd5e-48a2-a6d3-2dd87b11456f'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<{id: number,email: string,login: string}>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseType<{ userId: number }>>('auth/login', {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login');
    },
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type ResponseType<D = {}> = {
    fieldsErrors: Array<string>
    resultCode: number
    messages: Array<string>
    data: D
}
type GetUsersType = {
    error: string
    items: Array<UserType>
    totalCount: number
}