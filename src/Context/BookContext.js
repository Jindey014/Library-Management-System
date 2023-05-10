import { useState, createContext, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([{
        id: uuidv4(),
        name: "Goosebumps",
        author: "R.L.Stine"
    },
    {
        id: uuidv4(),
        name: "Harry Potter",
        author: "J.K.Rowling"
    },
    {
        id: uuidv4(),
        name: "Fundamentals of Physics",
        author: "David Halliday"
    },
    {
        id: uuidv4(),
        name: "Don Quixote",
        author: "Miguel de Cervantes"
    },
    {
        id: uuidv4(),
        name: "The Lion, the Witch, and the Wardrobe",
        author: "C.S. Lewis"
    }])

    useEffect(() => {
        setBooks(JSON.parse(localStorage.getItem('books')))
    }, [])


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    })


    const sortedBooks = books.sort((a, b) => (a.name < b.name ? -1 : 1))

    const addBook = (name, author) => {
        setBooks([...books, { id: uuidv4(), name, author }])
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    const updateBook = (id, updatedBook) => {
        setBooks(books.map((book) => book.id === id ? updatedBook : book))
    }

    return (
        <BookContext.Provider value={{ sortedBooks, addBook, deleteBook, updateBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider