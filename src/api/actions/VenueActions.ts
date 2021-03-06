import HttpClient from '../HttpClient';
import GetVenuesResponse from '../models/GetVenuesResponse';
import { Remote } from '../Remote';

const defaultError = "Oops, something's gone wrong. Please try again.";

export const getAllVenues = async (): Promise<Remote<GetVenuesResponse>> => {
  const client: HttpClient = new HttpClient();

  try {
    const response = await client.get<GetVenuesResponse>('api/venues');
    return {
      data: response,
    };
  } catch (err) {
    return {
      errors: [defaultError],
    };
  }
};
