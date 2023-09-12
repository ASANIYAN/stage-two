import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from './pages/home/home';
import Movie from './pages/movie/movie';

import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
      </>
    )
  );

  return (
      <RouterProvider router={router} />
  )
}

export default App
