import { Geo } from './Geo';

export class Address {

    private street: string;
    private suite: string;
    private city: string;
    private zipcode: number;
    private geo: Geo;

    public getgeo(): Geo {
        return this.geo;
    }
    
     public setgeo(v: Geo) {
        this.geo = v;
    }



    public getStreet(): string {
        return this.street;
    }

    public setStreet(v: string) {
        this.street = v;
    }

    public getSuite(): string {
        return this.suite;
    }

    public setSuite(v: string) {
        this.suite = v;
    }

    public getCity(): string {
        return this.city;
    }
    public setCity(v: string) {
        this.city = v;
    }

    public getZipcode(): number {
        return this.zipcode;
    }
    public setZipcode(v: number) {
        this.zipcode = v;
    }

}