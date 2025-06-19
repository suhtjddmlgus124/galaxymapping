export interface Galaxy {
    id: number;
    name: string;    
    ra: number;
    dec: number;
    photo: string;
    metadata: string;
    spectrum: string;
    dateTime: string;
    reportedRecessionVelocity: number;
    measuredRecessionVelocity: number;
    reportedRedshift: number;
    measuredRedshift: number;
    reportedDistance: number;
    measuredDistance: number;
}