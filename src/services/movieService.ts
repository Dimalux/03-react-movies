import axios from 'axios';
import { MoviesResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

// Функція для пошуку фільмів за запитом
export const fetchMovies = async (query: string): Promise<MoviesResponse> => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            query, // Пошуковий запит
        },
        headers: {
            // Використовуємо токен з змінних оточення
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
    });
    return response.data; // Повертаємо отримані дані
};