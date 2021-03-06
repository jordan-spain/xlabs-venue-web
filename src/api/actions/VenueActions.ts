import HttpClient from '../HttpClient';
import Venue from '../models/Venue';
import { Remote } from '../Remote';

const defaultError = "Oops, something's gone wrong. Please try again.";

export const getAllVenues = async (): Promise<Remote<Venue[]>> => {
  const client: HttpClient = new HttpClient();

  try {
    const response = await client.get<Venue[]>('api/venues');
    return {
      data: response,
    };
  } catch (err) {
    return {
      errors: [defaultError],
    };
  }
};
