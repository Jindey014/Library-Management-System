import React, { useContext, useState, useEffect } from 'react'
import { BookContext } from '../../Context/BookContext'
import './Books.css'
import Modal from 'react-bootstrap/Modal';
import Editform from '../EditForm/EditForm';


const Books = ({ book }) => {

    const { deleteBook } = useContext(BookContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose()
    }, [book])


    return (
        <>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td className='actions'>
                <button className='editButton' onClick={() => handleShow()}>Edit Details</button>
                <button className='deleteButton' onClick={() => deleteBook(book.id)}>Delete Book</button>
            </td>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton style={{ border: '1px solid black', borderBottom: 'none' }}>
                    Add Books
                </Modal.Header>
                <Modal.Body style={{ border: '1px solid black' }}>
                    <Editform theBook={book} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Books