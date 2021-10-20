const endpointToken = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const token = await fetch(endpointToken)
    .then((response) => response.json());
  return token;
};

export default fetchToken;
