import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { BookContext } from '../../Context/BookContext';
import { useContext } from 'react';






const Addform = () => {

    const { addBook } = useContext(BookContext)
    const [newBook, setNewBook] = useState({
        name: '',
        author: ''
    })
    const onInputChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
    }

    const { name, author } = newBook;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(name, author)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="" name="name" required value={name} onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Author: </Form.Label>
                <Form.Control type="text" placeholder="" name="author" required value={author} onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Button type="submit" block style={{ marginTop: "2rem" }}>
                Add
            </Button>
        </Form>
    )
}

export default Addform