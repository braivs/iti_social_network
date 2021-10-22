export type PhotosType = {
    small: string | null
    large: string | null
}

type locationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    location: locationType
}