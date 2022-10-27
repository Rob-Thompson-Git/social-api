const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller.js');

//api/user
router.route('/').get(getUsers).post(createUser);

//api/user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;