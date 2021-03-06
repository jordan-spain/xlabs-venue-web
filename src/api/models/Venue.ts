export default interface Venue {
  id: number;
  name: string;
  excerpt: string;
  img: string;
  address: string;
  phone?: string;
  beerRating: number;
  atmosphereRating: number;
  amenitiesRating: number;
  valueRating: number;
  tags: string[];
}
