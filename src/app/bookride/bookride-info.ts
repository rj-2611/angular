export class BookrideInfo {
    source: string;
    destination: string;
    vehicleType: string;

    constructor(source: string, destination: string, vehicleType: string) {
        this.source = source;
        this.destination = destination;
        this.vehicleType = vehicleType;
    }    
}
