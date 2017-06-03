import { GalleryMap } from "./gallery-map.interface";

export interface UserProfile {
    nameFirst: string;
    nameLast: string;
    email: string;
    username: Date;
    password: Date;
    location: number;
    profType: number;
    profDesc: number;
    profImg: number;
    profKarma: number;
    maps: [GalleryMap];
    dateCreated: Date;
}
