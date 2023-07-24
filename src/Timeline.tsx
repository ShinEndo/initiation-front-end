import React, { useEffect, useState } from 'react';
import { getBooks } from './api';
import { Book } from './app';
import { BookList } from './Booklist ';

function Timeline() {
    const [books,setBooks] = useState<Book[]>([]);
    useEffect(()=>{
        getBooks().then(books => setBooks(books));
    },[]);

    return (
        <div className="page">
            <h2 className="page__title">タイムライン</h2>
            <BookList books={books} />
        </div>
    )

}

export {Timeline};