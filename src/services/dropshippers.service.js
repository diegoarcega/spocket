import { api } from 'services/api';

const ENDPOINT = {
  LISTINGS: '/dropshippers/listings',
};

function listings(keywords) {
  return api.get(`${ENDPOINT.LISTINGS}?keywords=${keywords}`);
}

export default { listings, ENDPOINT };
