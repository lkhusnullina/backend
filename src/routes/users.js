const router = require('express').Router();
// const logger = require('./middlewares/logger');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

// router.use(logger);

router.get('/users', getUsers);
router.get('/users/:user_id', getUser);
router.post('/users', createUser);
router.put('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);


module.exports = router;