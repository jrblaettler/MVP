import axios from 'axios';

export const exerciseDb = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises/',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'd885c71da2msh7e92c472fdad971p1ce4cbjsnb4e35bd75a32',
  },
});
