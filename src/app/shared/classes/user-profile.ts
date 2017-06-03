export class UserProfile {
    constructor(public socialId: string,
                public nameFirst: string,
                public nameLast: string,
                public email: string,
                public location: string,
                public profType: string,
                public profDesc: string,
                public profImg: string,
                public profKarma: number,
                public loginCount: number,
                public maps: string[],
                public dateCreated: Date){}
}
