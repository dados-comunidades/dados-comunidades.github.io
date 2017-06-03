import { MapLayer } from "./map-layer";

export class GalleryMap {
  constructor(public mapTitle: string,
    public mapDesc: string,
    public mapTags: [string],
    public mapAuthor: string,
    public dateCreated: Date,
    public dateModified: Date,
    public mapLayers: [MapLayer],
    public mapVotes: number,
    public mapViews: number,
    public mapImg: string) {}
}
