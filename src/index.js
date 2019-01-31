import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import register from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventure os Huckleberry Finn',
                'Life on the Mississippi',
                'Roughing It' ]
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        imageSource: 'Wikimedia Commons',
        books: [' Heart od Darkness ' ]
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining',
                'IT' ]
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield',
                'A Tale of Two City',
                'Roughing It' ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet',
                'Macbeth',
                'Romeo and Juliet' ]
    },
    {
        name: 'Joanne Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: [' Harry Potter and the Sorcerers Stone ' ]
    }

];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) => 
                title === answer))
    }
}

function resetState() {
    return { 
        turnData: getTurnData(authors),
        highlight: ''
    };
} 

let state = resetState();

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function App (){
    return <AuthorQuiz {...state} 
    onAnswerSelected={onAnswerSelected} 
    onContinue={() => {
        state = resetState();
        render();
    }}/>;
}

const AuthorWrapper = withRouter (({ history }) =>
    <AddAuthorForm onAddAuthor={(author)=> {
        authors.push(author);
        history.push('/');
    }}/>
);

function render(){
    ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route path="/add" component={AuthorWrapper} />
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}
render();
    // register();
// registerServiceWorker();