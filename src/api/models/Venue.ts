export default interface Venue {
  name: string;
  excerpt: string;
  img: string;
  phone?: string;
  beerRating: number;
  atmosphereRating: number;
  amenitiesRating: number;
  valueRating: number;
  tags: string[];
}
