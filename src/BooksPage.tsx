import React, { useState, useEffect } from 'react';

interface Book {
    title: string;
    author: string;
    id: number;
}
export function BooksList() {
    const [books, setBooks] = useState<Book[]>([])
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState('Loading');
    useEffect(() => {
        setMode("Loading")
        fetch(`http://localhost:3001/books?search=${search}`)
            .then(response => response.json())
            .then(json => setBooks(json.books))
            .then(() => { setMode('Ready') })
    }, [search])

   

    return (
        <div>
            <h1>Books</h1>
            <label>
                <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} ></input>
            </label>
            {mode === 'Ready' && <SearchResults books={books}></SearchResults>}
            {mode === 'Loading' && <p>Loading</p>}
        </div>
    );
}
interface BookProps {
    title: string;
    author: string;
    id: number;
}
const Book = (props: BookProps) => {
    return <li><a href ={`http://localhost:3000/books/${props.id}`}>{props.author}, {props.title} </a></li>
};

interface SearchResultProps {
    books: Book[];

}
function SearchResults(props: SearchResultProps) {

    const bookList = props.books.map((book: BookProps) => {
        return <Book author={book.author} title={book.title} id={book.id}></Book>
    })
    if (props.books.length === 0) {
        return (
            <p> No Results</p>
        )
    }
    return (

        <section>
            <h2>List of Books</h2>
            <a href ={"http://localhost:3000/add/book"}> Add Books</a>
            <ul>
                {bookList}
            </ul>
        </section>
    )
}
