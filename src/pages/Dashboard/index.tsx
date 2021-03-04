import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '../../components/SearchInput';

import api from '../../services/api';

import { Constantes } from '../../utils/Constants';

import {
  Container,
  Header,
  AplicationTitle,
  AplicationSubTitle,
  FilterContainer,
  Title,
  CategoryContainer,
  CategorySlider,
  CategoryItem,
  CategoryItemTitle,
  MoviesContainer,
  MovieList,
  Movie,
  MovieImageContainer,
  MovieContent,
  MovieTitle,
  MovieDescription,
  MovieDetalhes,
} from './styles';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  overviewFormatado?: string;
  popularity: string;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IRequestMovie {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

interface Category {
  id: number;
  name: string;
}

interface Geres {
  genres: Category[];
}

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  const handleNavigate = useCallback(
    (id: number) => {
      navigation.navigate('MovieDetails', { id });
    },
    [navigation],
  );

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      let buscar = searchValue;
      if (!searchValue) {
        buscar = 'A';
      } 

      api.get<IRequestMovie>(
        `/${Constantes.URL.SEARCH_QUERY}${buscar}&${Constantes.URL.API_KEY}&language=${Constantes.URL.IDIOMA}&page=1&include_adult=true`
      ).then((response) => {
        const { data } = response;

        const moviessListFormateed = data.results.map(movie => ({
          ...movie,
          overviewFormatado: movie.overview.substr(0, 60) + '...',
        }));

        setMovies(moviessListFormateed);
      }).catch(err => {
        console.log("Erro:", err);
      });
    }

    loadMovies();
  }, [selectedCategory, searchValue]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const categoriesList = await api.get<Geres>(
        `/genre/movie/list?${Constantes.URL.API_KEY}&language=${Constantes.URL.IDIOMA}`
      );

      setCategories(categoriesList.data.genres);
    }

    loadCategories();
  }, []);

  const handleSelectCategory = useCallback(
    (id: number) => {
      if (selectedCategory === id) {
        setSelectedCategory(undefined);
        return;
      }

      setSelectedCategory(id);
    },
    [setSelectedCategory, selectedCategory],
  );

  return (
    <Container>
      <Header>
        <AplicationTitle>
          KAFLIX
        </AplicationTitle>
        <AplicationSubTitle>
          Venha se divertir
        </AplicationSubTitle>
        <Icon
          name="log-out"
          size={24}
          color="#FFB84D"
          onPress={() => navigation.navigate('Home')}
        />
      </Header>
      <FilterContainer>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Qual filme você procura?"
        />
      </FilterContainer>
      <ScrollView>
        <CategoryContainer>
          <Title>Genêros</Title>
          <CategorySlider
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map(category => (
              <CategoryItem
                key={category.id}
                isSelected={category.id === selectedCategory}
                onPress={() => handleSelectCategory(category.id)}
                activeOpacity={0.6}
                testID={`category-${category.id}`}
              >
                <Image
                  style={{ width: 56, height: 56 }}
                  source={{ uri: "https://drive.google.com/file/d/14S5rRj_hxTVnhCiWEjVTzZISJjAgKW2a/view?usp=sharing"}}
                />
                <CategoryItemTitle>{category.name}</CategoryItemTitle>
              </CategoryItem>
            ))}
          </CategorySlider>
        </CategoryContainer>
        <MoviesContainer>
          <Title>Filmes</Title>
          <MovieList>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                onPress={() => handleNavigate(movie.id)}
                activeOpacity={0.6}
                testID={`movie-${movie.id}`}
              >
                <MovieImageContainer>
                  <Image
                    style={{ width: 88, height: 130 }}
                    source={{ uri: `${Constantes.URL.IMAGE_URL}${movie.poster_path}` }}
                  />
                </MovieImageContainer>
                <MovieContent>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieDescription>{movie?.overviewFormatado}</MovieDescription>
                  <MovieDetalhes>Ver mais.</MovieDetalhes>
                </MovieContent>
              </Movie>
            ))}
          </MovieList>
        </MoviesContainer>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
