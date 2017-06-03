export class MapLayer {
  constructor(public layerName: string,
              public layerDesc: string,
              public layerAuthor: string,
              public layerRating: number,
              public dateCreated: Date,
              public dateModified: Date,
              public geoType: string,
              public geoJson: Object) {}
}
