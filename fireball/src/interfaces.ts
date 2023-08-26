export interface Meteorite {
    fall: string,
    geolocation?:  {
        latitude?: string, 
        longitude?: string
    }
    id: string,
    mass: string, 
    name: string, 
    nametype: string, 
    recclass: string,   
    reclat: string, 
    reclong: string, 
    year: string,    
}

export type row = Omit<Meteorite, "nametype" | "geolocation" | "reclass">

export interface rowTypes extends row {
    country?: string
}  