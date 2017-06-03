export class DDFeatureLayer {
    constructor(public lyrName: string,
                public lyrDesc: string,
                public lyrRating: number,
                public lyrType: string,
                public lyrJson: Object,
                public lyrDateCreated: Date,
                public lyrDateModified: Date) {}
}
