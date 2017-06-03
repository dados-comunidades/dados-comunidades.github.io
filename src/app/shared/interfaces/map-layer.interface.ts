export interface IMapLayer {
    layerName: string;
    layerDesc: string;
    layerAuthor: string;
    layerRating: number;
    dateCreated: Date;
    dateModified: Date;
    geoType: string;
    geoJson: Object; 
}
