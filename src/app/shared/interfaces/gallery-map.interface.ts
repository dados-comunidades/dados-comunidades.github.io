import { IMapLayer } from './map-layer.interface';

export interface IGalleryMap {
    mapTitle: string;
    mapDesc: string;
    mapTags: [string];
    mapAuthor: string;
    dateCreated: Date;
    dateModified: Date;
    mapLayers: [IMapLayer];
    mapVotes: number;
    mapViews: number;
    mapImg: string;
}
