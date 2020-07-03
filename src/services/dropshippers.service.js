import { api } from 'services/api';

const ENDPOINT = {
  LISTINGS: '/dropshippers/listings?seed=1593719324956',
};

function listings(keywords, page) {
  return api.get(`${ENDPOINT.LISTINGS}&keywords=${keywords}&page=${page}`);
}

export default { listings, ENDPOINT };
