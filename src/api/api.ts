import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '36c47461-cd5e-48a2-a6d3-2dd87b11456f'
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
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        // return instance.post<ResponseType<{ userId: number }>>('auth/login', {email, password, rememberMe});
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe})
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

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export type ResponseType<D = {}> = {
    fieldsErrors: Array<string>
    resultCode: number
    messages: Array<string>
    data: D
}