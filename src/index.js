import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'image/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventure os Huckleberry Finn']

    }

];

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
};

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
