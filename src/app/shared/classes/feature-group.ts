export class DDFeatureGroup {
    constructor(public gpName: string,
                public gpDesc: string,
                public gpAuthor: string,
                public gpRating: number,
                public gpViews: number,
                public gpDateCreated: Date,
                public gpDateModified: Date,
                public gpLayers: any[]) {}
}
