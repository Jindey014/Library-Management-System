import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { BookContext } from '../../Context/BookContext';
import { useContext } from 'react';



const Editform = ({ theBook }) => {

    const id = theBook.id;

    const [name, setName] = useState(theBook.name)
    const [author, setAuthor] = useState(theBook.author)

    const { updateBook } = useContext(BookContext)

    const updatedBook = { id, name, author }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateBook(id, updatedBook)
    }




    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="" name="name" required value={name} onChange={(e) => setName(e.target.value)} style={{ color: 'gray' }} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Author: </Form.Label>
                <Form.Control type="text" placeholder="" name="author" required value={author} onChange={(e) => setAuthor(e.target.value)} style={{ color: 'gray' }} />
            </Form.Group>
            <Button type="submit" block style={{ marginTop: "2rem" }}>
                Edit
            </Button>
        </Form>
    )
}

export default Editform;