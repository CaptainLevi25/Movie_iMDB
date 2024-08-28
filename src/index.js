import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieList from './components/MovieList';
import { MovieProvider } from './context/MovieContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MovieProvider>
    <MovieList/>
  </MovieProvider>
);


