import { BeersResponse } from './models';

const apiUrl = 'https://random-data-api.com/api/beer/';

/**
 * Fetches random beers based on the specified size.
 * @param {number} options.size - The size of the random beers to fetch.
 * @returns {Promise<BeersResponse>} Response containing random beers.
 */
async function fetchRandomBeers({
  size,
}: {
  size: number;
}): Promise<BeersResponse> {
  const url = new URL(`${apiUrl}/random_beer`);
  url.searchParams.append('size', `${size}`);

  const jsonResponse = await fetch(url, {
    method: 'GET',
  }).then((response) => response.json());

  return jsonResponse;
}

export { fetchRandomBeers };
