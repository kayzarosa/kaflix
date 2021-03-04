import React, {
  useEffect,
  useState,
} from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import { Constantes } from '../../utils/Constants';

import {
  Container,
  Header,
  ScrollContainer,
  MoviesContainer,
  Food,
  MovieImageContainer,
  MovieContent,
  MovieTitle,
  MovieDescription,
  MovieInfos,
  Title,
} from './styles';

interface Params {
  id: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState({} as Movie);
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadFood(): Promise<void> {
      const { data } = await api.get<Movie>(
        `/movie/${routeParams.id}?${Constantes.URL.API_KEY}&language=${Constantes.URL.IDIOMA}`
      );

      setMovie(data);
    }

    loadFood();
  }, [routeParams]);

  return (
    <Container>
      <Header />

      <ScrollContainer>
        <MoviesContainer>
          <Food>
            <MovieImageContainer>
              <Image
                style={{ width: 363, height: 500 }}
                source={{
                  uri: `${Constantes.URL.IMAGE_URL}${movie.poster_path}`,
                }}
              />
            </MovieImageContainer>
            <MovieContent>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDescription>{movie.overview}</MovieDescription>
              <MovieInfos>Título Original: {movie.original_title}</MovieInfos>
              <MovieInfos>Status: {movie.status}</MovieInfos>
              <MovieInfos>Idioma Original: {movie.original_language}</MovieInfos>
              <MovieInfos>Popularidade: {movie.popularity}</MovieInfos>
              <MovieInfos>Tempo de duração: {movie.runtime} min</MovieInfos>
              <MovieInfos>Média dos votos: {movie.vote_average}</MovieInfos>
              <MovieInfos>Quantidade de votos: {movie.vote_count}</MovieInfos>
            </MovieContent>
          </Food>
        </MoviesContainer>
      </ScrollContainer>
    </Container>
  );
};

export default MovieDetails;
