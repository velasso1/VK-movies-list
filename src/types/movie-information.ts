// types for movie-information-slice initial state

export interface InfromationItem {
    name: string
    slug: string
}
  
export interface MovieInformationState {
    years: InfromationItem[],
    genres: InfromationItem[],
    rating: InfromationItem[],
    toggleGenres: string[], 
    toggleYears: string[],
    toggleRatings: string[],
}