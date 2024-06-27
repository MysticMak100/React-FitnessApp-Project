export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'd0148bcc24msh09bd75b00775230p17287fjsn05655df7d340',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const allexercises = {
  method: "GET",
  params: {
    limit: "1000",
    offset: "0",
  },
  headers: {
    "x-rapidapi-key": 'd0148bcc24msh09bd75b00775230p17287fjsn05655df7d340',
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "4cf36b2f78msh2fd126cef962bb7p1c190djsn56f701de5704",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
