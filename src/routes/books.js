const router = require('express').Router();
// const logger = require('./middlewares/logger');
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/books');

// router.use(logger);

router.get('/books', getBooks);
router.get('/books/:book_id', getBook);
router.post('/books', createBook);
router.put('/books/:book_id', updateBook);
router.delete('/books/:book_id', deleteBook);


module.exports = router;