import React, { useState, useEffect } from 'react';

import CONST from './data/constants';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Loading from './components/Loading';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies ] = useState<any>();
  const [series, setSeries] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesdata = await movies.json();
      setMovies(moviesdata);

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesdata = await series.json();
      setSeries(seriesdata);

      setLoading(false);
    }

    fetchData();
  },[]);

  //useEffect(() => {
    //movies && console.log(movies);
  //}, [ movies ]);

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {loading && (
        <>
          <Loading/>
          <NavBar/>
        </>
      )}
      {!loading && (
      <>
      <Hero {...getFeaturedMovie()}/>
      <NavBar/>
      <Carousel title="Filmes em Destaque" data={getMovieList()}/>
      <Carousel title="Séries em Destaque" data={series?.results}/>
      <Carousel title="Populares"/>
      </>
      )}
      <Footer/>
    </div>
  );
};

export default App;
