import React, { useState, useContext, useEffect } from 'react'
import { BookContext } from '../../Context/BookContext';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Books from '../Books/Books';
import './Booklist.css'
import Addform from '../Addform/Addform';
import Table from 'react-bootstrap/Table';
import Pagination from '../Pagination/Pagination';


const Booklist = () => {
    const { sortedBooks } = useContext(BookContext)

    const [showAlert, setShowAlert] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [currentPage, setCurrentPage] = useState(1)
    const [bookPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }
    // const handleShowAlert = () => setShowAlert(true);

    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert()

        }
    }, [sortedBooks])


    const indexOfLastBook = currentPage * bookPerPage;
    const indexOfFirstBook = indexOfLastBook - bookPerPage;
    const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook)
    const totalPagesNum = Math.ceil(sortedBooks.length / bookPerPage)

    return (
        <div className='homeContainer' >
            <div className='titleContainer'>
                <div className='title'>BOOKLIST</div>
                <div className='add'><button onClick={handleShow} className='addButton'>Add New</button></div>
            </div>
            <Alert show={showAlert} variant="success"  >
                Booklist Updated Successfully.
            </Alert>
            <Table striped bordered hover style={{ 'border': '2px solid black' }}>
                <thead >
                    <tr>
                        <th>BookName</th>
                        <th>Author Name</th>
                        <th style={{ width: "400px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentBooks.map(book => (
                            <tr key={book.id}><Books book={book} /></tr>
                        ))
                    }
                </tbody>
            </Table>
            <Pagination pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentBooks={currentBooks}
                sortedBooks={sortedBooks} />

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton style={{ border: '1px solid black', borderBottom: 'none' }}>
                    Add Books
                </Modal.Header>
                <Modal.Body style={{ border: '1px solid black' }}>
                    <Addform />
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default Booklist