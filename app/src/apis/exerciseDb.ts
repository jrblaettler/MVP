import axios from 'axios';

export const exerciseDb = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises/',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'rapidApiKeyHere',
  },
});
