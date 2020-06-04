import queryString from 'query-string';

const getSearchFromLocation = location => queryString.parse(location.search).q;

export default getSearchFromLocation;
