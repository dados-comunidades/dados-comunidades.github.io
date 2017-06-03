import { DDFeatureGroup } from "./feature-group";

export class DadosMap {
    constructor(public mapTitle: string,
                public mapDesc: string,
                public mapTags: string[],
                public mapAuthor: string,
                public mapAuthorId: string,
                public mapVotes: number,
                public mapViews: number,
                public mapImg: string,
                public dateCreated: Date,
                public dateModified: Date,
                public mapfeatureGroups: DDFeatureGroup[]) {}
}
