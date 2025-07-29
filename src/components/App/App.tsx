import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal'; 
import styles from './App.module.css';

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]); // Список фільмів
    const [isLoading, setIsLoading] = useState(false); // Стан завантаження
    const [error, setError] = useState(false); // Стан помилки
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // Вибраний фільм

    const handleSearch = async (query: string) => {
        try {
            setIsLoading(true);
            setError(false);
            setMovies([]); // Очищаємо попередні результати
            
            const data = await fetchMovies(query);
            
            if (data.results.length === 0) {
                toast.error('No movies found for your request.');
            }
            
            setMovies(data.results);
        } catch (err) {
            setError(true);
            toast.error('Не вдалося завантажити фільми. Спробуйте ще раз.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectMovie = (movie: Movie) => {
        setSelectedMovie(movie); // Встановлюємо вибраний фільм
    };

    const handleCloseModal = () => {
        setSelectedMovie(null); // Закриваємо модалку
    };

    return (
        <div className={styles.container}>
            <SearchBar onSubmit={handleSearch} />
            
            {isLoading && <Loader />}
            
            {error && <ErrorMessage />}
            
            {movies.length > 0 && !isLoading && !error && (
                <MovieGrid movies={movies} onSelect={handleSelectMovie} />
            )}
            
            {selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
}