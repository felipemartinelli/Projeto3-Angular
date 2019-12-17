export class Geo{
    
    private lat: number;
    private lng: number;

    public getLat():number{
        return this.lat;
    }

    public getLng():number{
        return this.lng;
    }

    public setLat(lat: number):void{
        this.lat = lat;
    }

    public setLng(lng: number): void{
        this.lng = lng;
    }
}