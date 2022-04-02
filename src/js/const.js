export const APIKEY = 'c36f951b13981f9df13951e77d9c1e90';
export const sportsUrl = 'https://api.the-odds-api.com/v3/sports?apiKey=' + APIKEY;
const DATAURL = 'https://api.the-odds-api.com/v3/odds/?sport=';

export let getDataUrl = (sport, region, market) => {
   let res = DATAURL + sport + '&region=' + region + '&mkt=' + market + '&apiKey=' + APIKEY;
   return res;
}
