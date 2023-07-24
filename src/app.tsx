import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from './Timeline';

type Book = {
  id: number;
  title: string;
  author: string;
  overview: string;
  image: string;
  reviews: Review[];
};

type Review = {
  id: number;
  username: string;
  comment: string;
  like: number;
};

const root = document.getElementById('react-root');
ReactDOM.render(<Timeline />,root);

export {Book, Review}





