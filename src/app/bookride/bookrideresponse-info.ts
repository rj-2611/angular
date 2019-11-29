export class BookrideresponseInfo {
    tripId: number;
    empName: string;
    empMobile: number;

    constructor(tripId: number, empName: string, empMobile: number) {
        this.tripId = tripId;
		this.empName = empName;
        this.empMobile = empMobile;
        
    }

}
