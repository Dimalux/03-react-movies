
export interface Movie {
    id: number;
    poster_path: string; // Шлях до постеру фільму
    backdrop_path: string; // Шлях до фонового зображення
    title: string; // Назва фільму
    overview: string; // Опис фільму
    release_date: string; // Дата виходу
    vote_average: number; // Середній рейтинг
}

export interface MoviesResponse {
    results: Movie[]; // Масив знайдених фільмів
    total_pages: number; // Загальна кількість сторінок
    total_results: number; // Загальна кількість результатів
    page: number; // Поточна сторінка
    }