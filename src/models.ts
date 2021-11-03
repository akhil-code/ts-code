export type Image = {
    id: string,
    url ?: string
}

export type Comment = {
    id: string,
    authorId: string,
    data: string,
    creationDate: Date
}

export type Post = {
    id: string,
    picture: Image,
    caption ?: string,
    likesCount: number,
    likedBy: string[],
    creationDate: Date
}

export type Feed = {
    posts : Post[]
}

export type Profile = {
    id: string,
    username ?: string,
    fullName ?: string,
    birthDate ?: Date,
    bio ?: string,
    avatar ?: Image,
    followers ?: string[],
    followees ?: string[],
    posts ?: string[]
    creationDate ?: Date
}
